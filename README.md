# GitHub Email Extractor

> Browser extension to display email ID of any GitHub user (even if it isn't public on their GitHub profile by getting information from GitHub user's commits, owned repository commit activity)

[![Chrome Store](https://raw.githubusercontent.com/prabhakar267/github-classifier/master/assets/images/chrome-store.png)](https://chrome.google.com/webstore/detail/github-show-email/pndebicblkfcinlcedagfhjfkkkecibn)

| Before | After |
| --- | ---|
| ![GitHub Email Extractor](/.github/screenshots/Screenshot%20from%202016-08-16%2000-09-33.png?raw=true) | ![GitHub Email Extractor](/.github/screenshots/Screenshot%20from%202016-08-16%2000-05-54.png?raw=true) |


## How it works

+ Makes an API call to [github-email-extractor server](https://github.com/prabhakar267/github-email-extractor-server) with the GitHub username.
+ Server checks if there's an email ID for given username, else it parses all the GitHub acitvity for the user to get the email address.


## Contribute
+ Open a [new issue](https://github.com/prabhakar267/github-email-extractor/issues/new) to request new feature or report a bug.
+ Raise a PR to fix an [existing issue](https://github.com/prabhakar267/github-email-extractor/issues?q=is%3Aopen+is%3Aissue).


## Other Useful GitHub Extensions
+ [Follow Me or Not](https://github.com/mkstn/follow-me-or-not)
+ [GitHub Classifier [Deprecated]](https://github.com/prabhakar267/github-classifier)

## Python Package
GitHub Email Extractor can be used as a Python library [```github_email```](https://github.com/prabhakar267/github_email)
[![PyPI version](https://badge.fury.io/py/github_email.svg)](https://badge.fury.io/py/github_email)




