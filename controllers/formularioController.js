const controller = {};

controller.list =  (req, res)=> {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM frontendbd',(err,formulario) => {
            if (err) {
                res.json(err);
            }
            res.render('formulario', {

            });
        });
    });
};

module.exports = controller;