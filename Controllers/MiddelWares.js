module.exports = {
    setUser(req, res, next) {
        req.user = {id: 10, name: "ahmed", permissions: ["listing"]};
        next()
    },
    auth(req, res, next) {
        // if (req.user.permissions.includes("listing"))
        // if (req.user.id != 10)
        if ([10, 36].includes(req.user.id))
            return next();
        return res.status(401).json({message: "unauthorized"})
    },
    log(req, res, next) {
        console.log("new request from user : ", req.user.name)
        next();
    }

}