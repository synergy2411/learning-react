// 1. access the div#root
    const container = document.getElementById("root");
// 2. access the react lib
    const e = React.createElement;

// 3. component
    const cmp = () => {
        // return e("div", {className : "demo"}, e("p", {className : "para"}, "This is paragraph."))

        return (
            <div>
                <p>JSX is Working....</p>
                <ul>
                    <li>Tea</li>
                    <li>Milk</li>
                    <li>Coffee</li>
                </ul>
            </div>
        )
    }

// 4. render the DOM
    // ReactDOM.render(cmp(), container);
    ReactDOM.render(e(cmp), container);


// > npm install serve -g
// JSX - 