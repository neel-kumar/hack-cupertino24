from flask import Blueprint

app = Blueprint('shlok', __name__)

@app.route('/shlok', methods=['POST'])
def index():
    return "This is an example app"