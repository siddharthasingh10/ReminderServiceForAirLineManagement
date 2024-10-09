const sender = require('./../config/emailConfig');
const TicketRepository = require('./../repository/ticket-repository');
const repo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const info = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        }); 
        console.log(`Email sent to ${mailTo}: ${info.response}`);
    } catch (error) {
        console.error(`Failed to send email to ${mailTo}:`, error);
    }
};

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({ status: "PENDING" }); // Get all the pending emails that need to be sent now
        return response;
    } catch (error) {
        console.error('Error fetching pending emails:', error);
    }
};

const createNotification = async (data) => {
    try {
        const response = await repo.create(data);
        return response;
    } catch (error) {
        console.error('Error creating notification:', error);
    }
};
const updateTicket = async (ticketId, data) => {
    try {
        const response = await repo.update(ticketId, data);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sendBasicEmail, fetchPendingEmails, createNotification,updateTicket };
