const { check, validationResult } = require('express-validator');


module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });

}

module.exports.noticias_salvar = function (application, req, res) {
    var noticia = req.body;

    var erros = validationResult(req); // -> retorna um JSON

    if (!erros.isEmpty()) {
        //return res.status(422).json({ erros: erros.array() }); //-> Use para debuggar
        res.render("admin/form_add_noticia", { validacao: erros.array(), noticia: noticia }); //.array para a view conseguir entender esse json(?)
        return;
    };

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect("/noticias");
    });
};

