var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.lfs.get_object("","testFile.50K",function (err, file) {
    console.log("get_object")
    if (err) {
        throw err
    }
    console.log(file)
})