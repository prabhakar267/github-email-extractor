# -*- coding: utf-8 -*-
# @Author: prabhakar
# @Date:   2016-07-09 21:06:19
# @Last Modified by:   Prabhakar Gupta
# @Last Modified time: 2016-07-10 19:04:06

import json
import requests.packages.urllib3
requests.packages.urllib3.disable_warnings()

from flask import Flask, abort, request
from flask.ext.cors import CORS

import github_email

EMAIL_FILE = "email_file"
app = Flask(__name__)
CORS(app)

@app.route("/", methods=['POST', 'GET'])
def main():
    if request.method == 'GET':
        abort(404)
    else:
        github_username = request.form.get('username').lower()

        with open(EMAIL_FILE, 'r') as f:
            email_dict = json.loads(f.read())

        # check if the email was found earlier or not
        if email_dict.get(github_username):
            return email_dict[github_username]

        response = github_email.get(github_username)
        if response['success']:
            email = response['email'][0]

            # add email to be used in future
            email_dict[github_username] = email
            with open(EMAIL_FILE, 'w') as f:
                json.dump(email_dict, f)
            
            return "{0}".format(email)
        else:
            abort(404)

@app.errorhandler(404)
def page_not_found(error):
    return "Check '<a href=\"https://github.com/prabhakar267/chrome-github-email\">chrome-github-email</a>' for details"


if __name__ == "__main__" :
    app.run(debug=True)
