export const stepsWelcome = [
  {
    id: '0',
    message: 'Olá,!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bem vindo, estou aqui para sanar suas dúvidas referente a esse teste OK?',
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
    options: [
      { value: 1, label: 'Sim,', trigger: 'nomeuser' },
      { value: 2, label: 'Ta bom me conte um pouco sobre o App!', trigger: 'sobreApp' },
    ],
  },
  {
    id: 'sobreApp',
    message: 'Que ótimo, então vamos lá, digite sua pergunta! eu estou pronto :)',
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
    trigger: 'respuser2',
  },
  {
    id: 'respuser2',
    user: true,
    trigger: 'respUser2',
  },
  {
    id: 'respUser2',
    message: '😓',
    trigger: 'respUser3',
  },
  {
    id: 'respUser3',
    message: 'mas tudo bem, posso te contar mais sobre o app?',
    trigger: '2',
  },

  {
    id: 'end',
    message: 'Bye!',
    end: true,
  },
];
