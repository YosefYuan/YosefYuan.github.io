function deepTreeRecursion(tree, arr = []) {
  if (!tree || !tree.length) return arr;
  tree.forEach((data) => {
    arr.push(data.id);
    data.children && deepTreeRecursion(data.children, arr);
  });
  return arr;
}

function deepTree(tree) {
    if(!tree || !tree.length) return;
    let arr = [];
    let stack = [];
    for(let i = 0; i < tree.length; i ++) {
        stack.push(tree[i]);
    }
    while(stack.length) {
        const node = stack.shift();
        arr.push(node.id);
        if(node.children && node.children.length) {
            stack = [...node.children, ...stack];
        }
    }
    return arr;
}

const tree = [
  {
    id: 1,
    title: "child1",
    parentId: 0,
    children: [
      {
        id: 3,
        title: "child1_1",
        parentId: 1,
        children: [{ id: 6, title: "child2_1", parentId: 3 }],
      },
      { id: 4, title: "child1_2", parentId: 1 },
    ],
  },
  {
    id: 2,
    title: "child2",
    parentId: 0,
    children: [{ id: 5, title: "child2_1", parentId: 2 }],
  },
];

// const ids = deepTreeRecursion(tree);
const ids = deepTree(tree);
console.log('ids', ids);