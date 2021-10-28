const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

console.log(`env(original):${argv.env}`)
const env=argv.env||"local"
console.log(`env:${env}`)

require('dotenv').config({ path: `./config/${env}.env` })

console.log(process.env.MONGODB_HOST)
const config={
    mongo:{
        host:process.env.MONGODB_HOST,
        name:process.env.MONGODB_NAME,
    },
    yahooFantasy:{
        applicationKey:process.env.APPLICATION_KEY,
        applicationSecret:process.env.APPLICATION_SECRET,
    },
}
const APPLICATION_KEY="dj0yJmk9R3RZR25LVXczNVhVJmQ9WVdrOVQxcGpXbTlXT1drbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTkw"
const APPLICATION_SECRET="e075acf947566dc33b54430342dabd0dcf6a2d68";
module.exports=config

