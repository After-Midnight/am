import { IVirtualDomNode, VirtualDomNode } from "../ui/virtual.dom";
import { getResourceValue, IResource } from "../common/resource";
import { isString } from "../common/validation/is-string";

export interface IVirtualDomTextNode extends IVirtualDomNode {
    text: string;
}

export class VirtualDomTextNode extends VirtualDomNode implements IVirtualDomTextNode {
    text: string;
}

export type Text = string | IResource;

export function text(value: Text): IVirtualDomTextNode {
    const node = new VirtualDomTextNode();

    if(isString(value)) {
        node.text = (value as string);
    } else {
        node.text = getResourceValue((value as IResource));
    }
    
    return node;
}