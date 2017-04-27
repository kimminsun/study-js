window.onload=init;
function init(){
		window.document.getElementById("link").onclick=openPopup;
}
function openPopup(){
	var child=window.open('popupB.html','POPUP','height=100,width=200,scrollbar=yes,resizable=yes,menubar=yes');
	child.document.write("<h1>From Parent window</h1>");

	if((child!=null)&&(!child.closed)){
		popup.focus();
		return false;
	}
	return false;
}