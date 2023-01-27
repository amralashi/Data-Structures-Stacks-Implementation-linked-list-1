//Simple linked list class
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


//Stack class
class Stack {
  constructor(){
    
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  //Gets the top node of the stack
  peek() {
    console.log(this.top);
  }

  //Push a new value to the top of the stack
  //The pointers of the list are connected from top to bottom
  //this.top --> node --> node --> ... --> this.bottom
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

  //Pop the top node out of the stack
  pop(){

    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;

    if(this.length === 0){ // In case of removing the last node, clear the this.bottom
    this.bottom = null;
    }
    
    console.log(this);
  }

//Checks if the stack is empty
  isEmpty(){
    console.log(this.length === 0);
  }
}


//Call code starts from here
const myStack = new Stack();
myStack.push('Discord');
myStack.push('Udemy');
myStack.push('Google');

myStack.isEmpty();

myStack.pop();
myStack.pop();
myStack.pop();

myStack.isEmpty();

myStack.peek();

