export default class EventEmitter {
  listeners: Map<string, Function[]>;

  constructor() {
    this.listeners = new Map();
  }

  on(eventName: string, listener: Function) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, []);
    }
    this.listeners.get(eventName).push(listener);
  }

  emit(eventName: string, ...args) {
    if (this.listeners.has(eventName)) {
      this.listeners.get(eventName).forEach((listener) => listener(...args));
    }
  }

  off(eventName: string, listener: Function) {
    if (this.listeners.has(eventName)) {
      const listeners = this.listeners.get(eventName);
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }
}
