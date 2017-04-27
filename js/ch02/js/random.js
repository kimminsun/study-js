 window.onload=init;

  var buttonA;
  var buttonB; //전역 변수 선언
  //buttonD,buttonC 전역 변수
  //VAR 는 함수 밖은 전역 변수, 함수 안은 지역 변수

  function init(){
	buttonA=document.getElementById("buttonA");//id로 html요소 얻어오기
	buttonB=document.getElementById("buttonB");

	buttonA.onclick=function(){
		//var buttonA 지역변수 선언, 이 함수 안에서만 사용 가능
		//buttonE,buttonF 전역변수 
		result.innerHTML=Math.floor(Math.random()*10+1);
	}
	buttonB.onclick=function(){
		result.innerHTML=Math.floor(Math.random()*100+1);
	}
  }