import express from "express"
import cors from 'cors'
import morgan from 'morgan'
//Routing
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'

const app = express()

//Basic middlewares
app.use(cors()) //Allow cross domains
app.use(morgan('dev')) // Show logs
app.use(express.json()) //for reading body

//Routing GET, POST, PUT ,PATCH, DELETE
//http://localhost:8000
// app.get('/', (req, res) => {
//   //code body
//   res.json({ message: "Hello World!" })
// })
app.use('/api', userRouter)
app.use('/auth', authRouter)

//Start server
const PORT = 8000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))