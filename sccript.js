// var link11=null;
// chrome.tabs.query({
// active: true,
// lastFocusedWindow: true
// }, function(tabs) {
// // and use that tab to fill in out title and url
// var tab = tabs[0];
// alert(tabs[0].url);
// link11=tab.url;
// // var urls = undefined;
// // chrome.storage.session.get(['urls'], function(result) {
// //   if (result)
// //     urls = JSON.parse(result);
// //   else 
// //     urls = []
// // });
// // urls = urls.concat([tab.url]);
// // alert(urls);
// // chrome.storage.session.set({urls: JSON.stringify(urls)}, function() {
// // });

// // alert(urls[0]);
// link11=tab.url;


// fetch(link11)
// .then(response => {
//   var page = document.createElement('html');
//   page.innerHTML = response;
//   alert( page.getElementByClassName("prodDetAttrValue").innerHTML);
// })
// .then(jsondata => console.log(jsondata));
//  });


var PlasticUsed = 2*((l*b)+(l*h)+(b*h));
var CarbonEmission = 180.5*dist;
var WaterUsed = PlasticUsed * 0.45469576719;
l= l + 0.5;
h= h + 0.5;
b= b + 0.5;
var TreesCut = 2*((l*b)+(l*h)+(b*h));