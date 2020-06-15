import sys
import os
from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from api.config import Config
from flask_migrate import Migrate
from api.database import db
from api.config import Config
app = Flask(__name__)

# app.init_app(Config)
app.config.from_object(Config)

a = os.environ.get("DATABASE_URL", "sqlite://")

print(a, file=sys.stderr)

db.init_app(app)

migrate = Migrate(app, db)

@app.route("/")
def hello_world():
    return jsonify(hello="world4")


from api.channelinfo.views import bp as channelinfo

app.register_blueprint(channelinfo, url_prefix='/channel')
