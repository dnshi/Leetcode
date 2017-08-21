// Source : https://leetcode.com/problems/lru-cache
// Author : Dean Shi
// Date   : 2017-08-20

/***************************************************************************************
 *
 * Design and implement a data structure for Least Recently Used (LRU) cache. It should
 * support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key exists in
 * the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present. When
 * the cache reached its capacity, it should invalidate the least recently used item
 * before inserting a new item.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 *
 * Example:
 *
 * LRUCache cache = new LRUCache( 2 );
 *
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.put(4, 4);    // evicts key 1
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 *
 *
 ***************************************************************************************/

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.currentSize = 0
    this.head = new DoubleLinkedList()
    this.tail = new DoubleLinkedList()
    this.head.next = this.tail
    this.tail.prev = this.head
    this.hash = {}
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    listNode = this.hash[key]

    if (!listNode || listNode.val === -1) return -1

    listNode.prev.next = listNode.next
    listNode.next.prev = listNode.prev

    swap(this.head, listNode)

    return listNode.val
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let listNode
    if (this.hash[key] instanceof DoubleLinkedList && this.hash[key].val !== -1) {
        listNode = this.hash[key]
        listNode.val = value
        listNode.prev.next = listNode.next
        listNode.next.prev = listNode.prev
    } else {
        listNode = new DoubleLinkedList(value)

        if (this.currentSize === this.capacity) {
            const last = this.tail.prev
            this.tail.prev = last.prev
            last.prev.next = this.tail
            last.val = -1
        }
        else ++this.currentSize
    }

    swap(this.head, listNode)

    this.hash[key] = listNode
};

function DoubleLinkedList(value) {
    this.val = value
    this.prev = this.next = null
}

function swap(head, listNode) {
    const nextNode = head.next
    head.next = listNode
    listNode.prev = head
    listNode.next = nextNode
    nextNode.prev = listNode
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
