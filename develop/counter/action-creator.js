const { flux } = require('./flux.js')

function increment () {
    flux.ac('INCREMENT', {current_count: flux.store.state.current_count})
}

function decrement () {
    flux.ac('DECREMENT', {current_count: flux.store.state.current_count})
}

function submitCount () {
    flux.ac('SUBMIT_COUNT', {current_count: flux.store.state.current_count})
}

module.exports =  {
    increment,
    decrement,
    submitCount
}