const { getUserRole} = require('../repositories/users');

const verifyRoles = (roles)=>{
    return async(req,res,next)=>{
        const userid = req.userid._id;
        const userRoles = await getUserRole(userid);

        let hasRole = false;
        if(roles == userRoles){
            hasRole = true;
            next();
        }
        else{
            return res.status(403).json({message:'you dont have permission'});
        }
    }
}

module.exports = {verifyRoles};