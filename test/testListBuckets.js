var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.list_buckets(function (err, listBucketsInfo) {
    if (err) {
        throw err
    }
    console.log(listBucketsInfo)
})