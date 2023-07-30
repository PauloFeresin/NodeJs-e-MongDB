const { check, validationResult } = require('express-validator');

module.exports = function (application) {
    application.get("/formulario_inclusao_noticia", function (req, res) {
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });

    application.post("/noticias/salvar",
        [
            check("titulo").not().notEmpty().withMessage("Título não pode ser vazio"),
            check("titulo").isLength({ min: 5, max: 100 }).withMessage("Entre 5 e 100 chars"),
            check("resumo").not().notEmpty().withMessage("Resumo não pode ser vazio"),
            check("autor").not().notEmpty().withMessage("Autor não pode ser vazio"),
            check("autor").isLength({ min: 2, max: 100 }).withMessage("Entre 2 e 20 chars"),
            check("data_noticia").not().notEmpty().withMessage("Data é obrigatória"),
            check("noticia").not().notEmpty().withMessage("noticia é obrigatoria"),
        ], function (req, res) {
            application.app.controllers.admin.noticias_salvar(application, req, res);
        });
};
