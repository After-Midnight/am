
/**
 * Observable used in virtual dom and in the store, to execute logic when a dependency changes.
 */
export type ChangeHandler = (evt: IChangeEvent) => void;

export interface IChangeEvent {
    propertyName: string;
    newValue: any;
    oldValue: any;
}

export interface IObservable {
    deps: Array<IObservable>;
    onChange: (evt: IChangeEvent) => void;
}

export class Observable implements IObservable {
    private _changeHandlers: Array<ChangeHandler> = [];

    deps: Array<IObservable> = [];     

    addChangeHandler(handler: ChangeHandler) {
        const self: Observable = this;
        self._changeHandlers.push(handler);
    }

    onChange(evt: IChangeEvent) {
        const self: Observable = this;
        const handlersCount = self._changeHandlers.length;
        for (let i = 0, length = handlersCount; i < length; i++) {
            const notify = self._changeHandlers[i];
            notify(evt);
        }
    }

    removeChangeHandler(handler: ChangeHandler) {
        const self: Observable = this;
        const handlersCount = self._changeHandlers.length;

        let found = false;
        if(handlersCount) {
            for (let i = 0, length = handlersCount; i < length; i++) {
                const item = self._changeHandlers[i];

                if(found && i < length - 1) {
                    self._changeHandlers[i] = self._changeHandlers[i + 1];
                }

                if(item === handler) {
                    found = true;
                }
            }

            if(found) {
                self._changeHandlers.length--;
            }
        }
    }
}