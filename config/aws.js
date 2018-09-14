'use strict'
module.exports = {
  s3: {
    apiVersion: 'latest',
    region: 'sa-east-1'
  },
  bucket: {
    Bucket: 'alex-madeira',
    ACL: 'public-read',
    CacheControl: 'max-age=94608000',
    Expires: new Date(new Date().setFullYear(new Date().getFullYear() + 3)),
    ContentDisposition: '',
    ContentType: '',
    Body: 'exemplo.jpg',
    Key: ''
  }
}
