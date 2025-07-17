const { Children } = require("react")


function customRender(element,container)
{
    // const domElement = document.createElement(element.type)
    // domElement.innerHTML = element.children
    // domElement.setAttributes('href',element.props.href)
    // domElement.setAttributes('target',element.props.target)

    // container.appendChild(domElement)


    // Better Approach with loop
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    for (const prop in reactElement.props) {
      domElement.setAttributes(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}


const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click Me to visit google"
}


const mainContainer = document.getElementById('root')

customRender(reactElement,mainContainer)