const AWS = require('aws-sdk');

AWS.config.update({
  region: 'local',
  accessKeyId: 'asdjsadkskdskskdk',
  secretAccessKey: 'sdsadsissdiidicdsi',
})

let dynamoClient

const makeClient = () => {
  if (!dynamoClient) {
    dynamoClient = new AWS.DynamoDB({ endpoint: 'http://localhost:8042' })
  }

  return dynamoClient
}

let docClient
const makeDocClient = () => {
  if (!docClient) {
    docClient = new AWS.DynamoDB.DocumentClient({ endpoint: 'http://localhost:8042' })
  }

  return docClient
}

module.exports = {
  makeClient,
  makeDocClient
}
