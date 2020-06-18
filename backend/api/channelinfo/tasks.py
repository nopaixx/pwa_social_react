from api.channelinfo.json_data.channel_list import channel_list
from api.channelinfo.json_data.playlist_list import playlist_list
from api.channelinfo.json_data.playlistitems_list import playlistitems_list
from api.channelinfo.json_data.premium_content import premium_content
from api.channelinfo.json_data.latest_videos import latest_videos
from api.channelinfo.json_data.header import header

from api.channelinfo import ChannelInfo


def youtube_get_channel_info(channel_info):

    # TODO do real call
    return channel_list

def youtube_get_playlist_info(channel_info, data):

    # TODO do real call
    return playlist_list

def youtube_get_playlistitems_list(channel_info, data):
    
    hash_data = dict()

    num = 0

    for element in data["playlist_list"]['items']:

        # TODO getplaylistitems_lsit from this playlist 
        element['videos'] = playlistitems_list
        
        # we create a hashed table used for the frontend
        for video in playlistitems_list['items']:
            hash_data[video['contentDetails']['videoId']] = video
        # we need breakbecause playlistitems_list is only for the first play list we need
        # a real call for all playlists
        num +=1
        if num > 2:
            break


    # hash_data is a happy fast indexed table for the frontend
    # hash_data = dict()

    return hash_data

def youtube_get_premium_content(channel_info, data):

    # TODO do something based on user management experiencie and return a premium content list

    return premium_content


def youtube_get_latest_videos(channel_info, data):

    # parse cahce_data and newest 15 videos

    return latest_videos

def youtube_get_header(channel_info, data):


    return header

def refreshRequest(channel_id):


    channel_info = ChannelInfo.query.filter(ChannelInfo.id == channel_id).first()

    data = dict()
    # for now we can fake the response from google
    data["channel_list"] = youtube_get_channel_info(channel_info)
    data["playlist_list"] = youtube_get_playlist_info(channel_info, data)
    data["cache_data"] = youtube_get_playlistitems_list(channel_info, data)
    data["premium_content"] = youtube_get_premium_content(channel_info, data)
    data["latest_videos"] = youtube_get_latest_videos(channel_info, data)
    data["header"]  = youtube_get_header(channel_info, data)
    
    channel_info.new_request(data)
