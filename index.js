const express = require('express');
const app = express()
const port = process.env.PROT || 5000;
const cors = require('cors');


// middleware
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
  res.send(`Resolute AI Softwar's assignment server running`)
})

// Resolute_AI_Software_Assessment
// pass : EDRHFg9H7Jhcaal6


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Resolute_AI_Software_Assessment:EDRHFg9H7Jhcaal6@cluster0.cn0mdvb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// console.log(uri)

async function run() {
  try {
    const ResoluteAssessmentDatabase  = client.db("bikroyBazar645221").collection("addStudents")
    
    app.get('/addStudent', async(req, res)=>{
        const body = {};
        const result = await ResoluteAssessmentDatabase.find(body).toArray();
        res.send(result)
    })

    app.post('/addStudent', async(req, res)=>{
        // console.log(req.body)
        const students = req.body;
        // console.log(students)
        const result = await ResoluteAssessmentDatabase.insertOne(students);
        res.send(result)
    })
 
  } 
  catch{(e)=> {
    console.log(e)
  }}
}
run().catch(console.dir);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
