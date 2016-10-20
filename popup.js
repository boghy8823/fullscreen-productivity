
function getCurrentTabUrl(callback) {

  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
  
    var tab = tabs[0];

    
    var url = tab.url;

    console.assert(typeof url == 'string', 'tab.url should be a string');
    $('.url-bar').val(url);
    $('.tab-title').text(tab.title);
    callback(url);
  });


}

function openNewTab(url,callback){
  var data = { 
    url: "http://www.google.com"
    //state: 'fullscreen'
  };
  //chrome.windows.create(data, callback);
}

chrome.commands.onCommand.addListener(function(command) {
        console.log('Command:', command);
      });


document.addEventListener('onDomReady', function(){
  getCurrentTabUrl(function(url) {
    openNewTab(url, function(window) {
      console.log("Tab Created");
    }, function(errorMessage) {
      console.log(errorMessage);
    });
  });
})

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    openNewTab(url, function(window) {
      console.log("Tab Created");
    }, function(errorMessage) {
      console.log(errorMessage);
    });
  });
});
