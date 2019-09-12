var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.show_balance(function (err, showBalanceInfo) {
    if (err) {
        throw err
    }
    console.log(showBalanceInfo)
})