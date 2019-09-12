var mefsClient = require('mefs-http-client')
var mefs = mefsClient('localhost', '5001', { protocol: 'http' })
mefs.create(function (err, CreateInfo) {
    if (err) {
        throw err
    }
    console.log(CreateInfo)
})
