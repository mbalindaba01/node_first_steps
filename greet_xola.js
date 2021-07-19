const figlet = require('figlet')
const chalk = require('chalk')
const greet = require('./greet')


figlet(greet('Xola'), (err, data) => {
    if(err) {
        console.log('Something went wrong...')
        console.dir(err)
        return
    }
    const styledMessage = chalk.bgGreen.black(data)
    console.log(styledMessage)
})




