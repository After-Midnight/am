System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable;
    return {
        setters: [],
        execute: function () {
            Observable = (function () {
                function Observable() {
                    this._changeHandlers = [];
                    this.deps = [];
                }
                Observable.prototype.addChangeHandler = function (handler) {
                    var self = this;
                    self._changeHandlers.push(handler);
                };
                Observable.prototype.onChange = function (evt) {
                    var self = this;
                    var handlersCount = self._changeHandlers.length;
                    for (var i = 0, length_1 = handlersCount; i < length_1; i++) {
                        var notify = self._changeHandlers[i];
                        notify(evt);
                    }
                };
                Observable.prototype.removeChangeHandler = function (handler) {
                    var self = this;
                    var handlersCount = self._changeHandlers.length;
                    var found = false;
                    if (handlersCount) {
                        for (var i = 0, length_2 = handlersCount; i < length_2; i++) {
                            var item = self._changeHandlers[i];
                            if (found && i < length_2 - 1) {
                                self._changeHandlers[i] = self._changeHandlers[i + 1];
                            }
                            if (item === handler) {
                                found = true;
                            }
                        }
                        if (found) {
                            self._changeHandlers.length--;
                        }
                    }
                };
                return Observable;
            }());
            exports_1("Observable", Observable);
        }
    };
});
//# sourceMappingURL=observable.js.map