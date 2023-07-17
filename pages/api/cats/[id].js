export default function handler(req, res) {
    // GET specific cat
    // PUT a specfic cat, can handle images
    // DELETE a specific cat
    res.send(req.method)
};
