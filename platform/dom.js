System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function boot(nativeNode, createRootVirtualDomNode) {
        var vdNode = createRootVirtualDomNode();
        var frag = document.createDocumentFragment();
        var element = renderNode(vdNode);
        frag.appendChild(element);
        nativeNode.appendChild(frag);
    }
    exports_1("boot", boot);
    function renderNode(vdNode) {
        var text = vdNode["text"];
        if (text) {
            vdNode.nativeNode = document.createTextNode(text);
            return vdNode.nativeNode;
        }
        vdNode.nativeNode = document.createElement(vdNode.name);
        renderChildNodes(vdNode);
        return vdNode.nativeNode;
    }
    function renderAttributes(vdNode) {
        var keys = Object.keys(vdNode);
        var keyCount = keys.length;
        for (var i = 0; i < keyCount; i++) {
            var key = keys[i];
            vdNode;
        }
    }
    function renderChildNodes(vdNode) {
        var childCount = vdNode.nodes.length;
        for (var i = 0; i < childCount; i++) {
            var childVdNode = vdNode.nodes[i];
            var childNativeNode = renderNode(childVdNode);
            vdNode.nativeNode.appendChild(childNativeNode);
        }
    }
    var Renderer;
    return {
        setters: [],
        execute: function () {
            Renderer = (function () {
                function Renderer() {
                }
                Renderer.prototype.toNativeAttribute = function (attr) {
                    throw new Error("Not implemented exception.");
                };
                Renderer.prototype.toNativeEvent = function (evt) {
                    throw new Error("Not implemented exception.");
                };
                Renderer.prototype.toNativeNode = function (node) {
                    throw new Error("Not implemented exception.");
                };
                Renderer.prototype.toVirtualDomAttribute = function (attr) {
                    throw new Error("Not implemented exception.");
                };
                Renderer.prototype.toVirtualDomEvent = function (evt) {
                    throw new Error("Not implemented exception.");
                };
                Renderer.prototype.toVirtualDomNode = function (node) {
                    throw new Error("Not implemented exception.");
                };
                return Renderer;
            }());
            exports_1("Renderer", Renderer);
        }
    };
});
//# sourceMappingURL=dom.js.map