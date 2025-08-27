import 'dotenv/config'
import express from 'express'

const app = express()

const port = process.env.PORT || 3000
app.use(express.json())

let teaData = []
let nextId = 1

// Adding a new tea
app.post('/teas',(req,res)=>{
    
    const {name,price}=req.body
    const newTea = {id:nextId++,name,price}
    teaData.push(newTea)
    res.status(201).send(newTea)

})

//  get all the tea 
app.get('/teas',(req,res) =>{
    res.status(200).send(teaData)
})

// How to get a Single Tea using id
// When you have URl you use req.params 
//When you have inside the body then request it by req.body
app.get ('/teas/:id',(req,res)=>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send("Tea Not found")

    }
    res.status(200).send(tea)
})

//update tea
// called business Logic
app.put('/teas/:id',(req,res)=>{
    const teaId = teaData.find(t => t.id === parseInt(req.params.id))

    if(!teaId){
        return res.status(404).send("Tea Not Found")
    }
    const {name,price} = req.price
    tea.name = name,
    tea.price = price,
    res.status(200).send(teaId)

})

//delete Tea

app.delete('/teas/:id',(req,res)=>{
    const index = teaData.findIndex(t => t.id === parseInt(req.params.id))

    if (index == -1) {
        return res.status(404).send('tea Not Found')
    }

    teaData.splice(index,1)
    return res.status(200).send('Selected Tea is Deleted')
})


app.listen(port,() =>{
    console.log(`Server is running at port: ${port}...`);
    
})