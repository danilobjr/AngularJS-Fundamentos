var Aluno = require('../data/data').alunos;

module.exports = function (router) {

    router.route('/alunos')
        .get(function(req, res, next) {
            Aluno.getList(function (err, alunos) {
                if (err) { return next(err); }
                res.json(alunos);
            });
        })
        .post(function (req, res, next) {
            var novoAluno = req.body;

            Aluno.post(novoAluno, function (err, alunoCriado) {
                if (err) { return next(err); }
                res.json(novoAluno);
            });
        });

    router.route('/alunos/:alunoId')
        .delete(function (req, res, next) {
            Aluno.remove(req.params.alunoId, function (err, alunoRemovido) {
                if (err) { return next(err); }
                res.json(alunoRemovido);
            });
        });
};
