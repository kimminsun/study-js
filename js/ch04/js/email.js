window.onload=init;

function init(){
	document.getElementById("theForm").onsubmit=process;
}

function process(){

	var email=document.getElementById('email').value;
	//유효성 체크 =>@
	if(!email || email.indexOf('@') == -1){
		alert("유효한 주소값을 입력하세요");
	}
	var comment=document.getElementById('comment').value;
	if(!comment || comment.indexOf('<') || comment.indexOf('>')==-1){
		
	}else
		alert("Please enter your comments,without any HTML!");

	return false;
}