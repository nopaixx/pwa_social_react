import json

from api.database import db, Model


# 
from sqlalchemy import desc
from datetime import datetime


class ChannelInfo(db.Model, Model):


    channel_name = db.Column(db.String(255))
    subdomain = db.Column(db.String(255))


    def getLatestRequest(self):

        latest = Latest.query.filter(Latest.channel_info_id==self.id).order_by(desc(Latest.updated)).first()

        return json.loads(latest.data)


    def new_request(self, data):
        

        string_data = json.dumps(data)
        self.latest.append(Latest.cache_new_request(string_data))

        db.session.commit()

    def getManifest(self):

        ret = {
                "short_name": "Youtube channel Name",
                "name": "Youtube channel Name - long",
                "icons": [
                        {
                           "src": "https://yt3.ggpht.com/a/AATXAJwTUV61MSj2X7gY4UkyRfDbQ1xgQf4mAZfLZA=s800-c-k-c0xffffffff-no-rj-mo",
                           "type": "image/png",
                           "sizes": "800x800"
                        }
                    ],
                "start_url": ".",
                "display": "standalone",
                "theme_color": "#000000",
                "background_color": "#ffffff"
                }
        return ret
        

class Latest(db.Model, Model):


     channel_info_id = db.Column(db.Integer, db.ForeignKey("channel_info.id"))
     channel_info = db.relationship("ChannelInfo", backref='latest', lazy="subquery")


     data = db.Column(db.String())

     @classmethod
     def cache_new_request(cls, data):

         model = cls()

         model.created = model.updated = datetime.utcnow()
         model.data = data

         return model
        
