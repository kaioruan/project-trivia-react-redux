# Boas vindas ao repositório do Projeto Trivia!

Esse projeto foi desenvolvido durante o módulo de FrontEnd na Trybe! #vqv 🚀

Aqui você vai encontrar os detalhes de como foi o desenvolvimento do projeto e quais foram os requisitos obrigatórios para o desenvolvimento.

---

# Habilidades desenvolvidas

Neste projeto, fui capaz de:

Criar um store Redux em aplicações React

Criar reducers no Redux em aplicações React

Criar actions no Redux em aplicações React

Criar dispatchers no Redux em aplicações React

Conectar Redux aos componentes React

Criar actions assíncronas na sua aplicação React que faz uso de Redux.

Escrever testes para garantir que sua aplicação possua uma boa cobertura de testes.
---

# Funcionamento da aplicação

⚠ **Atenção:** ⚠

Para rodar a aplicação é necessário executar um dos comandos abaixo.

Modo de produção:
```sh
npm start
```
# Sobre os testes
## Executando todos os testes

Para poder executar os testes, inicie sua aplicação com o comando `npm test` e **todos** os seus testes serão executados.

## Executando um teste específico

Para executar um teste expecífico, basta executar o comando `npm test nome-do-teste`.

Ex: Para executar o teste referente ao **login**, basta digitar `npm test login`.

---
# Requisitos desenvolvidos no projeto:
### Requisitos Obrigatórios:

- ✅ 1. Crie a tela de login, onde a pessoa que joga deve preencher as informações para iniciar um jogo
- ✅ 2. Crie o botão de iniciar o jogo.  O botão "Play" deve fazer requisição para a API para obter o token e redirecionar a pessoa para tela de jogo

- ✅ 3. Crie um botão que leva a pessoa para tela de configuração.  A tela inicial deve conter um botão que leve para a configuração do jogo

- ✅ 4. Desenvolva testes para atingir 90% de cobertura da tela de Login.

- ✅ 5. Crie um header que deve conter as informações da pessoa jogadora. O header deve conter as informações sobre a pessoa jogadora, como a imagem do Gravatar, o nome e o placar
- ✅ 6. Crie a página de jogo que deve conter as informações relacionadas à pergunta. Deve ser feita a requisição para a API para popular o jogo com as perguntas, categoria e alternativas.
- ✅ 7. Desenvolva o estilo que, ao clicar em uma resposta, a correta deve ficar verde e as incorretas, vermelhas.
- ✅ 8. Desenvolva um timer onde a pessoa que joga tem 30 segundos para responder, caso ultrapasse o tempo, a pergunta é considerada errada.
- ✅ 9. Crie o placar com as seguintes características: Ao clicar na resposta correta, pontos devem ser somados no placar da pessoa que está jogando.
- ✅ 10. Crie um botão de Next que apareça após a resposta ser dada. 
- ✅ 11. Desenvolva o jogo de forma que a pessoa que joga deve responder 5 perguntas no total,  onde, a cada nova pergunta, o timer é reiniciado e após respondê-las, a pessoa que joga deve ser redirecionada para a tela de feedback.
- ✅ 12. Desenvolva o header de feedback que deve conter as informações da pessoa jogadora, incluindo o placar com o valor referente ao desempenho no jogo.
- ✅ 13. Crie a mensagem de feedback para ser exibida a pessoa usuária, uma mensagem relacionada ao desempenho da pessoa que jogou.
- ✅ 14. Exiba as informações relacionadas aos resultados obtidos para a pessoa usuária.
- ✅ 15. Crie a opção para a pessoa jogadora poder jogar novamente. A pessoa terá a opção jogar novamente ("Play Again"), que ao ser clicada, levará para a tela de inicial.
- ✅ 16. Crie a opção para a pessoa jogadora poder visualizar a tela de ranking.
- ✅ 17. Desenvolva testes para atingir 90% de cobertura da tela de Feedbacks.
- ✅ 18. Crie o conteúdo da tela de ranking.
