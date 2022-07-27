//create a class to create a new node
class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

//create a class for a linked list
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

//add a node to the end
    appendNode(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.size++
            return this
        }
        let currNode = this.head
        while(currNode.next){
            currNode = currNode.next

        }
        currNode.next = newNode
        this.size++
        return this
    }
//prepend node
    prepend(data){
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.size++
        return this
    }

//remove a node from the end
    pop(){
        if(!this.head){
            return
        }
        let currNode = this.head
        let previous
        while(currNode.next){
            previous = currNode
            currNode = currNode.next
        }
        //this is where we need to set the previous to the next
        previous.next = null
        this.size--
    }
//add a node to a specific index
    addAtPosition(data, index){
        const newNode = new Node(data)
        let currNode = this.head
        let previous
        let count = 0
        while(count < index){
            previous = currNode
            currNode = currNode.next
            count++
        }

        previous.next = newNode
        //TODO- how to move all the nodes past the current node down the list???

        currNode = currNode.next
        this.size++
        return this
    }

//remove a node from a specific index
    removeAtPostion(index){
        let currNode = this.head
        let previous
        let count = 0
        if(!this.head){
            return
        }
        else if(index > this.size){
            return
        }
        else if(index === 0){
            this.head = currNode.next
            this.size--
        }
        while(count < index){
            previous = currNode
            currNode = currNode.next
            count++
        }
        previous.next = currNode.next
        this.size--
        return
    }

//print the data at a specific node index
    printAtIndex(index){
        let currNode = this.head
        let count = 0
        if(index > this.size){
            return
        }
        else if(index === 0){
            console.log(this.head.data)
            return
        }
        else if(index > this.size){
            return
        }
        while(count < index){
            currNode = currNode.next
            count++
        }
        console.log(currNode.data)
    }

//clear the entire list
    clearList(){
        this.head = null
    }

//print the data for all nodes
    printData(){
        let currNode = this.head
        let output = ""
        if(!this.head){
            return
        }
        while(currNode){
            output += currNode.data + "-->"
            currNode = currNode.next
        }
        console.log(output)
    }
}

const newList = new LinkedList

newList.appendNode(1)
newList.appendNode(2)
newList.appendNode(3)
newList.prepend(4)
newList.addAtPosition(5, 1)
newList.pop()
newList.removeAtPostion(1)
newList.printAtIndex(2)
newList.clearList()
newList.printData()




