export default class Sub {
  constructor() {
    this.watchers = {};
  }
  _publish(event,data) {
    if(this.watchers[event] && this.watchers[event].length ) {
      this.watchers[event].forEach( cb=>cb.bind(this)(data) )
    }
  }

  subscribe(event,cb) {
    this.watchers[event] = this.watchers[event] || []
    this.watchers[event].push(cb)
  }
  unsub(event,cb) {
    if(cb && event) {
      if(this.watchers[event] && this.watchers[event].length) {
        this.watchers[event].splice( this.watchers[event].findIndex( cbs=> Object.is(cbs,cb) ),1 )
      }
    }else if(event) {
      this.watchers[event] = [];
    }else{
      this.watchers = {}
    }
  }

}