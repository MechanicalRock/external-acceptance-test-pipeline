//generate a random number
let timeToExecute = getRandomInt(100)

// fail roughly x percent of the time 
let failPercent=50
let success = getRandomInt(100) < failPercent

let payload = {
duration: timeToExecute,
success: success
}

console.log('Retrieve details of the success/failure, based on the commit...')
console.log(`The job completed: duration: ${timeToExecute}s, success: ${success}`)

if(!success){
    throw new Error('Verification job failed')
}
