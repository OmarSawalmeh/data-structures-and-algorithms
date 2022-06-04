'use strict';

let Node = require('./Node');

class LinkedList{

    constructor(){
        this.head = null;
    }

    append(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            return this;
        }
        else{
            let currNode = this.head;
            while(currNode.next != null){
                currNode = currNode.next;
            }
            currNode.next = newNode;
            return this;
        }
    }

    printAll(){
        let currNode = this.head;
        while(currNode != null){
            console.log(currNode.value);
            currNode = currNode.next;
        }
    }

    // Insert a new Node To The Head of Linked List.....
    insert(value){
        const newNode = new Node(value);
        let tempHead = this.head;
        this.head = newNode;
        this.head.next = tempHead;

    }

    // Check if a Value send exists as a Node’s value somewhere within the list......
    includes(value){
        let currNode = this.head;
        let check = false;
        while(currNode != null){
            let currValue = currNode.value;
            if(currValue === value){
                check = true;
            }
            currNode = currNode.next;
        }

        return check;
    }

    // Return String representing all the values in the Linked Lis.....
    toString(){
        let currNode = this.head;
        let allNode = ``;
        while(currNode != null){
            let currValue = currNode.value;
            allNode += `${[currValue]} -> `;
            currNode = currNode.next;
        }
        allNode += `NULL`;

        return allNode;       
    }


}

module.exports = LinkedList;