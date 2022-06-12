'use strict';

// Require our linked list implementation
const LinkedList = require('../LinkedList');

describe('Linked List', () => {

  test('Create instantiate an empty linked list', ()=>{
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });

  test('Insert into the linked list', ()=>{
    let list = new LinkedList();
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.head.value).toEqual(7);
  });

  test('The head property will properly point to the first node in the linked list', ()=>{
    let list = new LinkedList();
    list.append(50);
    list.append(60);
    list.append(80);
    expect(list.head.value).toEqual(50);
  });

  test('Insert multiple nodes into the linked list', ()=>{
    let list = new LinkedList();
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.head.value).toEqual(7);
    expect(list.head.next.value).toEqual(9);
    expect(list.head.next.next.value).toEqual(11);
  });

  test('Check if a Value send exists as a Node’s value somewhere within the list', ()=>{
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.includes(60)).toEqual(true);
    expect(list.includes(11)).toEqual(true);
    expect(list.includes(9)).toEqual(true);
  });

  test('Check if a Value send NOT exists as a Node’s value somewhere within the list', ()=>{
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.includes(100)).toEqual(false);
    expect(list.includes(55)).toEqual(false);
    expect(list.includes(0)).toEqual(false);
  });

  test('Return a collection of all the values that exist in the linked list', ()=>{
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);
    list.insert(9);
    list.insert(7);
    expect(list.toString()).toEqual(`${7} -> ${9} -> ${11} -> ${60} -> ${80} -> NULL`);
  });

  test('Test Insert Befor the specific value', ()=>{
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);

    // Test InsertBefor Method....
    list.insertBefor(11, 0);
    list.insertBefor(80, 7);

    expect(list.toString()).toEqual(`${0} -> ${11} -> ${60} -> ${7} -> ${80} -> NULL`);
  });

  test('Test Insert After the specific value', ()=>{
    let list = new LinkedList();
    list.append(60);
    list.append(80);
    list.insert(11);

    // Test InsertBefor Method....
    list.insertAfter(11, 0);
    list.insertAfter(80, 7);

    expect(list.toString()).toEqual(`${11} -> ${0} -> ${60} -> ${80} -> ${7} -> NULL`);
  });

});
