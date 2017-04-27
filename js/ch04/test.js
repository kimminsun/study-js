
var product={
	제품명 : '건조망고',
		유형:'당절임',
		성분:'설탕,망고'
};
var person={
	name:'나미림',
		eat:function(food){
		alert(this.name+'이'+food+'를 먹습니다');}
};
person.eat('피자');
var output='';
for(var key in product)
{
	output+='&'+key+':'+product[key]+'\n';
}
alert(output);
