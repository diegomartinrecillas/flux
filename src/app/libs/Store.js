import EventEmitter from 'events';
import lodash from 'lodash';
import { STORE_CHANGE_EVENT, ACTION_DISPATCH_EVENT } from './Constants';

export default class Store extends EventEmitter{
    /**
    * @constructor
    * @this {Store}
    * @param {string} name The name of the store
    * @param {boolean} debug Set the state of the debugger
    */
    constructor(name, debug = false) {
        if (name == null || name == undefined) {
            throw `Store.constructor: Stores must be named`;
        }
        super();
        // Set debug flag for the logger
        this._isDebugging = debug;
        // Store private propertires
        this._storeName = name;
        this._storeState = {};
        this._log(`STORE [${this._storeName}]: Initializing`);
    }

    addActionListener(action, callback) {
        if (action.constructor.name !== 'Action') {
            throw `Action.addActionListener: Not an Action type`
        }
        action.on(ACTION_DISPATCH_EVENT, callback);
    }

    removeActionListener(action, callback) {
        action.off(ACTION_DISPATCH_EVENT, callback);
    }

    subscribe(callback) {
        this.on(STORE_CHANGE_EVENT, callback);
    }

    unsubscribe(callback) {
        this.off(STORE_CHANGE_EVENT, callback);
    }

    setState(state) {
        for (let key in state) {
            if (key in this._storeState) {
                this._storeState[key] = _.cloneDeep(state[key]);
            } else {
                throw `Store.setState: state key ${key} not defined in STORE [${this.name}]`
            }
        }
        this.update();
    }

    update() {
        this._log(`STORE [${this.name}]: State has been updated`);
        this.emit(STORE_CHANGE_EVENT);
    }

    /**
    * Store name getter
    */
    get name() {
        return this._storeName;
    }
    /**
    * Store state getter
    */
    get state() {
        //return _.cloneDeep(this._storeState);
        return this._storeState;
    }
    /**
    * Store state setter
    */
    set state(state) {
        this._storeState = _.cloneDeep(state);
    }

    /**
    * Helper function function that logs based on this._isDebugging state
    * @param {string} log message to be logged
    */
    _log(log, ...args) {
        if (this._isDebugging) {
            console.debug(log, ...args);
        }
    }
}
