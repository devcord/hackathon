module.exports = async (req, res, { refresh }) => {
    res.json(await refresh(req, res))
}
