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

controller.save = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn)=> {
        conn.query('INSERT INTO formulario set ?', [data], (err, formulario) => {
            console.log(data)
            console.log(formulario);
            res.redirect('/index');
        })
    })
}

module.exports = controller;