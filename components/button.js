System.register(["../ui/virtual.dom", "./text"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getDefaultStyle() {
        return _defaultStyle;
    }
    exports_1("getDefaultStyle", getDefaultStyle);
    function setDefaultStyle(style) {
        _defaultStyle = style;
    }
    exports_1("setDefaultStyle", setDefaultStyle);
    function button(value) {
        var node = new virtual_dom_1.VirtualDomNode();
        node.style = getDefaultStyle();
        node.name = "button";
        if (text_1.text) {
            node.nodes = [
                text_1.text(value)
            ];
        }
        return node;
    }
    exports_1("button", button);
    var virtual_dom_1, text_1, _defaultStyle, DefaultStyle;
    return {
        setters: [
            function (virtual_dom_1_1) {
                virtual_dom_1 = virtual_dom_1_1;
            },
            function (text_1_1) {
                text_1 = text_1_1;
            }
        ],
        execute: function () {
            _defaultStyle = {
                boxSizing: "border-box"
            };
            exports_1("DefaultStyle", DefaultStyle = {
                boxSizing: "border-box"
            });
        }
    };
});
//# sourceMappingURL=button.js.map