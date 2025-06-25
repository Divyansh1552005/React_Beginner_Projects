function custom_renderer(react_element, container){
    // const domElement = document.createElement(react_element.type)
    // domElement.innerHTML = react_element.children
    // domElement.setAttribute('href', react_element.props.href)
    // domElement.setAttribute('target', react_element.props.target)

    // container.appendChild(domElement)


    const domElement = document.createElement(react_element.type)
    domElement.innerHTML = react_element.children
    for (const prop in react_element.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, react_element.props[prop])
    }
    container.appendChild(domElement)
}


const main_container = document.querySelector('#root');

const react_element = {
    type : 'a',
    props : {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'

}



custom_renderer(react_element, main_container);

