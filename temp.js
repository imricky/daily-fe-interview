// 合并两个有序链表
// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var mergeTwoLists = function(l1, l2) {

// };

function resolve(npmList) {
  const res = []

  function dfs(npmList) {
    if (npmList.length === 0) return

    npmList.forEach((npm) => {
      const { name, require = [] } = npm
      dfs(require)
      !res.includes(name) && res.push(name)
    })
    return
  }
  dfs(npmList)
  return res
}


console.log(resolve([{
  name: 'page.js',
  require: [{
    name: 'A.js',
    require: [{
      name: 'B.js',
      require: [{
        name: 'C.js'
      }]
    }]
  }, {
    name: 'D.js',
    require: [{
      name: 'C.js'
    }, {
      name: 'E.js'
    }]
  }]
}]))