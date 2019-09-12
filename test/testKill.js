var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.kill("0xAB988BA4af4Eabb72F92060B341daaac5cd33CcB",function (err, killInfo) {
    if (err) {
        throw err
    }
    console.log(killInfo)
})