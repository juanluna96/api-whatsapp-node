const VerifyToken = (req,res)=>{
    res.send("hola verifyToken");
}

const ReceivedMessage = (req,res)=>{
    res.send("Message recieved")
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}
