function getdetail(t)
{
var te= $('#span'+t).html();
$("#to").val(te);
}
function deletetag(c)
{
var r=confirm("Are you sure to delete this tag ?");
var e=window.localStorage.length;

if (r==true)
  {
  if(window.localStorage.length==1)
  {
  window.localStorage.clear();
        window.location.reload()
  }
  else
  {
  var t= $('#sp'+c).html();
  window.localStorage.removeItem(t);
  window.location.reload()
  }
  }

}
function toggleinfo() {
    var ab=document.getElementById('desc').value;
    if(ab=="")
    {
    alert("Please enter tag info.");
    }
    else{
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/tag2.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/tag2.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
    }
   
} 
function toggle() {
    var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/car.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/car.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
	location.reload();
	
     
       
} 

function toggle1() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/house.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/house.png#"; 
   
    var val10=document.getElementById('pos').value;
     var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
function toggle2() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/supermarket.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/supermarket.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
function toggle3() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/atm-2.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/atm-2.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
   location.reload();
} 
function toggle4() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/house.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/house.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
   location.reload();
} 
function toggle5() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/bar.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/bar.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
 function toggle6() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/bus.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/bus.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
 function clearStorage(){
        var cnf=confirm("Are you sure to clear all tags ?");
        if(cnf==true)
        {
        window.localStorage.clear();
        window.location.reload();
        }
        
    }
function toggle7() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/highway.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/highway.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
 
    function toggle8() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/busstop.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/busstop.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
 
    function toggle9() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/busstop.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/busstop.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
function toggle10() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/busstop.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude: #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b> #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/busstop.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
function toggle11() {
    
	var str1="key";
    var str2=window.localStorage.length;
    var key=str1.concat(str2);
    var val1="<img src='images/busstop.png'>#  #";
    var val2=document.getElementById('desc').value;
    var val3="# Latitude: #";
    var val4=document.getElementById('lat').value;
    var val5="#, Longitude #";
    var val6=document.getElementById('lon').value;
    var val7="# <b>Taged On</b>: #";
    var currentdate = new Date();
    var val8 =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var val9="#images/busstop.png#"; 
   
    var val10=document.getElementById('pos').value;
    var val11="#"+key;
    var value=val1.concat(val2,val3,val4,val5,val6,val7,val8,val9,val10,val11);
	window.localStorage.setItem(key,value); 
    location.reload();
} 
  function version()
  {
  alert("Version 1.0.0");
  }
    function aboutus()
  {
  window.location.href="http://www.abs-us.com/aboutus.html";
  }