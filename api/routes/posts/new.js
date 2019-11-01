module.exports = (req, res, { refresh, mongo, uuid }) => {
    const { success, user } = refresh(req, res)

    if (!success) return res.json({
        success: false,
        status: 401,
        message: 'unauthorized'
    })

    const { summary, description, tags } = req.body

    if ( !summary || !description || !tags ) return res.json({
        code: 400,
        message: 'please provide all required fields',
        success: false
    })

    if ( description.length > 3000 ) return res.json({
        code: 400,
        message: 'description must be less than or equal to 3000 characters in length',
        success: false
    })

    if ( summary.length > 100 ) return res.json({
        code: 400,
        message: 'description must be less than or equal to 100 characters in length',
        success: false
    })

    if ( tags.replace(/[ ]{2,}/g, ' ').length > 1000 ) return res.json({
        code: 400,
        message: 'tags must be less than or equal to 1000 characters in length',
        success: false
    })

    const sanitize = string => string
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')

    const document = {
        summary: sanitize(summary),
        description: sanitize(description),
        tags: sanitize(tags),
    }

    switch ( req.params.type ) {
        case 'individual':
            const Individuals = mongo.collection('individuals')

            // await Individuals.insert({

            // })

            console.log(document, 'New Individual')

            return res.json({
                success: true,
                status: 200
            })

        case 'project':
            const Projects = mongo.collection('projects')

            console.log(document, 'New Project')

            return res.json({
                success: true,
                status: 200
            })
        
        default:
            return res.json({
                status: 404,
                success: false,
                message: 'unknown post type'
            })
    }
}
