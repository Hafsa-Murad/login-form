const jwt = require("jsonwebtoken");
const ensureAuthenticatd = (req,res, next) => {
const errorMsg = "Auth failed, email & password are wrong...";
const auth = req.headers["authorization"];
if(!auth){
    return res.status(403).json({message: errorMsg});
}
try{
    const decoded = jwt.verify(auth, process.env.jwtSecret);
    req.user = decoded;
    next();
}
catch (error) {
    res.status(500).json({
        message: "Internal server error....",
        success: false
    });
}
}

module.exports = ensureAuthenticatd;