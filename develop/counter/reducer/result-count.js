const { flux } = require('../flux.js')

flux.reducer(function counterReducer (payload, previous_state={}) {
  switch (payload.action.type) {
    case 'INIT':
        return Object.assign({}, previous_state, { result_count: 0})
    case 'SUBMIT_COUNT':
        console.log("payload", payload)
        console.log("previous_state", previous_state)
        return Object.assign({}, previous_state, { result_count: previous_state.result_count + payload.action.current_count })
  }
})