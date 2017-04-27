window.onload =init;

var email;
var check;
var firstname;
var lastname;
var mobile;
var checkButton;

 function init(){
	checkButton=document.getElementById("checkButton");
	firstname=document.getElementById("firstname");
	email=document.getElementById("email");
	check=document.getElementById("check");
	lastname=document.getElementById("lastname");
	mobile=document.getElementById("mobile"); //값 얻어오기

	var ch1=new checkFirstName();
	var lh1=new checkLastName();
	var mh1=new checkMobile();

	email.addEventListener('blur',checkEmail,false);
	firstname.addEventListener('blur',ch1.addErrorMessage,false);
	lastname.addEventListener('blur',lh1.addErrorMessage,false);
	mobile.addEventListener('blur',mh1.addErrorMessage,false); //이벤트리스너생성

	
	function checkEmail(){//email유효성검사
		if(email.value!=""){
		if(!email.value || email.value.indexOf('@') == -1){
			alert("유효한 이메일값을 입력해주세요!");
			email=document.getElementById("email").select();
			email=document.getElementById("email").focus();
			}
		}
		else{
			alert("이메일을 입력해주세요");
		}

	}//end of checkEmail'
	
	function checkSubmit(){
		

	}



 }//end of init
function checkFirstName(){
	
	this.addErrorMessage=function message(){
		var firstname=document.getElementById("firstname").value;
		if(firstname==""){//성 필수입력사항
			alert("성을 입력해주세요!");
			firstname=document.getElementById("firstname").select();
			firstname=document.getElementById("firstname").focus();
		}//end of if
	


	}
 }//end of checkFirstName
 function checkLastName(){ 
	this.addErrorMessage=function message1(){
		
		var lastname=document.getElementById("lastname").value;
		var length=String(lastname).length;
		if(this.lastname!=""){//이름 필수입력사항
			if(length<=0 || length>5){
				alert("이름의 길이확인 및 이름을 입력해주세요!");
				lastname=document.getElementById("lastname").select();
				lastname=document.getElementById("lastname").focus();
			}
			
		}

	}


 }//end of checkLastName
function checkMobile(){
	 this.addErrorMessage=function message2(){
		 var regExp=/^\d{3}-\d{3}-\d{4}$/; //정규식표현xxx-xxx-xxxx
		 var regExp1 = /^[0-9]{10}$/ //정규식표현 xxxxxxxxxx
		 var mobile=document.getElementById("mobile").value;
		 if(this.mobile!=""){
			 if(!(regExp.test(mobile) || regExp1.test(mobile))){
				alert("유효한 전화번호를 입력하세요");
				mobile=document.getElementById("mobile").select();
				mobile=document.getElementById("mobile").focus();
			 }
		 }//end of if
		  else{
				alert("전화번호를 입력해주세요!");
				mobile=document.getElementById("mobile").select();
				mobile=document.getElementById("mobile").focus();
		 }//end of else

	 }
}
	 
 



 
