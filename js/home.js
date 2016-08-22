// JavaScript Document
window.addEventListener('DOMContentLoaded',function (){
	var oHeader = document.querySelector('header');
	var oDescribe = document.querySelector('.describe');
	var oIntroduce = document.querySelector('.introduce');
	var myMusic = document.querySelector('.music');
	var aDl = myMusic.children;
	var aDiv = oHeader.children;
	var aLi = oIntroduce.children;
	//添加相应的class
	oDescribe.classList.add('bounceInRight');
	
	for (var i=0; i<aDiv.length; i++){
		(function (index){
			
			
			aDiv[i].addEventListener('mouseover',function (){
				//alert('1');
				this.classList.remove('out');	
				this.classList.add('over');	
				
			},false);
			
			
			aDiv[i].addEventListener('mouseout',function (){
				this.classList.remove('over');
				this.classList.add('out');	
				var _this =this;
			},false);
			
			
			aDiv[i].addEventListener('click',function (){
				//alert(1);
				oDescribe.classList.remove('bounceInRight');
				oDescribe.classList.add('bounceOutLeft');
				var re = new RegExp('\\bbounceInRight\\b','g');
				for (var i=0; i<aLi.length; i++){	
					aLi[i].classList.remove('bounceOutLeft');
					aLi[i].style.display ='none';				
					if (re.test(aLi[i].className)){
						aLi[i].style.display = 'block';
						aLi[i].classList.remove('bounceInRight');
						aLi[i].classList.add('bounceOutLeft');
						//aLi[i].style.opacity =0;
					}
					
				
				}
				//aLi[index].style.opacity = 1;
				var re2 =  new RegExp('\\bbounceOutLeft\\b','g');
				if (re2.test(aLi[index].className)){
					aLi[index].classList.remove('bounceOutLeft');
				}
					aLi[index].classList.add('bounceInRight');
					aLi[index].style.display = 'block';	
				
			},false);
		})(i);
	}
	var bOk = true;
	aDl[0].addEventListener('click',function (){
		if (bOk){
			myMusic.style.height = '150px';
			bOk =!bOk;
		}else{
			myMusic.style.height = '30px';
			bOk =!bOk;
		}
		 	
	},false);
	var oMusic = new Audio();
	for (var i=1; i<aDl.length; i++){
		aDl[i].addEventListener('click',function (){
			//alert(aDl[i].innerHTML);
			oMusic.src = 'music/'+this.innerHTML+'.mp3';
			oMusic.play();
				
		},false);
	}
	
	
},false);
