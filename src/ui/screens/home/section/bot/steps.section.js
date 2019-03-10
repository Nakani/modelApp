export const stepsWelcome = [
  {
    id: '0',
    message: 'Olá,!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bem vindo, estou aqui para sanar suas dúvidas referente a esse teste OK? Selecione uma das opções abaixo!',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Ok, obrigado!', trigger: 'sobreApp' },
      { value: 2, label: 'Não sei, achei muito chato!', trigger: '4' },
    ],
  },

  {
    id: '4',
    message: 'poxa mas que pena :( ',
    trigger: '5',
  },
  {
    id: '5',
    message: 'você vai querer mesmo olhar todo os códigos? ',
    trigger: '6',
  },
  {
    id: '6',
    message: 'e sem falar comigo? ',
    trigger: 'chorando',
  },
  {
    id: 'chorando',
    message: '😭😭😭😭😭',
    trigger: '7',
  },


  {
    id: '7',
    options: [
      { value: 1, label: 'Sim,', trigger: 'sairChat' },
      { value: 2, label: 'Ta bom seu chato!', trigger: 'sobreApp' },
    ],
  },
  {
    id: 'sobreApp',
    message: 'Que ótimo, então selecione sua pergunta! eu estou pronto :)',
    trigger: 'nomeuser',
  },
  {
    id: 'nomeuser',
    message: 'mas antes, qual seu nome? :)',
    trigger: 'pergunta1',
  },
  {
    id: 'pergunta1',
    user: true,
    trigger: 'respUser1',
  },
  {
    id: 'respUser1',
    message: 'prazer {previousValue}, Eu não tenho nome ainda!',
    trigger: 'nomeApp',
  },
  {
    id: 'nomeApp',
    message: 'qual o nomer que você daria para mim?',
    trigger: 'nomedadouser',
  },

  {
    id: 'nomedadouser',
    user: true,
    trigger: 'respUser2',
  },
  {
    id: 'respUser2',
    message: '{previousValue} 😓',
    trigger: 'respUser3',
  },
  {
    id: 'respUser3',
    message: 'pensei que você era mais criativo hein, mas tudo bem!kkkk',
    trigger: 'respUser4',
  },
  {
    id: 'respUser4',
    message: '😂',
    trigger: 'respUser5',
  },
  {
    id: 'respUser5',
    message: 'mas tudo bem, vamos começar',
    trigger: 'initSobreApp',
  },
  {
    id: 'initSobreApp',
    options: [
      { value: 1, label: 'Tecnologias Usadas,', trigger: 'tecUsada' },
      { value: 2, label: 'Layout', trigger: 'layout' },
      { value: 3, label: 'tempo Levado', trigger: 'tempo' },
      { value: 4, label: 'mexer no app', trigger: 'sairChat' },
    ],
  },
  {
    id: 'tecUsada',
    message: 'foi usado nesse teste:',
    trigger: 'explicTec',
  },
  {
    id: 'explicTec',
    options: [
      { value: 1, label: 'Redux,', trigger: 'redux' },
      { value: 2, label: 'React Navigation', trigger: 'navigation' },
      { value: 3, label: 'Native Base', trigger: 'nativebase' },
      { value: 4, label: 'voltar', trigger: 'initSobreApp' },
    ],
  },
  {
    id: 'layout',
    message: 'olha, não tivemos muitos materiais',
    trigger: 'layout1',
  },
  {
    id: 'layout1',
    message: 'nao tivemos muita ajuda, somente um print de um celular final kkkk',
    trigger: 'layout2',
  },
  {
    id: 'layout2',
    message: 'para algo muito melhor seria legal ter as dimensoes corretas altura etc (briefing ajudaria kkk)',
    trigger: 'initSobreApp',
  },
  {
    id: 'tempo',
    message: 'houve um problema no qual tivemos que fazer um investimento meio que correndo sabe, pois não tinhamos um note decente!',
    trigger: 'initSobreApp',
  },
  {
    id: 'redux',
    message: 'usamos o redux com Axios para as rest api, pode verificar o codigo dentro do fontes /src/reduxs',
    trigger: 'explicTec',
  },
  {
    id: 'navigation',
    message: 'Até hoje desconheço outro melhor, mas claro conhecer outro seria interessante!',
    trigger: 'explicTec',
  },
  {
    id: 'nativebase',
    message: 'entao esse foi uma escolha para uma entrega rapida não queria deixar esse app muito simples, e aproveitei e usei alguns componentes para ir mais rapido!',
    trigger: 'explicTec',
  },

  {
    id: 'sairChat',
    message: 'sem problemas, so para avisar que algumas "coisinhas foram modificadas fora do escopo, espero que não seja problema!',
    trigger: 'end',
  },


  {
    id: 'end',
    message: 'Até mais!',
    end: true,
  },
];
