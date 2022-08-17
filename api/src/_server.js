const express = require('express')

const { 
  get_users, get_user, create_user, delete_user, update_user 
} = require('./db.js')

const app = express()

app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/users', async (req, res) => {
  const users = await get_users()
  res.send(users);
})

app.get('/user', async (req, res) => {
  const id = req.body.id
  const user = await get_user(id)
  res.send(user);
})

app.post('/register', async (req, res) => {
  const rut = req.body.rut
  const name = req.body.name
  const paternalLastaName = req.body.paternalLastaName
  const maternalLastaName = req.body.maternalLastaName
  const email = req.body.email
  const phone = req.body.phone

  await create_user(rut, name, paternalLastaName, maternalLastaName, email, phone)

  res.send('Usuario creado con exito')
})

app.put('/update', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  await update_user(name, id)
  res.send('Usuario actualizado con exito')
})

app.delete('/delete', async (req, res) => {
  const id = req.body.id
  await delete_user(id)
  res.send('Usuario eliminado')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`))