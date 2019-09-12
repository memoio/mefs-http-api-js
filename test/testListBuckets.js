var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.list_buckets(function (err, listBucketsInfo) {
    if (err) {
        throw err
    }
    console.log(listBucketsInfo)
})