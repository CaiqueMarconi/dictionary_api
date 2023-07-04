
const fs = require('fs');
const { promisify } = require('util');

class GetWordsController {
  async readFile(init, final) {
    const caminhoArquivo = './words_dictionary.json';
    const readFileAsync = promisify(fs.readFile);

    try {
      // Lê o conteúdo do arquivo JSON
      const dados = await readFileAsync(caminhoArquivo, 'utf8');

      // Analisa o conteúdo JSON em um objeto JavaScript
      const objetoJSON = JSON.parse(dados);

      // Agora você pode acessar os dados do arquivo JSON como um objeto
      const allWords = Object.entries(objetoJSON);
      const twenty = allWords.slice(init, final);
      const words = Object.fromEntries(twenty);
      return words;
    } catch (erro) {
      console.error('Erro ao ler o arquivo:', erro);
      throw erro; // Lança o erro para que seja tratado externamente
    }
  }
}

module.exports = new GetWordsController();