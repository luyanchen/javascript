/*
var input = process.argv.splice(2);
var str = input[0];
var newstr = '';
for(var i=0;i<parseInt(input[1]);i++){
    if(/[A-Z]/.test(str[i])){
        newstr += str[i].toLowerCase();
    }else{
    	newstr += str[i].toUpperCase();
    }

}
console.log(newstr);
*/



//小易打怪兽
/*
//最大公约数
function gcd(a,b)
{
    if(!b){
    	return a;	
    }else{
    	return gcd(b, a%b );
    }
}
var input = process.argv.splice(2);
var n = parseInt(input[0]);
var a = parseInt(input[1]);
var b = input.splice(2);
for(var i=0;i<n;i++){
	b[i] = parseInt(b[i]);
	if(b[i] <= a){
		a += b[i];
	}else{
		a += gcd(a,b[i]);
	}
}

console.log(a);
*/



//炮台攻击
/*
var input = process.argv.splice(2);
var r = parseInt(input[0]);
var x1 = parseInt(input[1]);
var y1 = parseInt(input[2]);
var x2 = parseInt(input[3]);
var y2 = parseInt(input[4]);
var x3 = parseInt(input[5]);
var y3 = parseInt(input[6]);
var x0 = parseInt(input[7]);
var y0 = parseInt(input[8]);
var t = 0;
if(Math.sqrt((x1-x0)*(y1-y0)) <= r){
	t++;
}
if(Math.sqrt((x2-x0)*(y2-y0)) <= r){
	t++;
}
if(Math.sqrt((x3-x0)*(y3-y0)) <= r){
	t++;
}
console.log(t+'x');
*/

//

