// Main function
function customRender(element,container){
    /*
    const domElem = document.createElement(element.type);
    domElem.innerHTML=element.children
    domElem.setAttribute('href',element.props.href)
    domElem.setAttribute('target',element.props.target)

    container.append(domElem);
    */
    // we use loop for the traversing
    const domElem=document.createElement(element.type)
    domElem.innerHTML=element.children
    for (const prop in element.props) {
        if(prop==='children') continue

        domElem.setAttribute(prop,element.props[prop])
    }
    container.append(domElem);
}


// react element object creation
const reactElem = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank',
    },
    children:'Click me to vist googgle'
};

// create main element thorugh dom
const mainCont =document.querySelector('#root');

customRender(reactElem,mainCont);