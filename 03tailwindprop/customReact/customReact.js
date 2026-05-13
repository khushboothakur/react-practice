// const domElement = document.querySelector(reactElement.type)
// domElement.innerHTML = reactElement.children
// for(const prop in reactElement.props) {
//     if (prop === 'children') continue;
//     domElement.setAttribute(prop, reactElement.props[prop])
// }
// mainContainer.appendChild(domElement)


// const reactElement = {
//     type: 'a', //can be anything like div, h1, p, etc
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit the google'
// }

// const mainContainer = document.querySelector('#root');


// // 1. Define the element first
// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//         children: 'Click me to visit the google'  // ✅ children moved inside props
//     }
// };

// // 2. Get the container
// const mainContainer = document.querySelector('#root');

// // 3. Now create and configure the DOM element
// const domElement = document.createElement(reactElement.type); // ✅ createElement, not querySelector

// domElement.innerHTML = reactElement.props.children; // ✅ reading from props.children

// for (const prop in reactElement.props) {
//     if (prop === 'children') continue;           // skip children
//     domElement.setAttribute(prop, reactElement.props[prop]);
// }

// mainContainer.appendChild(domElement);

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        children: 'Click me to visit Google'
    }
};

const mainContainer = document.querySelector('#root');

const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.props.children;

for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
}

mainContainer.appendChild(domElement);