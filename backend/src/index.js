const app = require('./app')

function main(){
  app.listen(4000, () => console.log('app port in 4000'));
}

main();
