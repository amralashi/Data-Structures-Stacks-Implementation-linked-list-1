class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    console.log(this.top);
  }
  push(value){

    const node = new Node(value);
    if(this.length === 0){

      this.bottom = node;
      this.top = node;
      
    } else{
      
      const holdingPointer = this.top;
      this.top = node;
      this.top.next = holdingPointer;
    }

    this.length++;
    console.log(this);
  }
  pop(){

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    if(this.length === 0){
    this.bottom = null;
    }
    
    console.log(this);
  
  }


  isEmpty(){
    console.log(this.length === 0);
  }
}

const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');



myStack.pop();
myStack.pop();
myStack.pop();



myStack.peek();

myStack.isEmpty();

myStack.push('Google');
myStack.push('Amazon');
myStack.peek();
//Discord
//Udemy
//google
