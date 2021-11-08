const db = require('../db/db')

class LinkDao{
    async createLink(link, short_link, times_shortened, short_uses) {
        const [id] = await db('link').insert({
            link,
            short_link,
            times_shortened,
            short_uses
        }).returning('id');

        return id;
    }
}

module.exports = new LinkDao()