const TicketService=require('../services/email-service')

const create=async(req,res)=>{
    try {
        const response=await TicketService.createNotification(req.body);
        res.status(201).json({
            data: response,
            message: 'successfully registerd an email reminder',
            err: {},
            success: true
        })
    } catch (error) {
        res.status(201).json({
            data: response,
            message: 'unable to register a email reminder ',
            err: {error},
            success: false
        })
        
    }
}
module.exports={
    create
}