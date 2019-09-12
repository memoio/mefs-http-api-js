var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.create_bucket("bucket_test_object",function (err, createBucketInfo) {
    if (err) {
        throw err
    }
})
mefs.lfs.put_object_from_file_system("bucket_test_object","~/testFile.50K",function (err, file) {
    if (err) {
        throw err
    }
    console.log(file)
})