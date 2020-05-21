class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.botton = null;
        this.length = 0
        
    }
    
    push(value){
        let node = new Node(value);
        if(this.length === 0){
            this.top = node
            this.botton = node
        }else{
            let holdingPointer = this.top
            this.top = node
            this.top.next = holdingPointer;
        }
        this.length++
    }

    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.botton){
            this.botton = null;
        }
        const holdingPointer = this.top
        this.top = this.top.next
        this.length--;
        return this
    }

    peek(){
        return this.top
    }
}

let myStack = new Stack();
myStack.push("google")
myStack.push("udemy")
myStack.pop()
console.log(myStack);
console.log(myStack.peek())