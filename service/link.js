var hash = require('object-hash');

const LinkDao = require('../dao/link')
class LinkService{
    createLink(big_link) {
        const link = big_link;
        const short_link = "http://localhost:8080/" + hash(big_link);
        return LinkDao.createLink(link, short_link, 1, 0);
    }
}

module.exports = new LinkService()