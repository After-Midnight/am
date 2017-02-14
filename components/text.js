System.register(["../ui/virtual.dom", "../common/resource", "../common/validation/is-string"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    function text(value) {
        var node = new VirtualDomTextNode();
        if (is_string_1.isString(value)) {
            node.text = value;
        }
        else {
            node.text = resource_1.getResourceValue(value);
        }
        return node;
    }
    exports_1("text", text);
    var virtual_dom_1, resource_1, is_string_1, VirtualDomTextNode;
    return {
        setters: [
            function (virtual_dom_1_1) {
                virtual_dom_1 = virtual_dom_1_1;
            },
            function (resource_1_1) {
                resource_1 = resource_1_1;
            },
            function (is_string_1_1) {
                is_string_1 = is_string_1_1;
            }
        ],
        execute: function () {
            VirtualDomTextNode = (function (_super) {
                __extends(VirtualDomTextNode, _super);
                function VirtualDomTextNode() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return VirtualDomTextNode;
            }(virtual_dom_1.VirtualDomNode));
            exports_1("VirtualDomTextNode", VirtualDomTextNode);
        }
    };
});
//# sourceMappingURL=text.js.map