

from flask import Flask
app = Flask(__name__)


from shlok import app as shloksCode
from neel import app as neelsCode
app.register_blueprint(shloksCode)
app.register_blueprint(neelsCode)


if __name__ == '__main__':
    app.run()