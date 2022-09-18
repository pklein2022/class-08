export default class Observable {
  subscribers = [];

  constructor() {}

  subscribe(fn) {
    this.subscribers.push(fn);
  }

  unsubscribe(fn) {
    this.subscribers = this.subscribers.filter((subscriber) => {
      return subscriber != fn;
    });
  }

  broadcast(value) {
    this.subscribers.forEach((fn) => {
      fn(value);
    });
  }
}


