import { VirtualDomNode } from "../ui/virtual.dom";
import { IStoreField, IStoreObject } from "../storage/store";

export type InputType = "button" | "checkbox" | "color"  | "date"   | "datetime"  | "datetime-local"  | "email"  | "file"  | "hidden"  | "image" | "month"  | "number"  | "password"  | "radio"  | "range"  | "reset"  | "search" | "submit"  | "tel" | "text"  | "time" | "url"  | "week";



export class VirtualDomInputNode extends VirtualDomNode {
    type: InputType;
}

export function input<T extends boolean | number | Date | string | Array<IStoreObject>>(type: InputType, field: IStoreField<T>) {
    const node = new VirtualDomInputNode();
    node.type = type;
    return node;
}