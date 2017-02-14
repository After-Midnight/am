/**
 * Renders to browser DOM.
 */
import { IVirtualDomAttribute, IVirtualDomEvent, IVirtualDomNode } from '../ui/virtual.dom';
import { IRenderer } from '../ui/renderer';

export function boot(nativeNode: HTMLElement, createRootVirtualDomNode: () => IVirtualDomNode) {
    const vdNode = createRootVirtualDomNode();
    const frag = document.createDocumentFragment();
    const element = renderNode(vdNode);
    frag.appendChild(element);
    nativeNode.appendChild(frag);
}

function renderNode(vdNode: IVirtualDomNode) : Node {
    const text = (vdNode as any)["text"];
    if(text) {
        vdNode.nativeNode = document.createTextNode(text);
        return vdNode.nativeNode;
    }

    vdNode.nativeNode =  document.createElement(vdNode.name);



    renderChildNodes(vdNode);

    return vdNode.nativeNode;
}

function renderAttributes(vdNode: IVirtualDomNode) {
    const keys = Object.keys(vdNode);
    const keyCount = keys.length;
    for (let i = 0; i < keyCount; i++) {
        const key = keys[i];
        vdNode
    }
}

function renderChildNodes(vdNode: IVirtualDomNode) {
    const childCount = vdNode.nodes.length;
    for(let i = 0; i< childCount; i++) {
        const childVdNode: any = <IVirtualDomNode>vdNode.nodes[i];
        const childNativeNode = renderNode(childVdNode);
        vdNode.nativeNode.appendChild(childNativeNode);
    }
}

export class Renderer implements IRenderer {
    toNativeAttribute(attr: IVirtualDomAttribute): any {
        throw new Error("Not implemented exception.");
    }

    toNativeEvent(evt: IVirtualDomEvent): any {
        throw new Error("Not implemented exception.");
    }
    
    toNativeNode(node: IVirtualDomNode): any {
        throw new Error("Not implemented exception.");
    }

    toVirtualDomAttribute(attr: any): IVirtualDomAttribute {
        throw new Error("Not implemented exception.");
    }

    toVirtualDomEvent(evt: any): IVirtualDomEvent {
        throw new Error("Not implemented exception.");
    }

    toVirtualDomNode(node: any): IVirtualDomNode {
        throw new Error("Not implemented exception.");
    }
}