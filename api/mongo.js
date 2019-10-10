const MongoClient = require('mongodb').MongoClient

module.exports = async ( ) => {
    const client = await MongoClient.connect(
        `mongodb://${ process.env.DB_USER }:${ process.env.DB_PWD }@${ process.env.DB_URL }/hackathon`, 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
        }
    )

    const { close } = client

    const db = client.db('hackathon')

    const collection = ( collection ) => {
        collection = db.collection( collection )

        return {
            insert: document => collection.insertMany(
                Array.isArray( document ) ? document : [ document ]
            ),

            update () {
                return collection.updateOne( ...arguments )
            },

            remove: filter => collection.deleteMany( filter ),

            index: document => collection.createIndex( document, null ),

            find: document => collection.find( document ).toArray()
        }
    }

    return {
        collection,
        close
    }
}
