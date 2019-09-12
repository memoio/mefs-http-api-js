var mefsClient = require('mefs-http-api-js')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.list_objects("bucket_test_object",function (err, listObjectsInfo) {
    if (err) {
        throw err
    }
    console.log(listObjectsInfo)
})