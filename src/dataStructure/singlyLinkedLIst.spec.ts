import { SinglyLinkedList } from "./singlyLinkedList";

describe("Test Singly Linked List", () => {
  it("리스트 생성", () => {
    const list = new SinglyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it("리스트 생성 후 값 추가", () => {
    const list = new SinglyLinkedList();

    list.push(1);

    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(1);
    expect(list.size).toBe(1);
  });

  it("기존 리스트에 값 추가", () => {
    const list = new SinglyLinkedList();

    list.push(1);
    list.push(2);

    expect(list.head?.value).toBe(1);
    expect(list.tail?.value).toBe(2);
    expect(list.size).toBe(2);
  });

  // 리스트가 있는 상태에서 제거

  // head가 한 개 일때 제거

  // 리스트에 암 것도 없을 때 제거
});
