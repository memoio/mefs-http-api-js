var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.start("address",function (err, startInfo) {
    if (err) {
        throw err
    }
    console.log(startInfo)
})