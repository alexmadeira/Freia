'use strict'
const File = use('App/Models/File')
const Env = use('Env')

const fs = require('fs')
const awsConfig = require('../../../config/aws')
const AWS = require('aws-sdk')

AWS.config.update({
  accessKeyId: Env.get('AWS_ACCESS_KEY'),
  secretAccessKey: Env.get('AWS_SECRET_ACCESS_KEY')
})

const s3 = new AWS.S3(awsConfig.s3)

class FileController {
  async store ({ request, response }) {
    if (!request.file('file')) return

    const upload = request.file('file')

    let dateObj = new Date()
    let month = dateObj.getUTCMonth() + 1
    let year = dateObj.getUTCFullYear()

    let folder = year + '-' + month

    const Body = fs.createReadStream(upload.tmpPath)
    const Key = `${folder}/${Date.now()}-${upload.clientName}`

    const s3File = await s3
      .upload({
        ...awsConfig.bucket,
        Body,
        Key,
        ContentDisposition: upload.headers['content-disposition'],
        ContentType: upload.headers['content-type']
      })

      .promise()
    const file = await File.create({
      file: s3File.Location,
      key: Key,
      name: upload.clientName,
      type: upload.type,
      subtype: upload.subtype,
      contentType: upload.headers['content-type']
    })

    return file
  }

  async show ({ params, response }) {
    const file = await File.findByOrFail('name', params.name)

    const s3File = await s3
      .getObject({
        Bucket: awsConfig.bucket.Bucket,
        Key: file.key
      })
      .promise()

    response.header('Content-type', file.contentType)
    response.send(s3File.Body)
  }
}

module.exports = FileController
