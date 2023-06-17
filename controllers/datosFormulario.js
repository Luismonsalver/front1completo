const controller = {};

controller.list =  (req, res)=> {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM datosFormulario', (err,formulario) => {
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
            console.log(formulario);
            res.send('works ')
        })
    })
}

module.exports = controller;