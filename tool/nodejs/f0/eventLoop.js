// https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm

// import events module
var events = require("events");

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// create an event handler as follows
var connectHandler = function connected() {
    console.log('connection successful.')

    // fire the data_received event
    eventEmitter.emit('data_received');
}

// bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// bind the connection event with the handler
eventEmitter.on('data_received', function () {
    console.log('data received successfully.');
});

// fire the connection event
eventEmitter.emit('connection');

console.log("program ended");