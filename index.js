// 1 import json server
const jsonserver=require('json-server')

// 6 import cors
const cors=require('cors')

// 2 create json server
const server=jsonserver.create()

// 3 convert json type data into js data before request resolve
const middleware=jsonserver.defaults()

// 8 create a Router
const router=jsonserver.router('db.json')

// 4 apply in server
server.use(middleware)

// 7 apply cors in server
server.use(cors())

// 9 apply router in server
server.use(router)

// 5 run
const PORT=5000
server.listen(PORT,()=>{
    console.log(`___Json Server Started At Porrt : ${PORT}`);
})