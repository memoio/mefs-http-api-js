var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.list_providers(function (err, listProvidersInfo) {
    if (err) {
        throw err
    }
    console.log(listProvidersInfo)
})