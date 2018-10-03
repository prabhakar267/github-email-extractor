chrome.browserAction.onClicked.addListener(() => {
  const githubRepositoryURL = 'https://github.com/prabhakar267/github-email-extractor';
  chrome.tabs.create({ url: githubRepositoryURL });
});
