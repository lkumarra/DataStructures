class DoulbyLinkedList{

    constructor(value){
        this.head={
            value:value,
            next:null,
            pre:null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode={
            value:value,
            next:null,
            pre:null
        }
        newNode.pre = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }

    prepend(value){
        const newNode = {
            value:value,
            next:null,
            pre:null
        }
        newNode.next = this.head
        this.head.pre=newNode
        this.head = newNode
        this.length++
    }

    printLinkedList(){
        let array = [];
        let content = this.head;
        while(content !==null){
            array.push(content.value)
            content=content.next
        }
        return array;
    }

    insert(index, value){
        if(index === 0){
            this.prepend(value)
        }
        else if(index>=this.length){
            this.append(value)
        }else{
        let leader = this.traverseInIndex(index-1);
        const newNode={
            value:value,
            next:null,
            pre:null
        }
        let nextValue = leader.next;
        let previousValue = nextValue.pre;
        leader.next = newNode
        newNode.next = nextValue
        newNode.pre = previousValue
        this.length++
    }
    }

    remove(index){
        let leader = this.traverseInIndex(index-1);
        const unwantedNode = leader.next;
        const preUnwanted = unwantedNode.pre;
        leader.next = unwantedNode.next;
        this.length--;
    }

    traverseInIndex(index){
        let pointer = 0
        let content = this.head
        while(pointer !== index){
            content = content.next;
            pointer++
        }
        return content;
    }
    
}

let LinkedList = new DoulbyLinkedList(10);
LinkedList.append(12)
LinkedList.prepend(13)
LinkedList.insert(2, 14)
LinkedList.insert(4, 15)
LinkedList.remove(2)
console.log(LinkedList)
console.log(LinkedList.printLinkedList())