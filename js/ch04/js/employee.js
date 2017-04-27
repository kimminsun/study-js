window.onload=init;

function init(){
	document.getElementById("theForm").onsubmit=process;
}

function process(){
	var firstName=document.getElementById('firstName').value;
	var lastName=document.getElementById('lastName').value;
	var department=document.getElementById('department').value;
	var output=document.getElementById('output');
	
	var employee={
		firstName:firstName,
		lastName:lastName,
		department:department,
		hireDate:new Date()
	};
	
	var message="<h2>추가된 사윈</h2>이름:"+employee.lastName+", "+employee.firstName+"<br>";
	message+="부서:"+employee.department+"<br>";
	message+="고용일:"+employee.hireDate.toDateString();

	//document.getElementById("output").value=message;	->X
	//output.innerText = message;	->x

	output.innerHTML= message;
	
	return false;
}