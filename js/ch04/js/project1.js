window.onload=init;

var canvas; //전역변수
var ctx;
var stuff=[];
var diffx; //이동 시 거리유지(끈끈이효과를 위해서)
var diffy;
//var submit;

function init() {
	//캔버스 사용 초기화 => js의 다양한 api 사용 가능
	canvas=document.getElementById("canvas");
//	submit=document.getElementById("submit");
	ctx=canvas.getContext("2d");
	//이벤트 : 자바와 다른 점이 있다면 형식이 다름
	document.getElementById("submit").onclick=remove;//이벤트 앞에 on을 붙혀야한다. 

//	submit.addEventListener("click",remove,false); //이벤트 명 on x
	canvas.addEventListener("dblclick", copyItem, false); //더블클릭하는 이벤트
	canvas.addEventListener("mousedown", startDrag, false); //마우스로 클릭하는 이벤트

	var r1=new Rect(10, 50, 20, 200, "pink"); //사각형 만들기    
	var r2=new Rect(260, 10, 100, 200, "purple");  
	var r3=new Rect(150, 200, 70, 100, "blue");
	var c1=new Circle(450, 130, 40, "red");
	var c2=new Circle(400, 300, 50, "yellow");
	stuff.push(r1); //특징 : 순서대로 하나씩 차곡차곡 집어넣는다
	stuff.push(r2);
	stuff.push(r3);
	stuff.push(c1);
	stuff.push(c2);
	drawstuff();

	
}
//함수
function Rect(x, y, w, h, c) { //객체(생성자함수)
	//오브젝트이기 때문에 타입을 쓰지 않아도 에러가 나지 않는다
	//속성(x:시작x좌표, y:시작y좌표, w:width, h:height, c:색상)
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.c=c;
	//메서드(drawrect => fillstyle, fillRect를 이용하여 사각형 그리기)
	this.draw=function drawRect() { //이렇게 하면 r1.draw();으로 r1을 만들 수 있다.(js의 오버라이딩)
		ctx.fillStyle=this.c;
		ctx.fillRect(this.x, this.y, this.w, this.h);
	};
	this.overCheck=function overrect(mx, my) {
		if ((mx>=this.x)&&(mx<=(this.x+this.y))&&(my>=this.y)&&(my<=(this.y+this.h))) {
			return true; //마우스가 위에 있는 경우 true를 리턴
		}
		else {
			return false; //마우스가 위에 있지 않는 경우 true를 리턴
		}
	}
}
function Circle(x, y, r, c) {
	//속성
	this.x=x;
	this.y=y;
	this.r=r;
	this.c=c;
	//메서드
	this.draw=function drawCircle() { //오버라이딩
		ctx.fillStyle=this.c;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI, true); //반원 하려면 2*Math.PI->1*Math.PI(0.5*Math.PI 해보기)
										//반시계 반향으로 돌리고 싶으면 true->false
		ctx.closePath();
		ctx.fill();
	};
	this.overCheck=function overCircle(mx, my) {
		var x1=this.x;
		var y1=this.y;
		var x2=mx;
		var y2=my;
		if (((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1))<=(this.r*this.r)) {
			return true;
		}
		else {
			return false;
		}
	};
}
function drawstuff() {
	ctx.clearRect(0, 0, 600, 400);
	for (i=0; i<stuff.length; i++) {
		stuff[i].draw();
	}
}
function copyItem(e) {
	mx=e.offsetX; //offsetX는 e의 필드값이다 //이벤트가 발생한 곳의 x값이라는 뜻이다
	my=e.offsetY;
	var item; //임시지역변수
	for (var i=stuff.length-1; i>=0; i--) {
		if (stuff[i].overCheck(mx, my)==true) {
			item=clone(stuff[i]); //객체를 복제하는 함수 clone
			item.x+=50;
			item.y+=50;
			stuff.push(item);
			break;
		}
	}
	drawstuff();
}
function clone(obj) { //이 함수가 실제 객체를 복사, 생성하는 일을 한다.
	var newItem=new Object();
	for (var key in obj) {
		newItem[key]=obj[key];
	}
	return newItem;
}
function startDrag(e) {
	mx=e.offsetX; //offsetX는 e의 필드값이다 //이벤트가 발생한 곳의 x값이라는 뜻이다
	my=e.offsetY;
	for (var i=stuff.length-1; i>=0; i--) {
		if (stuff[i].overCheck(mx, my)==true) {
			diffx=mx-stuff[i].x;
			diffy=my-stuff[i].y;
			//드래그한 것을 배열의 가장 위로 올리기 위한 준비 작업
			var item=stuff[i]; //임시 저장 변수
			thingInmotion=stuff.length-1;
			//실제로 맨 마지막 요소로 옮기는 작업
			stuff.splice(i, 1);
			stuff.push(item);
			
			canvas.style.cursor="crosshair";
			canvas.addEventListener("mousemove", moveit, false); //실제 이동
			canvas.addEventListener("mouseup", dropit, false); //놓기
			break;
		}
	}
}
function moveit(e){
	mx=e.offsetX;
	my=e.offsetY;
	stuff[thingInmotion].x=mx-diffx;
	stuff[thingInmotion].y=my-diffy;
	drawstuff();
}
function dropit(e){
	canvas.style.cursor="auto";
	canvas.removeEventListener("mousemove",moveit,false);
	canvas.removeEventListener("mouseup",dropit,false);



}
function remove(){
	stuff.pop();
	drawstuff();
}