
var product={
	��ǰ�� : '��������',
		����:'������',
		����:'����,����'
};
var person={
	name:'���̸�',
		eat:function(food){
		alert(this.name+'��'+food+'�� �Խ��ϴ�');}
};
person.eat('����');
var output='';
for(var key in product)
{
	output+='&'+key+':'+product[key]+'\n';
}
alert(output);
