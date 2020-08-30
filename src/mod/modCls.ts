export class modCls {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, sss' + this.greeting;
  }
}
