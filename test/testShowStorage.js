var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.show_storage(function (err, showStorageInfo) {
    if (err) {
        throw err
    }
    console.log(showStorageInfo)
})