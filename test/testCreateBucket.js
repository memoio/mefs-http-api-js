var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
var bucketname='test0'
mefs.lfs.create_bucket(bucketname,function (err, createBucketInfo) {
    if (err) {
        throw err
    }
    console.log(createBucketInfo)
})