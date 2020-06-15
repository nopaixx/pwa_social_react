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
        
