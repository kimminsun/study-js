window.onload=init;
  function init(){
	document.getElementById("myform").onsubmit=calculate;
}
  function calculate(){

	  var total_eve;
	  
	 kor=document.getElementById("kor").value;
	 eng=document.getElementById("eng").value;
	 math=document.getElementById("math").value;

	 total_eve=(Number(kor)+Number(eng)+Number(math))/3.0;
	 total_eve=total_eve.toFixed(2);

	 if(total_eve>=90)
		 document.getElementById("score").value="A";
	 else if(total_eve>=80)
		 document.getElementById("score").value="B";
	 else if(total_eve>=70)
		document.getElementById("score").value="C";
	 else if(total_eve>=60)
		document.getElementById("score").value="D";
	 else
		document.getElementById("score").value="E";

	document.getElementById("eve").value=total_eve;
	return false;


  }
	 

