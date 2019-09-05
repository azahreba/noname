from flask import Flask, Response, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('web/index.html')

@app.route('/register_user', methods=['POST'])
def register_user():
    # user_id = uuid.uuid1()
    # db = DB()
    # db.save_embedding(user_id, user_name, [])

    return Response()


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
