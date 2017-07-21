import {observable} from 'mobx';

export default class {
  @observable count = 0;

  increment() {
    this.count++;
    console.log("increment", this.count);
  }

  decrement() {
    this.count--;
    console.log("decrement", this.count);
  }
}