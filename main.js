function createElement(type, attributes, ...children) {
    const e = document.createElement(type)
    for (const p in attributes) {
        e.setAttribute(p, attributes[p]);
    }
    for (const child of children) {
        if (typeof child === 'string') {
            e.appendChild(document.createTextNode(child));
        } else {
            e.appendChild(child);
        }
    }
    return e;
}

document.body.appendChild(<div id="ab" a="a" Tag="aa">
abc
<div id="dd">a</div>
<div></div>
</div>);