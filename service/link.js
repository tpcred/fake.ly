var hash = require('object-hash');

const LinkDao = require('../dao/link')
class LinkService{
    async createLink(form) {
        const link = form.big_link;
        if(await LinkDao.linkExists(link)){
            const existing_link = await LinkDao.getLink(link);
            await LinkDao.incrementTimesShortened(link, (parseInt(existing_link.times_shortened) + 1));
            return existing_link.short_link;
        }

        const short_link = "localhost:8080/" + hash(link);

        await LinkDao.createLink(link, short_link, 1, 0);
        return short_link;
    }
    async getLink(short_link){
        if(await LinkDao.shortLinkExists(short_link)){
            const existing_link = await LinkDao.getLinkByShort(short_link);
            await LinkDao.incrementShortUses(short_link, (parseInt(existing_link.short_uses) + 1));
            return existing_link.link;
        }
    }
}

module.exports = new LinkService()