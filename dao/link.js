const db = require('../db/db')

class LinkDao{
    createLink(link, short_link, times_shortened, short_uses) {
        db('link').insert({
            link,
            short_link,
            times_shortened,
            short_uses
        })
    }
}

module.exports = new LinkDao()