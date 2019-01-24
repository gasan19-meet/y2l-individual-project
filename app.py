from flask import Flask,render_template,url_for,redirect,request,session as flask_session
from database import add_Post, query_post_by_food

app = Flask(__name__)
app.secret_key = 'super secret key'
app.config['SESSION_TYPE'] = 'filesystem'

@app.route('/')
def home_page():
	# posts=
	return render_template('final-home.html')

@app.route('/steak', methods= ['GET', 'POST'])
def steak_page():
	if request.method == 'GET':
		steaks = query_post_by_food('steak')
		steaks = steaks[::-1]
		return render_template('steaks.html', steaks = steaks)
	else:
		recipe = request.form['recipe']
		
		add_Post('steak', recipe)
		steaks = query_post_by_food('steak')
		steaks = steaks[::-1]

		# return redirect(url_for('home_page'))
		return render_template('steaks.html',steaks=steaks)

@app.route('/create-post',methods=['GET','POST'])
def create_post(): 
    if request.method == 'GET':
        return render_template('create_post.html')
    else:
        post_string = request.form['post_submit']
        add_Post(post_string)
        return redirect(url_for('home_page'))

@app.route('/salad', methods = ['GET', 'POST'])
def salad_page():
	if request.method == 'GET':
		salads = query_post_by_food('salad')
		salads = salads[::-1]
		return render_template('salad.html', salads = salads)
	else:
		recipe = request.form['recipe']
		add_Post('salad', recipe)
		salads = query_post_by_food('salad')
		salads = salads[::-1]

		return render_template('salad.html', salads = salads)

@app.route('/pasta', methods=['GET', 'POST'])
def pasta_page():
	if request.method == 'GET':
		pastas = query_post_by_food('pasta')
		pastas = pastas[::-1]
		return render_template('pasta.html', pastas = pastas)
	else:
		recipe = request.form['recipe']
		add_Post('pasta', recipe)
		pastas = query_post_by_food('pasta')
		pastas = pastas[::-1]

		return render_template('pasta.html', pastas = pastas)



if __name__ == '__main__':
    app.run(debug=True)

