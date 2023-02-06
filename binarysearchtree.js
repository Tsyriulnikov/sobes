//бинарное дерево поиска
class Node {
    constructor(data) {
      this.data = data
      this.left = null
      this.right = null
    }
  
    insert(data) {
      if (data < this.data && this.left)
        this.left.insert(data)
      else if (data < this.data)
        this.left = new Node(data)
      else if (data > this.data && this.right)
        this.right.insert(data)
      else if (data > this.data)
        this.right = new Node(data)
    }
  
    search(data) {
      if (this.data === data) return this
  
      if (this.data < data && this.right)
        return this.right.search(data)
      else if (this.data > data && this.left)
        return this.left.search(data)
  
      return null
    }
  }
  
  // пример использования
  const root = new Node(2)
  root.insert(1)
  root.insert(3)
  root.insert(0)
  console.log(root.left.left.data === 0) // true
  
  console.log(root.search(3).data) // 4
  console.log(root.search(4)) // null