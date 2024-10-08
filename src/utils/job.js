const cron =require('node-cron')
const emailService=require('../services/email-service')


const setupJobs=async ()=>{

    cron.schedule('*/1 * * * *',async()=>{
            const response=await emailService.fetchPendingEmails();
           
        
        response.forEach(email => {
console.log(email.recepientEmail);
                emailService.sendBasicEmail(
                    'ReminderService@airline.com',
                    email.recepientEmail,
                    email.subject,
                    email.content
                )


            
            });
    })
}
module.exports=setupJobs;