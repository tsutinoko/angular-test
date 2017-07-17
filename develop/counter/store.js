const { flux } = require('./flux.js')

flux.listen()

flux.subscribe(function listener (state) {
    document.getElementById("current-count").innerHTML = state.current_count
    document.getElementById("result-count").innerHTML = state.result_count
})