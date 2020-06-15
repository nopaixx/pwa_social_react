from flask import Blueprint
from api.channelinfo import ChannelInfo


from api.channelinfo.tasks import refreshRequest

bp = Blueprint("chanelinfo", __name__)


@bp.route("/domain/<subdomain>", methods=["GET"])
def get_channel_info(subdomain):

    channel_info = ChannelInfo.query.filter(ChannelInfo.subdomain==subdomain).first()

    data = channel_info.getLatestRequest()

    return {
            "youtube": data
            }, 200


@bp.route("/dummy/<channel_id>", methods=["GET"])
def job_forchannel(channel_id):

    refreshRequest(channel_id)
    return "OK", 200 
