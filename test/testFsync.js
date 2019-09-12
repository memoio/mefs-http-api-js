var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.fsync(function (err, fsyncInfo) {
    if (err) {
        throw err
    }
    console.log(fsyncInfo)
})