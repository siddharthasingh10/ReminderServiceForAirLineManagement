const{NotificationTicket}=require('../models/index');
const {Op}=require('sequelize')
class TicketRepository{
    async getAll(){
        try {
            const tickets=await NotificationTicket.findAll();
        } catch (error) {
            console.log(error)
            
        }
    }
    async create(data){
        try {
            const tickets=await NotificationTicket.create(data);
            return tickets
        } catch (error) {
            console.log(error);
            throw {error}
            
        }
    }
    async get(filter) {
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status: filter.status,
                    notificationTime: {
                        [Op.lte]: new Date() // means notification time was less than of current so sent that mail now 
                    }
                }
            });
            return tickets;
        } catch (error) {
            throw error;
        }
    } 
    async update(ticketId, data) {
        try {
            const ticket = await NotificationTicket.findByPk(ticketId);
            if(data.status)
                ticket.status = data.status;
            await ticket.save();
            return ticket;
        } catch (error) {
            throw error;
        }
    }
}
 

module.exports=TicketRepository;