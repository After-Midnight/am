System.register(["../common/observable"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var observable_1, el, VirtualDomNode;
    return {
        setters: [
            function (observable_1_1) {
                observable_1 = observable_1_1;
            }
        ],
        execute: function () {
            el = new HTMLElement();
            VirtualDomNode = (function (_super) {
                __extends(VirtualDomNode, _super);
                function VirtualDomNode() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.classes = [];
                    _this.nodes = [];
                    return _this;
                }
                return VirtualDomNode;
            }(observable_1.Observable));
            exports_1("VirtualDomNode", VirtualDomNode);
        }
    };
});
//# sourceMappingURL=virtual.dom.js.map