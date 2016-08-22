// JavaScript Document
(function (win,doc){
	function change(){
		doc.documentElement.style.fontSize = doc.documentElement.clientWidth/320*20+'px';	
	}
	change();
	win.addEventListener('resize',change,false);
		
})(window,document);
window.addEventListener('DOMContentLoaded',function (){
	var oNav = document.querySelector('.nav');
	var aI = document.querySelectorAll('.nav i');
	for (var i=0; i<aI.length; i++){
		aI[i].style.background = 'url(../img/cont.png) no-repeat 0 '+-i*2+'rem';
		aI[i].style.backgroundSize = '16rem 16rem';
	}	
},false);