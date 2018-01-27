chrome.browserAction.onClicked.addListener(function(activeTab) {
    var githubRepositoryURL = "https://github.com/prabhakar267/github-email-extractor";
    chrome.tabs.create({ url: githubRepositoryURL });
});