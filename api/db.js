const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud_users',
  password: '1234',
  max: 12,
  min: 2,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 2000
})

async function get_users() {
  const client = await pool.connect()
  const { rows } = await client.query( 'select * from users')
  client.release()
  return rows
}

async function get_user(id) {
  const client = await pool.connect()
  const { rows } = await client.query({
    text: 'select * from users where id=$1',
    values: [id]
  })

  client.release() 
  return rows[0]
}

async function create_user(rut, name, paternalLastaName, maternalLastaName, email, phone) {
  const client = await pool.connect()

  await client.query({
    text: 'insert into users (rut, name, paternalLastaName, maternalLastaName, email, phone) values ($1, $2, $3, $4, $5, $6)',
    values: [rut, name, paternalLastaName, maternalLastaName, email, phone]
  })

  client.release()
}

async function delete_user(id) {
  const client = await pool.connect()
  await client.query({
    text: `delete from users where id = $1`,
    values: [id]
  })
  client.release()
  return
}

async function update_user(name, id) {
  const client = await pool.connect()
  await client.query({
    text: 'update users set name = $1 where id = $2',
    values: [name, id]
  })
  client.release()
  return
}


module.exports = {
  get_users, get_user, create_user, delete_user, update_user
}