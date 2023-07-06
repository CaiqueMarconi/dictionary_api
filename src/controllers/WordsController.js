
const GetWordsController = require('./GetWordsController.js');

class WordsController{

   async index(req, res){
        const {offset, limit} = req.query;
        if(!offset || !limit){
            return res.status(400).json({message: 'Erro envie os parametros offset e limit para obter um range de palavras'})
        }
        const words = await GetWordsController.readFile(offset, limit);
        return res.json(words);
    }
}

module.exports = new WordsController();