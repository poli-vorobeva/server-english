import express from 'express';
import categories from './category/router'
import cors from 'cors'
import {json} from 'body-parser'

const PORT:number =3001
const app = express()
app.use(json())
app.use(cors())
app.use('/api/categories',categories)


app.listen(PORT,()=> console.log("Server start..."))
