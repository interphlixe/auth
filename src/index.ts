import { Hono } from 'hono'


type Bindings = {
  database: D1Database
}

const app = new Hono<{Bindings: Bindings}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
