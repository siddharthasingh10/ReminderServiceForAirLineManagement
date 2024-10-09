const express=require('express')
const bodyParser=require('body-parser')
const {PORT}=require('./config/serverConfig');
const {sendBasicEmail}=require('./services/email-service');
const TicketController=require('./controller.js/ticket-controller')

const jobs=require('./utils/job')
const setupAndStartServer=async()=>{

    const app=express();
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}));
app.post('/api/v1/tickets',TicketController.create)
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
       
    })

}
setupAndStartServer();