
function Queue(){
	this.dataStore = [];
	this.enqueue = 	enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.empty = empty;
	this.count = count;
}
//队尾添加元素
function enqueue(ele){
	this.dataStore.push(ele);
}
//删除队首元素
function dequeue(){
	return this.dataStore.shift();
}
//读取队首元素
function front(){
	return this.dataStore[0];
}
//读取队尾元素
function back(){
	return this.dataStore[this.dataStore.length-1];
}

//判断是否为空
function empty(){
	if(this.dataStore.length == 0){
		return true;
	}else{
		return false;
	}
}
function count(){
	 return this.dataStore.length;
}
/*
var q =  new Queue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.enqueue("d");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log(q.front());
console.log(q.back());
*/


//方块舞舞伴分配问题
/*
function Dancer(name,sex){
	this.name = name;
	this.sex = sex;
}

function dance(femaleDancers,maleDancers){
	while(!femaleDancers.empty() && !maleDancers.empty()){
		console.log('females:'+femaleDancers.dequeue().name);
		console.log('males:'+maleDancers.dequeue().name);
	}
	if(femaleDancers.empty()){
	console.log('females is empty');
	}
	if(maleDancers.empty()){
		console.log('males is empty');
	}
}
var input = process.argv.splice(2);
var people = input.join(' ').split(',');
var maleDancers =  new Queue();
var femaleDancers =  new Queue();
var tmp = [];
people.forEach(function(item,index,array){
	tmp = item.trim().split(' ');
	if(tmp [1] == 'F'){
		femaleDancers.enqueue(new Dancer(tmp[0],tmp[1]));
	}else{
		maleDancers.enqueue(new Dancer(tmp[0],tmp[1]));
	}	
});

dance(femaleDancers,maleDancers);
*/








