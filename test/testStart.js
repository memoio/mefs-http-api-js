var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.start("address",function (err, startInfo) {
    if (err) {
        throw err
    }
    console.log(startInfo)
})