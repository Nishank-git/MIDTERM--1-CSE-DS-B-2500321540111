
const EventEmitter = require('events');

// Simulate a DOM Element
class Element extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }

addEventListener(event, callback) {
        this.on(event, callback);
    }

    removeEventListener(event, callback) {
        this.off(event, callback);
    }

    dispatchEvent(event) {
        event.target = this;
        this.emit(event.type, event);
    }

    click() {
        this.dispatchEvent({
            type: 'click',
            target: this
        });
    }
}

// Create a button
const button = new Element('button');

// Add click event listener
button.addEventListener('click', (event) => {
    console.log('Button clicked!');
    console.log('Event type:', event.type);
    console.log('Target:', event.target.name);
});

// Simulate button click
button.click();
