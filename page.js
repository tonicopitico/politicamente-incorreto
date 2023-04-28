const respostas =[
    'Sexo selvagem',
    'Sexo sem proteção',
    'Esperma quente',
    'Pênis pequeno',
    'Orgasmo falso',
    'Gozar rápido',
    'Peido fedido',
    'Sexo sem graça',
    'Ser negro',
    'Satanismo',
    'Pedofilia',
    'Racismo',
    'Incesto',
    'Transexualidade',
    'Abuso sexual',
    'Inversão de papéis',
    'Bissexualidade'
  ];

  const perguntas = [
    "O que é a única coisa que você não pode comprar com dinheiro?",
    "O que é o segredo para uma vida feliz?",
    "Qual é o seu superpoder oculto?",
    "O que é a maior realização da sua vida?",
    "Qual é a coisa mais embaraçosa que você já fez?",
    "Qual é a sua ideia de um encontro perfeito?",
    "O que é a pior coisa que já aconteceu com você em público?",
    "Qual é a sua maior fantasia?",
    "O que é a coisa mais engraçada que você já viu?",
    "Qual é a sua maior fraqueza?",
    "Qual é a melhor maneira de relaxar após um longo dia?",
    "O que é a sua ideia de uma noite perfeita em casa?",
    "Qual é a pior coisa que você já experimentou na sua vida?",
    "Qual é a sua maior realização profissional?",
    "Qual é a sua opinião sobre o divórcio?",
    "O que é a coisa mais romântica que você já fez por alguém?",
    "Qual é a sua ideia de uma festa perfeita?"
];

    let pergunta;
    let canAnswer = false;

function getRandomNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

function randomAnswer(){
    if(canAnswer){
        let index = getRandomNumber(0, respostas.length-1);
        console.log(respostas[index]);
        const cardContent = document.querySelector(".card_content")
        cardContent.innerText = pergunta + " " + respostas[index];
    }
}

function randomQuestion(){
    let index = getRandomNumber(0, perguntas.length-1);
    console.log(perguntas[index]);
    pergunta = perguntas[index];
    const cardContent = document.querySelector(".card_content")
    cardContent.innerText = pergunta + "_________";
    canAnswer = true;
}