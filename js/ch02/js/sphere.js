//이벤트(window.onload) 발생
window.onload = init;
//버튼을 누르는 이벤트 

var radius;
var total;
function init(){
	document.getElementById("myform").onsubmit=calculate;
}
//계산함수 - 버튼이벤트 핸들러
function calculate(){
	//요소값 얻어오기

	var total_c=0;

	radius=document.getElementById("radius").value;
	total=document.getElementById("total").value;

	if(radius>0){

	total_c=(4/3)*Math.pow(radius,3)*Math.PI;
	total_c=total_c.toFixed(2);
	//총구매액 출력
	document.getElementById("total").value=total_c;

	return false;
	}else{
		radius.value="";
		alert("반지름은 양수입니다");
	}
	

}