# Prompt para o game no front


Paleta de cores:
--sandy-brown: #fa9f42ff;
--muted-teal: #94a89aff;
--pine-teal: #294936ff;
--prussian-blue: #0d2149ff;
--dark-wine: #721817ff;

## Regras de negócio do jogo
- Página inicial ( ou modal) pedindo nomes dos dois players, a quantidade de cartas e se os dinos serão aleatórios ou os mais famosos;
- A tela do jogo tem o espaço para uma carta de cada player, o nome de cada um e o número de cartas que cada um tem no momento;
- O jogo indica de quem é a vez de jogar e mostra a carta desse player, a outra carta fica como se estivesse virada para baixo, sem mostrar dino ou atributos.
- O player da vez escolhe um atributo e clica nesse atributo para desafiar o outro player, nesse momento a carta do outro é revelada e o game diz quem ganhou a mão;
- Quem ganha a mão fica com essas duas cartas e elas vão para o final do baralho do player;
- em caso de empate, as cartas ficam na mesa e o jogador da vez escolhe um atributo da próxima carta;
- Quando um jogador perder todas as suas cartas, o outro ganhou o jogo.

Crie um frontend vanilla para rodar esse jogo de trunfo, pegando as cartas com get em:
- http://localhost:3000/dinos/top/fama/:n para jogar com os dinos mais famosos ou
- http://localhost:3000/dinos/random/:n se escolher jogar com os aleatórios

Caso eu tenha esquecido de mencionar alguma regra de negócio, me pergunte o que fazer em relação a ela.




---
alterações
- Fama não deve aparecer na carta (só serve para selecionar baralho);
- escolha do atributo pelo teclado [1], [2]... (mostrar o número entre colchetes antes de cada atributo)
- antes de começar cada partida, deve substituir o atributo numero_magico de todas as caratas por um número aleatório de 1..10;
- colocar uma borda com shadow brilhante ao redor do nome do player da vez, pra ficar mais claro quem deve jogar.
- para a imagem da carta, tente pegar a imagem no padrão NomeDoDino.png (usando o próprio atributo nome) em 'https://github.com/rafaellindemann/trunfo-dino/tree/main/imgs', caso retorne erro, use a imagem local genérica 'imgs/dino.svg'


- Ficou show!
Só a  imagem genérica que precisa ser redimensionada, porque está maior que seu container e está aparecendo um pedaço dela apenas