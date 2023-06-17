const controller = {};

controller.list =  (req, res)=> {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM formulario', (err,formulario) => {
            if (err) {
                res.json(err);
            }
            console.log(formulario)
            res.render('formulario', {
                data: formulario
            });
        });
    });
};

module.exports = controller;