from flask import Flask,render_template
app=Flask(__name__)
@app.route("/index")
def TestCase1():
    return render_template("index1.html")
if(__name__=="__main__"):
    app.run(debug=True)