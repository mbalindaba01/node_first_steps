const figlet = require('figlet')
const greet = require('./greet')

figlet(greet('Xola'), (err, data) => {
    if(err) {
        console.log('Something went wrong...')
        console.dir(err)
        return
    }

    console.log(data)
})