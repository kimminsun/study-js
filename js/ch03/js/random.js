window.onload=shownumbers;

function shownumbers(){
	var numbers="";
	var output=document.getElementById("output");
	
	for (i=0;i<6 ; i++)
	{
		numbers+= parseInt((Math.random()*100),10)+" ";
	}
	if(output.textContent!==undefined){
		output.textContent=numbers;
	}else{
		output.innerText=numbers;
	}
}