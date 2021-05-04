require('dotenv').config()
const notifier = require('./notifier');

const SENDER_EMAIL = process.env.SENDER_EMAIL
const RECEIVER_EMAILS = process.env.RECEIVER_EMAILS

async function main(){
    try {
        console.log("Sending test email")
        notifyMe({"Dummy":"Email"})
    } catch (e) {
        console.log('an error occured: ' + JSON.stringify(e, null, 2));
        throw e;
    }
}


async function

notifyMe(validSlots){
    let slotDetails = JSON.stringify(validSlots, null, '\t');
    notifier.sendEmail(SENDER_EMAIL, RECEIVER_EMAILS, 'VACCINE BOOKING AVAILABLE', slotDetails, (err, result) => {
        if(err) {
            console.error({err});
        }
    })
};



main()
    .then(() => {console.log('Testing Vaccine slot availability checker started.');});
