const { makeDocClient } = require('./make-dynamo-client')

const addUser = async (name, email) => {
  const docClient = makeDocClient();

  return docClient.put({
    Item: {
      name,
      email
    },
    TableName: 'user-info'
  }).promise()
}

const listUsers = async () => {
  const docClient = makeDocClient();

  return docClient.scan({
    TableName: 'user-info'
  }).promise()
}

const main = async () => {
  await addUser('bobby', 'bobby@bob.com')
  await addUser('tomboy', 'tom@boy.com')
  await addUser('blobby', 'mr@blobby.com')
  console.log(await listUsers())
}
main()
