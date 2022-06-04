'use strict';

const LinkedList = require('./LinkedList');

const ll = new LinkedList();
ll.append(7);
ll.append(9);
ll.append(11);
ll.append(15);
ll.append(24);
ll.append(28);
ll.append(33);

// Insert a new Node To The Head of Linked List.....
ll.insert(5);
ll.insert(0);

// Check if a Value send exists as a Node’s value somewhere within the list......
console.log(ll.includes(0)); // -----> return true
console.log(ll.includes(33)); // -----> return true
console.log(ll.includes(37)); // -----> return false

// Return String representing all the values in the Linked Lis
console.log(ll.toString());

ll.printAll();
