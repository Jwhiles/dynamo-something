const { makeClient } = require('./make-dynamo-client')

async function main() {
  try {
    const dynamoClient = makeClient()

    const res = await dynamoClient.createTable({
      AttributeDefinitions: [
        {
          AttributeName: 'name',
          AttributeType: 'S',
        }
      ],

      KeySchema: [
        {
          AttributeName: 'name',
          KeyType: 'HASH',
        },
      ],

      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5,
      },
      TableName: 'user-info',
    }).promise() 

     console.log(res)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

main()


