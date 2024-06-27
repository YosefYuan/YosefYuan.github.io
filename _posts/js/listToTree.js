function listToTree(data) {
  let map = {};
  let treeData = [];
  for (let i = 0; i < data.length; i++) {
    map[data[i].id] = data[i];
  }
  for (let key of Object.keys(map)) {
    if (map[key].parentId) {
      if (!map[map[key].parentId].children) {
        map[map[key].parentId].children = [];
      }
      map[map[key].parentId].children.push(map[key]);
    } else {
      treeData.push(map[key]);
    }
  }
  return treeData;
}

const list = [
  { id: 1, title: "child1", parentId: 0 },
  { id: 2, title: "child2", parentId: 0 },
  { id: 3, title: "child1_1", parentId: 1 },
  { id: 4, title: "child1_2", parentId: 1 },
  { id: 5, title: "child2_1", parentId: 2 },
  { id: 6, title: "child2_1", parentId: 3 },
];

const tree = listToTree(list);
console.log("tree", JSON.stringify(tree));
