import { VirtualDomNode } from "../ui/virtual.dom";
import { ICssStyle } from "../ui/styles";
import { text, Text } from "./text";

let _defaultStyle: ICssStyle = {
    boxSizing: "border-box"
};

export function getDefaultStyle(): ICssStyle {
    return _defaultStyle;
}

export function setDefaultStyle(style: ICssStyle) {
    _defaultStyle = style;
}

export const DefaultStyle: ICssStyle = {
    boxSizing: "border-box"
};

export function button(value?: Text): VirtualDomNode {
    const node = new VirtualDomNode();
    node.style = getDefaultStyle();
    node.name = "button";
    if(text) {
        node.nodes = [
            text(value)
        ];
    }
    
    return node;
}