
function Stack(){
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}
function push(ele){
	this.dataStore[this.top++] = ele;
}
function peek(){
	return this.dataStore[this.top-1];
}
function pop(){
	return this.dataStore[--this.top];
}
function clear(){
	this.top = 0;
}
function length(){
	return this.top;
}

/*
var s = new Stack();
s.push('a');
s.push('b');
console.log(s.length());
console.log(s.peek());
console.log(s.pop());
console.log(s.peek());
*/


//进制转换
/*
function mulbase(num,base){
	var s = new Stack();
	var result='';
	while(num > 0){
		s.push(num%base);
		num = Math.floor(num /= base);
	}
	while(s.length()>0){
		result += s.pop();
	}
	return result;

}
console.log(mulbase(125,8));
*/

//回文
/*
function isPalindrome(word){
	var s = new Stack();
	var i = 0;
	for(i=0;i<word.length;i++){
		s.push(word[i]);
	}
	var new_word = '';
	for(i=0;i<word.length;i++){
		new_word += s.pop();
	}
	if(word == new_word){
		return true;
	}else{
		return false;
	}
}
var str = 'reoer';
console.log(isPalindrome(str));
*/

//阶乘
//递归
/*
function factorial(n){
	if(n<0) return 'error';
	if(n === 0){
		return 1;
	}else{
		return n*factorial(n-1);
	}
}
*/
//非递归
/*
function factorial(n){
	var s = new Stack();
	var result = 1;
	while(n>1){
		s.push(n--);
	}
	while(s.length()>0){
		result *= s.pop();
	}
	return result;
}
console.log(factorial(3));
*/		

