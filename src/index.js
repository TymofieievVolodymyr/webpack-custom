import './src/styles/styles.css'
import start from "./app";

start().then(console.log);


class Util {
  static id = Date.now();
}

console.log('Util.id:', Util.id);
