from flask import Blueprint

app = Blueprint('neel', __name__)

@app.route('/neel', methods=['POST'])
def index():
    return "This is an example app"