var hash = require('object-hash');

const LinkDao = require('../dao/link')
class LinkService{
    async createLink(big_link) {
        const link = big_link;
        if(await LinkDao.linkExists(link)){
            const existing_link = await LinkDao.getLink(link);
            await LinkDao.incrementTimesShortened(link, (parseInt(existing_link.times_shortened) + 1));
            return existing_link.short_link;
        }

        const short_link = "http://localhost:8080/" + hash(big_link);
        await LinkDao.createLink(link, short_link, 1, 0);
        return short_link;
    }
}

module.exports = new LinkService()