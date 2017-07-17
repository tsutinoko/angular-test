const ac = require('./action-creator.js')

class CounterCtrl {
  constructor () {
    document.getElementById('increment-btn').addEventListener('click', () => {
      this.increment ()
    })
    document.getElementById('decrement-btn').addEventListener('click', () => {
      this.decrement ()
    })
    document.getElementById('submit-btn').addEventListener('click', () => {
      this.submitCount ()
    })
  }
  increment () {
    ac.increment ()
  }
  decrement () {
    ac.decrement ()
  }
  submitCount () {
    ac.submitCount ()
  }
}

const Counter = new CounterCtrl ()
