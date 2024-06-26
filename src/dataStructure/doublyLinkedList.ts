type ValueType = string | number | Record<string, unknown> | Array<unknown>;

export class DoublyLinkedListNode {
  readonly value: ValueType;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;

  constructor(value: ValueType) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;
  _size: number = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  get size(): number {
    return this._size;
  }

  push(value: ValueType) {
    const newNode = new DoublyLinkedListNode(value);

    this.head = newNode;
  }
}
