import Sub from '../sub'
export default class Store {
  constructor(options) {
    this.actions = {};
    this.mutations = {};
    this.state = {};
    this.status = 'ready'
    this.events = new Sub();

    if(options.hasOwnProperty('actions')) {
      this.actions = options.actions
    }

    if(options.hasOwnProperty('mutations')) {
      this.mutations = options.mutations
    }


  }
  dispatch(actionName,payLoad) {
    if( typeof this.actions[actionName] !== 'function') {
      return false
    }
    this.status = 'action'
    this.actions[actionName](this,payLoad)
    return true
  }

  commit(mutationName,payLoad) {
    if( typeof this.actions[mutationName] !== 'function') {
      return false
    }
    this.status = 'mutation'
    let newState = this.mutations[mutationName](this.state,payLoad)
    this.state = Object.assign(this.state,newState)
    return true

  }

}