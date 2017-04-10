function ReadCookie(name) {
 if (name == "") return "";
 var strCookie =" " + document.cookie;
 var idx = strCookie.indexOf(" " + name + "=");
 if (idx == -1) idx = strCookie.indexOf(";" + name + "=");
 if (idx == -1) return "";

 var idx1 = strCookie.indexOf(";", idx+1);
 if (idx1 == -1) idx1 = strCookie.length; 
 return unescape(strCookie.substring(idx + name.length+2, idx1));
}

function SetCookie(name,value,days) {
 var now= new Date();
 var expDate = new Date();
 if (days==null || days==0) days=1;
 //create date after no of "days" from now
 expDate.setTime(now.getTime() + 3600000*24*days);
 
 //create cookie with name, value and expire date
 document.cookie=name+"="+escape(value)+";expires="+expDate.toUTCString();
}

function setFont() {
  var sz = ReadCookie('fs');
  if (sz != null && sz != '') {
     document.body.style.fontSize= sz;
  }
}

function resizeFont(multiply) {

var el = document.body;
var sz = window.getComputedStyle(el, null).getPropertyValue('font-size');

  if (sz =='') sz = 14; //default font size

  var size = parseFloat(sz) + (multiply * 1.5) + "px";
  document.body.style.fontSize = size;

  SetCookie("fs", size, 3); //store the size value in the cookie for 30 days
}