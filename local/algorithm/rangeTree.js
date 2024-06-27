function rangeTree(tree) {
    const list = [];
    let queue = [...tree];

    while(queue.length) {
        const node = queue.shift();
        list.push(node.id);
        if(node.children && node.children.length) {
            queue = [...queue, ...node.children];
        }
    }
    return list;
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
  
  const ids = rangeTree(tree);
  console.log('ids', ids);