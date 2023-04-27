const elmHostName = document.getElementById("hostname");
const elmResult = document.getElementById("result");

const getHostName = (url) => {
  return new URL(url).hostname;
}

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const hostname = getHostName(tabs[0].url);
  elmHostName.innerText = hostname;

  chrome.runtime.sendMessage({ hostname: hostname }, (response) => {
    const report = response.value.replace(/(?:\r\n|\r|\n)/g, '<br>');
    elmResult.innerHTML = report;
  });
});
