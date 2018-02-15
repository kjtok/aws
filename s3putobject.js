var AWS = require("aws-sdk");
AWS.config.region = 'ap-northeast-1';

var bucketname = process.argv[2]
var filename = process.argv[3]

var fs = require('fs');
var data = fs.createReadStream(filename);

var params = {
    Bucket: bucketname,
    Key: filename,
    Body: data
};

var s3 = new AWS.S3();
s3.putObject(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
});

