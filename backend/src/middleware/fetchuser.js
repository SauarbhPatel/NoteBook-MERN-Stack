const jwt = require('jsonwebtoken');
const JWT_SECRET= "Saurabh_Is_A_Good_Coder";


const fetchuser = (req,res,next)=>{
    // Get the userId from the jwt token and add id to req object  
    const token = req.header('auth-token');
    if (!token) {
        // return res.status(401).send({error:"please authenticate using a valid token"});
        res.status(401).send({error:"please authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        // const data = jwt.verify(token,process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"please authenticate using a valid token"});
    }
    
}

module.exports = fetchuser;