var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.show_storage(function (err, showStorageInfo) {
    if (err) {
        throw err
    }
    console.log(showStorageInfo)
})