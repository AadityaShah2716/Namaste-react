// const heading = React.createElement("h1", { id: "heading" }, "Hello World");
// console.log(heading);
//React.createElement gives me object in react not h1 element;
// If I want to add sibling in third argument I must create array.
const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", { id: "heading" }, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
        ),
        React.createElement(
            "div",
            { id: "child2" },
            [React.createElement("h1", { id: "heading" }, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
        ),
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
//render method is used to converting object into tag and put it up on dom.