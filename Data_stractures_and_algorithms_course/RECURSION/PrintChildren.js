//using recurssion to extract children in an object
//print all the children from the tree, as deeply rooted as they go:
//John has two children: jim and Zoe, Jim has no children and Zoe has two children
function printChildren(t) {
  //??
}
function printChildrenRecursive(t) {
  if (t.children.length === 0) {
    //no children
    return;
  }
  t.children.forEach((child) => {
    console.log(child.name);
    printChildrenRecursive(child);
  });
}
const tree = {
  name: "John",
  children: [
    { name: "Jim", children: [] },
    {
      name: "Zoe",
      children: [
        { name: "Kyle", children: [] },
        { name: "Sophia", children: [] },
      ],
    },
  ],
};

printChildrenRecursive(tree);

const teamStructure = {
  name: "Kunal",
  teams: [
    { name: "Harish", teams: [{ name: "Alisha", teams: [] }] },
    { name: "Anurang", teams: [] },
  ],
};

function getTeamDetails(t) {
  //baseCase
  if (t.teams.length === 0) return;

  t.teams.forEach((team) => {
    console.log(team.name);
    getTeamDetails(team);
  });
}
getTeamDetails(teamStructure); //pass the complete structure/object
