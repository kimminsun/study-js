//이벤트(window.onload) 발생
window.onload = init;
//버튼을 누르는 이벤트 
function init(){
	document.getElementById("myform").onsubmit=calculate;
}
//계산함수 - 버튼이벤트 핸들러
function calculate(){
	//요소값 얻어오기

	var tax_c=0;
	var total_c=0;

	quantuty=document.getElementById("quantuty").value;
	price=document.getElementById("price").value;
	tax=document.getElementById("tax").value;

	//세금계산
	tax_c=tax*price*quantuty*0.01;
	//alert(tax_c);
	//총구매액 계산
	total_c=quantuty*price+tax_c;
	//총구매액 출력
	document.getElementById("total").value=total_c;

	return false;
	

}