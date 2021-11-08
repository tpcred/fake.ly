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
    async getLink(req, res) {
        try{
            const link = await linkService.getLink("localhost:8080/" + req.params.hash);
            res.redirect(link);
        }catch (err){
            console.error(err);
        }
    }
}

module.exports = new LinkController()