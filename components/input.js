System.register(["../ui/virtual.dom"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    function input(type, field) {
        var node = new VirtualDomInputNode();
        node.type = type;
        return node;
    }
    exports_1("input", input);
    var virtual_dom_1, VirtualDomInputNode;
    return {
        setters: [
            function (virtual_dom_1_1) {
                virtual_dom_1 = virtual_dom_1_1;
            }
        ],
        execute: function () {
            VirtualDomInputNode = (function (_super) {
                __extends(VirtualDomInputNode, _super);
                function VirtualDomInputNode() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return VirtualDomInputNode;
            }(virtual_dom_1.VirtualDomNode));
            exports_1("VirtualDomInputNode", VirtualDomInputNode);
        }
    };
});
//# sourceMappingURL=input.js.map