
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Model(object):
    """Abstract implementation of the REST model."""

    id = db.Column(db.Integer(), primary_key=True)
    created = db.Column(db.DateTime())
    updated = db.Column(db.DateTime())

    @classmethod
    def serialize(cls, model):
        """Returns the serialized version of this model."""
        return {
            "id": model.id,
            "created": str(model.created),
            "updated": str(model.updated),
        }

    @classmethod
    def serialize_list(cls, models):
        """Returns the serialized version of a list of models."""
        serialized = []
        for model in models:
            serialized.append(model.serialize())

    @classmethod
    def boolean(cls, parameter):
        """Validates a boolean against a form or JSON parameter."""
        return parameter in ["1", "True", "true", True]

