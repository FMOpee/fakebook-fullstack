const Minio = require('minio');

const minioClient = new Minio.Client({
    endPoint: 'minio',
    port: 9000,
    useSSL: false,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin'
});

minioClient.makeBucket('stories', 'us-east-1', function(err) {
    if (err) 
        return console.log('Error creating bucket.', err)
    
    console.log('Bucket created successfully in "us-east-1".')
});

module.exports = minioClient;