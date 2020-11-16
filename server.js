express = require("express")
app = express()

const {Pool ,Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'some_database',
    password: 'node123',
    port: 5432,
})

client.connect();

client.query('SELECT * FROM products').then(res => {
      console.log( "Result =>  \n",res.rows);
  }).finally(() => client.end());

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "some_database",
//   password: "node123",
//   port: "5432"
// });

// pool.query("SELECT * from some_table", (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`server running on port ${port}`))