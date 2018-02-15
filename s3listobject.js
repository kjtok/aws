var AWS = require("aws-sdk");
AWS.config.region = 'ap-northeast-1';

var bucketname = process.argv[2]

var params = {
    Bucket: bucketname
};

var s3 = new AWS.S3();
s3.listObjects(params, function(err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
});
