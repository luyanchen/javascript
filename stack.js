
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
/*括号匹配检查*/
/*
function bracketsMatch(str) {
  var stack = new Stack();
  var text = '';

  for (var i = 0, len = str.length; i < len; i++) {
    var c = str[i];
    if (c === '[') {
      stack.push(c);
    } else if (c === ']') {
      if (!stack.top || stack.pop() !== '[') throw new Error('unexpected brackets:' + c);
    } else {
      text += c;
    }
  }
  console.log(text);
}

console.log(bracketsMatch('[asd]'));
*/
/*行编辑*/
/*当用户发现刚刚键入的一个字符是错的时，可补进一个退格符“#”,以表示前一个字符无效；如果发现当前键入的行内差错较多或难以补进，则可以键入一个退行符“@”，以表示当前行中的字符均无效*/
/*
function LineEditor(str) {
  this.stack = new Stack();
  this.str = str || ''
}
LineEditor.prototype = {
  getResult: function () {
    var stack = this.stack;
    var str = this.str;
    for (var i = 0, len = str.length; i < len; i++) {
      var c = str[i];
      switch (c) {
        case '#':
          stack.pop();
          break;
        case '@':
          stack.clear();
          break;
        default:
          stack.push(c);
          break;
      }
    }

    var result = '';
    var current = stack.top;
    while (current) {
      result = current.data + result;
      current = current.next;
    }
    return result;
  }
};

var le = new LineEditor('whli##ilr#e(s#*s)\
    \noutcha@putchar(*s=#++)');
console.log(le.getResult());
*/
/*表达式求值*/
var prioty = {
  "+": 1,
  "-": 1,
  "%": 2,
  "*": 2,
  "/": 2,
  "^": 3,
  "(": 0,
  ")": 0,
  "`": -1
};

function doop(op, opn1, opn2) {
  switch (op) {
    case "+":
      return opn1 + opn2;
    case "-":
      return opn1 - opn2;
    case "*":
      return opn1 * opn2;
    case "/":
      return opn1 / opn2;
    case "%":
      return opn1 % opn2;
    case "^":
      return Math.pow(opn1, opn2);
    default:
      return 0;
  }
}

function opcomp(a, b) {
  return prioty[a] - prioty[b];
}

function calInfixExpression(exp) {
  var cs = [];
  var ns = [];
  exp = exp.replace(/\s/g, "");
  exp += '`';
  if (exp[0] === '-') {
    exp = "0" + exp;
  }
  var c;
  var op;
  var opn1;
  var opn2;
  for (var i = 0; i < exp.length; ++i) {
    c = exp[i];
    // 如果是操作符
    if (c in prioty) {
      // 如果右边不是左括号且操作符栈的栈顶元素优先权比右边大
      // 循环遍历进行连续运算
      while (c != '(' && cs.length && opcomp(cs[cs.length - 1], c) >= 0) {
        // 出栈的操作符
        op = cs.pop();
        // 如果不是左括号或者右括号，说明是运算符
        if (op != '(' && op != ')') {
          // 出栈保存数字的栈的两个元素
          opn2 = ns.pop();
          opn1 = ns.pop();
          // 将与操作符运算后的结果保存到栈顶
          ns.push(doop(op, opn1, opn2));
        }
      }
      // 如果右边不是右括号，保存到操作符栈中
      if (c != ')') cs.push(c);
    } else {
      // 多位数的数字的情况
      while (!(exp[i] in prioty)) {
        i++;
        c += exp[i];
      }
      ns.push(parseFloat(c));
      i--;
    }
  }
  return ns.length ? ns[0] : NaN;
}

var exp1 = calInfixExpression('5+3*4/2-2^3+5%2');
console.log(exp1);