function findTreeNode(tree, func) {
    if(!tree || !tree.length) return null;
    for(let i = 0; i < tree.length; i++) {
        if(func(tree[i]))return tree[i];
        if(tree[i].children && tree[i].children.length) {
            const res = findTreeNode(tree[i].children, func);
            if(res) {
                return res;
            }
        }
    }
    return null
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
  
  const node = findTreeNode(tree);
  console.log('node', node);