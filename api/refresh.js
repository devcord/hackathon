module.exports = ({ encrypt, decrypt, discord, mongo, token }) => async (req, res) => {
    if ( !token.get(req) ) return {
        status: 401,
        message: 'unauthorized',
        success: false
    }

    const { id } = token.get( req )
    const { fingerprint } = req
    
    try {
        const Sessions = mongo.collection( 'sessions' )
        const Users = mongo.collection( 'users' )

        const session = await Sessions.find({
            fingerprint: fingerprint.hash,
            id
        })

        if (session.length === 0 || !session[0]) return {
            code: 404,
            message: 'no session found',
            success: false
        }

        const { ciphertext, salt } = session[0]

        const response = { }
        
        try {
            Object.assign(
                response, 

                await discord.refresh({
                    refresh_token: decrypt(ciphertext, token.get(req).access_token, salt), 
                    redirect_uri: req.query.origin + '/refresh'
                })
            )
        } catch ( error ) {
            return {
                status: 404,
                message: 'failed to authenticate',
                success: false
            }
        }

        const { token: { refresh_token, access_token }, user } = response

        await Sessions.remove({
            fingerprint: fingerprint.hash
        })
    
        await Sessions.insert({
            fingerprint: fingerprint.hash, 
            ...encrypt(refresh_token, access_token),
            id,
            date: Date.now()
        })

        const {
            created_at, 
            last_signed_in, 
            admin, 
        } = ( await Users.find({ id }) )[0]

        token.set(res, {
            id,
            access_token
        })

        return {
            status: 200,
            user: Object.assign({}, user, { 
                created_at, 
                last_signed_in, 
                admin, 
            }),
            success: true
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            message: 'internal server error',
            success: false
        }
    }
}
