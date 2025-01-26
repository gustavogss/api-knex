import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/transactions', async () => {
  const transactions = await knex('transactions')
    .where('amount', 1000)
    .select('*')
  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('Servidor rodando na porta:', env.PORT)
  })
  .catch((error) => {
    console.error('Erro ao iniciar o servidor:', error)
  })
