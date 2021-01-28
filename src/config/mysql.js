const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'skyrouter'
})

connection.connect((error) => {
  if (error) {
    throw error
  }
  console.log('Connect!')
})

module.exports = connection
