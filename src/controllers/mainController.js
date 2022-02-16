const mainController = {
    index: (req,res) => {
        res.render('index');
    },
    carrito: (req, res) => {
        res.render('carrito')
    },
    perfil: (req, res) => {
        res.render('perfil')
    },
    login: (req, res) => {
        res.render('login')
    },
    registro: (req, res) => {
        res.render('registro')
    }
}

module.exports = mainController;
