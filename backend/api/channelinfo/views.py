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



@bp.route("/title/<subdomain>", methods=["GET"])
def get_title(subdomain):
    return "Youtube chanel", 200


@bp.route("/icon/<subdomain>", methods=["GET"])
def get_icon(subdomain):
    return "https://yt3.ggpht.com/a/AATXAJwTUV61MSj2X7gY4UkyRfDbQ1xgQf4mAZfLZA=s88-c-k-c0xffffffff-no-rj-mo", 200


@bp.route("/apple-touch-icon/<subdomain>", methods=["GET"])
def get_apple_touch(subdomain):
    return 'https://yt3.ggpht.com/a/AATXAJwTUV61MSj2X7gY4UkyRfDbQ1xgQf4mAZfLZA=s240-c-k-c0xffffffff-no-rj-mo', 200


@bp.route("/manifest/<subdomain>", methods=["GET"])
def get_manifest(subdomain):

    channel_info = ChannelInfo.query.filter(ChannelInfo.subdomain==subdomain).first()

    data = channel_info.getManifest()

    return data, 200
