var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.delete_object("bucket_test_object","testFile.50K",function (err, deleteObjectInfo) {
    if (err) {
        throw err
    }
    console.log(deleteObjectInfo)
})