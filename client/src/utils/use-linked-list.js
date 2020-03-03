// import Node from "./inode";

// export class LinkedList<T> {
//   private head: Node<T> = null;
//   private tail: Node<T> = null;

//   public append = (value: T): LinkedList<T> => {
//     const node = this.forgeNode(value);

//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//       return this;
//     }

//     this.appendToTheEndOfTheList(node);
//     return this;
//   };

//   //   If the list is empty, this.head not set. Then we can easily say that the head and the tail points to the same node.
//   public isEmpty = () => !this.head;

//   public toArray = (): T[] => {
//     const result: T[] = [];
//     let node = this.head;
//     while (node) {
//       result.push(node.value);
//       node = node.next;
//     }
//     return result;
//   };

//   public fromArray = (values: T[]): LinkedList<T> => {
//     values.forEach(v => this.append(v));
//     return this;
//   };

//   private appendToTheEndOfTheList = (node: Node<T>) => {
//     this.tail.next = node;
//     this.tail = node;
//   };

//   private forgeNode = (value: T): Node<T> => {
//     return { value, next: null };
//   };
// }

// const n1 ={
//   data: 100
// }

// const n2 ={
//   data: 200
// }

// n1.next = n2;

// console.log(n1)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // This is a NODE {Node {data, next}}
    this.head = null; // LinkedList { Node { data: 100, next: null } }
    this.size = 0;
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); // {data: 200, next: Node {data: 100, next: null}}
  }

  //insert last node
  //insert index
  //get at index
  // remove at index
  // clear list
  // print list data
  printList() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}



const ll = new LinkedList();


ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);



ll.printList();
// console.log(ll);
