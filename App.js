const header= React.createElement("h1", {id: "waw"}, "asslema ya hmema");
console.log(header); //gives us back a react element at the end of the day

//root.render(header);
//create nesteed react element 
//creating react nested elements: 

const parent = React.createElement("div", {id: "parent"},
     [React.createElement("div", {id: "child1"},
     [React.createElement("h1", {}, "i'm the h1 tag of child 1") , React.createElement("h2", {}, "i'm the h2 tag of child 1")
]), React.createElement("div", {id: "child2"},
     [React.createElement("h1", {}, "i'm the h1 tag of child 2") , React.createElement("h2", {}, "i'm the h2 tag of child2")
])]
); 
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);