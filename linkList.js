
//单向链表
function Node(element){
	this.element = element;
	this.next = null;
}
function LinkedList(){
	//初始化链表头
	this.head = new Node("head");
	this.find = find;
	this.findPrevious = findPrevious;
	this.remove = remove;
	this.insert = insert;
	this.display = display;
}
function insert(newElement,item){
	var newNode = new Node(newElement);
	//找到插入节点
	var currNode = this.find(item);
	newNode.next = currNode.next;
	currNode.next = newNode;
}
function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}
function findPrevious(item){
	var currNode = this.head;
	while(!(currNode.next == null) && currNode.next.element != item){
		currNode = currNode.next;
	}
	return currNode;	
}
function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}
function remove(item){
	var preNode = this.findPrevious(item);
	if(!(preNode.next == null)){
		preNode.next = preNode.next.next;
	}
}
var links = new LinkedList();
links.insert('a','head');
links.insert('b','a');
links.display();
links.remove('a');
links.display();



//双向链表
/*
function Node(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}
function LinkedList(){
	//初始化链表头
	this.head = new Node("head");
	this.find = find;
	this.findLast = findLast;
	this.remove = remove;
	this.insert = insert;
	this.display = display;
	this.displayReverse = displayReverse;
}
function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}
function insert(newElement,item){
	var newNode = new Node(newElement);
	//找到插入节点
	var currNode = this.find(item);
	newNode.next = currNode.next;
	newNode.previous = currNode;
	currNode.next = newNode;
}
function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}
function displayReverse(){
	var currNode = this.findLast();
	while(!(currNode.previous == null)){
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}
function remove(item){
	var currNode = this.find(item);
	if(!(currNode.next == null)){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.next = null;
		currNode.previous = null;
	}
}
function findLast(){
	var currNode = this.head;
	while(currNode.next != null){
		currNode = currNode.next;
	}
	return currNode;
}
var links = new LinkedList();
links.insert('a','head');
links.insert('b','a');
links.displayReverse();
links.remove('a');
links.display();
*/

//循化列表
/*
function Node(element){
	this.element = element;
	this.next = null;
}
function LinkedList(){
	//初始化链表头
	this.head = new Node("head");
	this.head.next = this.head;
	this.find = find;
	this.findPrevious = findPrevious;
	this.remove = remove;
	this.insert = insert;
	this.display = display;
}
function insert(newElement,item){
	var newNode = new Node(newElement);
	//找到插入节点
	var currNode = this.find(item);
	newNode.next = currNode.next;
	currNode.next = newNode;
}
function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}
function findPrevious(item){
	var currNode = this.head;
	while(!(currNode.next == null) && currNode.next.element != item){
		currNode = currNode.next;
	}
	return currNode;	
}
function display(){
	var currNode = this.head;
	while(!(currNode.next == null) && !(currNode.next.element == "head")){
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}
function remove(item){
	var preNode = this.findPrevious(item);
	if(!(preNode.next == null)){
		preNode.next = preNode.next.next;
	}
}
var links = new LinkedList();
links.insert('a','head');
links.insert('b','a');
links.display();
links.remove('a');
links.display();
*/


