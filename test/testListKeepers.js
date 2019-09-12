var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.list_keepers(function (err, listKeepersInfo) {
    if (err) {
        throw err
    }
    console.log(listKeepersInfo)
})