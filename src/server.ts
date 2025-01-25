import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/users', async () => {
  const tables = await knex('sqlite_schema').select('*')
  return tables
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`Servidor rodando na porta:`, 3333)
  })
  .catch((err) => {
    console.error('Erro ao iniciar o servidor:', err)
  })
