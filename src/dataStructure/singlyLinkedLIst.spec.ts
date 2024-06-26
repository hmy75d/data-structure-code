import { SinglyLinkedList } from "./singlyLinkedList";

describe("Test Singly Linked List", () => {
  it("리스트 생성", () => {
    const list = new SinglyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it("리스트 생성 후 노드 추가", () => {
    const list = new SinglyLinkedList();

    list.push(1);

    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);
    expect(list.size).toBe(1);
  });

  it("기존 리스트에 노드 추가", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);

    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(2);
    expect(list?.head?.next?.value).toBe(2);
    expect(list.size).toBe(2);
  });

  it("기존 리스트에서 노드 제거", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    list.pop();
    list.pop();

    expect(list?.tail?.value).toBe(2);
    expect(list.size).toBe(2);
  });

  it("Head가 1개일 때 노드 제거", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.pop();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.size).toBe(0);
  });

  it("리스트의 노드가 없을 때 노드 제거", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.pop();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.size).toBe(0);

    expect(list.pop()).toBe(null);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.size).toBe(0);
  });

  it("특정 인덱스의 노드를 조회할 때", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    const targetNode = list.search(2);

    expect(targetNode?.value).toBe(3);
    expect(targetNode?.next?.value).toBe(4);
  });

  it("무효한 인덱스의 노드를 조회할 때", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    expect(list.search(6)).toBe(null);
    expect(list.search(-1)).toBe(null);
  });
});
