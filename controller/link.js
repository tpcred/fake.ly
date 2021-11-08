const linkService = require('../service/link')
class LinkController{
    async createLink(req, res) {
        try{
            const id = await linkService.createLink(req.body);
            res.status(201).json(id);
        }catch (err){
            console.error(err);
        }
    }
}

module.exports = new LinkController()