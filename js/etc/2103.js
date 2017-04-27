window.onload=init;
function init(){
	document.getElementById("theForm").onsubmit=Calculate;
}
function Calculate(){
	var room=document.getElementById("room"); // 방갯수
	var roomtype=document.getElementById("roomtype"); //기본요금
	var start=document.getElementById("start");
	var end=document.getElementById("end");
	var roomnumber=document.getElementById("roomnumber");
	var money=document.getElementById("money");
	
	var result="";
	var day=1000*60*60*24;

	var start1=new Date(start.value);
	var end1=new Date(end.value);

	var money1,roomm;

	
	if(start1.getTime()&&end1.getTime()){
		if(start1<=end1){
			var date=end1-start1;
			result=Math.round(date/day);
		}
		else{
			alert("체크인날짜가 체크아웃날짜보다 늦습니다.다시 입력하세요.");
			return false;
		}
	}

	var roomn=Math.floor(Math.random()*1000)+1;
	switch(roomtype.value)
	{
		case "Standard":
			roomm=10000;
		break;
		case "Double":
			roomm=15000;
		break;		
		case "JuniorSuit":
			roomm=20000;
		break;
		case "Suit":
			roomm=25000;
		break;
	}
	
	if(result>=2){
		alert("2박 이상일 경우 숙박비 10%가 할인됩니다.");
		money1=room.value*roomm*result*0.9;
	}
	else{
		money1=room.value*roomm*result;
	}
	
	
	roomnumber.value=roomn;
	money.value=money1;

	return false;
}

