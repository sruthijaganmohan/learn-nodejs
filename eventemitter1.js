// Event emitter

const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data recieved: ${name} and id${id}`);
})

customEmitter.emit('response', 'john', '20')