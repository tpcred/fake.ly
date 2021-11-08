const db = require('../db/db')

class LinkDao{
    async createLink(link, short_link, times_shortened, short_uses) {
        const [id] = await db('links').insert({
            link,
            short_link,
            times_shortened,
            short_uses
        }).returning('id');

        return id;
    }
    async getLink(link){
        const get_link = await db('links').where('link', link).first();
        return get_link;
    }
    async linkExists(link){
        const exists = await db('links').where('link', link).first();
        if(exists){
            return true;
        }
        return false;
    }
    async incrementTimesShortened(link, new_times_shortened){
        const update_link = await db('links').where('link', link).update("times_shortened", new_times_shortened)
        return;
    }
    async getLinkByShort(short_link){
        const get_link_by_short = await db('links').where('short_link', short_link).first();
        return get_link_by_short;
    }
    async shortLinkExists(short_link){
        const exists = await db('links').where('short_link', short_link).first();
        if(exists){
            return true;
        }
        return false;
    }
    async incrementShortUses(short_link, short_uses){
        const update_link = await db('links').where('short_link', short_link).update("short_uses", short_uses)
        return;
    }
}

module.exports = new LinkDao()