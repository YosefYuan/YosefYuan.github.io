function findPath(node, num, stack = [], sum = 0, result = []) {
  stack.push(node.value);
  sum += node.value;

  if (sum === num) {
    result.push(stack.slice());
  }

  if (node.left) {
    findPath(node.left, num, stack, sum, result);
  }

  if (node.right) {
    findPath(node.right, num, stack, sum, result);
  }
  stack.pop();
  return result;
}

const tree = {
  value: 5,
  left: {
    value: 3,
    left: {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
  right: {
    value: 6,
    left: null,
    right: {
      value: 7,
      left: null,
      right: {
        value: 8,
        left: null,
        right: {
          value: 9,
          left: null,
          right: null,
        },
      },
    },
  },
};

const path = findPath(tree, 11);
console.log("path", path);
