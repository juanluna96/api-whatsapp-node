const fs = require("fs");
const logs = new console.Console(fs.createWriteStream("./logs.txt"));

const VerifyToken = (req,res)=>{
    try {
        var accessToken = "WT4zxPRNQgkYv6IQ9bEy";
        var token = req.query["hub.verify_token"]
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token === accessToken){
            res.send(challenge);
        }else{
            res.status(400).send();
        }
    } catch (e) {
        res.status(400).send();
    }
}

const ReceivedMessage = (req,res)=>{
    try {
        const [entry]=req.body["entry"];
        const {changes}=entry;
        const [{value:{messages}}]=changes;

        logs.log(messages)

        res.send("EVENT_SUCCESS")

    }catch (e) {
        res.send(e.message);
    }
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}
