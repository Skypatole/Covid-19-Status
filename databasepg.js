require ('dotenv').config();

const { post, Connection } = require("pg");

const isProduction = process.env.Node_ENV === "produciotn";

const ConnectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString
});
 module.exports  = { pool };
// const {Client} = require('pg')

// const client = new Client ({
//     host: "localhost",
//     users: "postgres",
//     port: 5432,
//     password: "rootUser",
//     Database: "postgres"
// })

// client.connect();

// client.query(`select * from users`, (err, res)=> {
//     if(err) {
//         console.log(res.rows);
//     } else {
//       console.log(err.message);
//     }
//     client.end;
// })
