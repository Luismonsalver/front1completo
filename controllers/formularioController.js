const controller = {};

//Leer datos desde el formulario
controller.listar =  (req, res)=> {
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

//Guardar datos al formulario
controller.guardar = (req, res) => {

    const data = req.body;

    req.getConnection((err, conn)=> {
        conn.query('INSERT INTO formulario set ?', [data], (err, formulario) => {
            console.log(data)
            console.log(formulario);
            res.redirect('/');
        })
    })
}

module.exports = controller;