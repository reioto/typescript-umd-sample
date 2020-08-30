import { modCls as mod } from './mod/modCls';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

export class testCls {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    let m = new mod('dsad');
    return 'Hello, sss' + this.greeting + m.greet();
  }
}
