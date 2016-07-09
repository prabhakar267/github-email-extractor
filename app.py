# -*- coding: utf-8 -*-
# @Author: prabhakar
# @Date:   2016-07-09 21:06:19
# @Last Modified by:   prabhakar
# @Last Modified time: 2016-07-10 00:38:27

import requests.packages.urllib3
requests.packages.urllib3.disable_warnings()

from flask import Flask, abort, request
from flask.ext.cors import CORS

import github_email

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST', 'GET'])
def main():
    if request.method == 'GET':
        abort(404)
    else :
        github_username = request.form.get('username').encode('ascii', 'ignore')
        x = github_email.get(github_username)
        
        if x['success']:
            return "{0}".format(x['email'][0])
        else:
            abort(404)

@app.errorhandler(404)
def page_not_found(error):
    return "Check '<a href=\"https://github.com/prabhakar267/chrome-github-email\">chrome-github-email</a>' for details"


if __name__ == "__main__" :
    app.run(debug=True)
