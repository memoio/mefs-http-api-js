var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
var bucketname='test0'
mefs.lfs.delete_bucket(bucketname,function (err, deleteBucketInfo) {
    if (err) {
        throw err
    }
    console.log(deleteBucketInfo)
})