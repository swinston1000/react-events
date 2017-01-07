class State {
    constructor() {
        this.name = '';
        this._onUpdateCallBack = {};
    }

    updateName(data) {
        if (this.name !== data) {
            this.name = data;
            this._sendEvent('changeName');
        }
    }

    updateCategory(data) {
        if (this.category !== data) {
            this.category = data;
            this._sendEvent('changeCategory');
        }
    }

    on(eventName, callbackFunction) {
        if (!this._onUpdateCallBack[eventName]) {
            this._onUpdateCallBack[eventName] = [];
        }
        this._onUpdateCallBack[eventName].push(callbackFunction);

    }

    _sendEvent(eventName) {
        let that = this;
        this._onUpdateCallBack[eventName].forEach(function(callbackFunc) {
            if (typeof callbackFunc === 'function') {
                callbackFunc(that.name);
            }
        });
    }
}

const _state = new State();

export default _state;
