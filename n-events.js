// allows to do event-driven programming
import {EventEmitter} from 'node:events';

const eventEmitter = new EventEmitter();
// first param - the listener
// second param - the function to execute while the event occurs
eventEmitter.on("tutorial", (t) => {
    console.log("tutorial event has occured");
    console.log(t(3, 2));
});
// triggers the event
// param - the event
eventEmitter.emit('tutorial', t);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person("Pedro");
pedro.on("name", () => {
    console.log(`My name is ${pedro.name}`);
});
// the event is executed synchronously
pedro.emit('name');
