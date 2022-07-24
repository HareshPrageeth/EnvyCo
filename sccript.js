var link11=null;
chrome.tabs.query({
active: true,
lastFocusedWindow: true
}, function(tabs) {
var tab = tabs[0];
alert(tabs[0].url);
link11=tab.url;

fetch(link11)
.then(response => {
  var page = document.createElement('html');
  page.innerHTML = response;
  name=page.getElementById("productTitle").innerHtml;
  dist=page.getElementByClassName("prodDetAttrValue").innerHTML;
  dim=page.getElementByClassName("a-size-base prodDetAttrValue").innerHTML
})
.then(jsondata => console.log(jsondata));
 });
var l=dim[0];
var b=dim[1];
var h=dim[2];

const ProdNames = [];
const WaterUsed = [];
const PlasticUsed = [];
const TreesCut= [];
const CarbonEmission = [];
const FinalRank= [];


var ProdNames = name
var PlasticUsed = 2*((l*b)+(l*h)+(b*h));
var CarbonEmission = 180.5*dist;
var WaterUsed = PlasticUsed * 0.45469576719;
l= l + 0.5;
h= h + 0.5;
b= b + 0.5;
var TreesCut = 2*((l*b)+(l*h)+(b*h))*0.000000029116344;


function resetvals() {
  ProdNames = [];
  WaterUsed = [];
  PlasticUsed = [];
  TreesCut= [];
  CarbonEmission = [];
  FinalRank= [];
}

function addlist() {
  ProdNames.push(prodname);
  WaterUsed.push(WaterUse);
  PlasticUsed.push(PlasticUse);
  TreesCut.push(TreesCu);
  CarbonEmission.push(CarbonEmissio);

}
