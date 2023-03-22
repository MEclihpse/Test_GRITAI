const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');
const { checkParams } = require('./utils/request');
const response = require('./utils/response');
const { Employee } = require('./models');
 
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(async (req, res, next)=>{
    try {
        const fieldCheck = checkParams([req.headers.scope, req.headers['user-id']]);
        if (!fieldCheck) return response.unauthorized(res)
        if (req.headers.scope !== "user" || req.headers['user-id'] !== "ifabula") {
            return response.unauthorized(res)
        }
        next()
    } catch (err) {
        return response.failed(res, err)
    }
})

app.get('/', async (req, res)=>{
    try {
        const data = await Employee.findAll()
        return response.success(res, data);
    } catch (err) {
        return response.failed(res, err)
    }
})

app.post('/', async (req, res)=>{
    try {
        const fieldCheck = checkParams([
            req.body.name,
            req.body.age,
            req.body.gender,
            req.body.tanggal_lahir,
            req.body.alamat
        ]);
        if (!fieldCheck) return response.incompleteParams(res);

        const data = await Employee.create({
            ...req.body
        })
        if (!data) {
            return response.failed(res, 'Failed to add Employee');
        }

        return response.success(res, 'Success Add Employee');
    } catch (err) {
        return response.failed(res, err)
    }
})

app.listen(port, () => {
    console.log(`Running on`, port)
})