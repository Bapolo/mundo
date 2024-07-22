window.addEventListener("load", () =>
{
    const perguntas = [
        {
            pergunta: "Quem é conhecido como o pai da economia moderna?",
            A: "Adam Smith",
            B: "Karl Marx",
            C: "John Maynard Keynes",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem pintou a Capela Sistina?",
            A: "Michelangelo",
            B: "Leonardo da Vinci",
            C: "Raphael",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a unidade de força no Sistema Internacional de Unidades?",
            A: "Newton",
            B: "Joule",
            C: "Pascal",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior país do mundo em área?",
            A: "Canadá",
            B: "China",
            C: "Rússia",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem ganhou a Copa do Mundo FIFA em 2018?",
            A: "Brasil",
            B: "Alemanha",
            C: "França",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a fórmula do teorema de Pitágoras?",
            A: "a^2 + b^2 = c^2",
            B: "a^2 - b^2 = c^2",
            C: "a^2 + b = c^2",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o valor de π (pi) aproximadamente?",
            A: "2.14",
            B: "3.14",
            C: "4.14",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o símbolo químico do ouro?",
            A: "Au",
            B: "Ag",
            C: "Pb",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
            A: "Thomas Jefferson",
            B: "George Washington",
            C: "John Adams",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem pintou 'A Noite Estrelada'?",
            A: "Salvador Dalí",
            B: "Vincent van Gogh",
            C: "Paul Cézanne",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior deserto do mundo?",
            A: "Deserto do Saara",
            B: "Deserto da Arábia",
            C: "Antártica",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual pintor é conhecido por suas pinturas de girassóis?",
            A: "Claude Monet",
            B: "Vincent van Gogh",
            C: "Pablo Picasso",
            respostaCerta: "B"
        },
        {
            pergunta: "O que é inflação?",
            A: "Aumento geral dos preços",
            B: "Diminuição do valor do dinheiro",
            C: "Aumento da produção",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a capital do Japão?",
            A: "Tóquio",
            B: "Osaka",
            C: "Quioto",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior planeta do sistema solar?",
            A: "Vênus",
            B: "Júpiter",
            C: "Saturno",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a fórmula química da água?",
            A: "H2O",
            B: "O2",
            C: "CO2",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a montanha mais alta do mundo?",
            A: "Monte Everest",
            B: "K2",
            C: "Kangchenjunga",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro imperador romano?",
            A: "Augusto",
            B: "Júlio César",
            C: "Nero",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro astronauta a caminhar na Lua?",
            A: "Buzz Aldrin",
            B: "Michael Collins",
            C: "Neil Armstrong",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem desenvolveu a teoria da relatividade?",
            A: "Isaac Newton",
            B: "Albert Einstein",
            C: "Galileu Galilei",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior animal do mundo?",
            A: "Baleia-azul",
            B: "Elefante africano",
            C: "Girafa",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem pintou 'Guernica'?",
            A: "Salvador Dalí",
            B: "Pablo Picasso",
            C: "Joan Miró",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'Dom Quixote'?",
            A: "Miguel de Cervantes",
            B: "William Shakespeare",
            C: "Gustave Flaubert",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a maior ilha do mundo?",
            A: "Groenlândia",
            B: "Austrália",
            C: "Havaí",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem inventou o telefone?",
            A: "Alexander Graham Bell",
            B: "Thomas Edison",
            C: "Nikola Tesla",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual evento marcou o início da Idade Média?",
            A: "A queda do Império Romano",
            B: "A descoberta da América",
            C: "A Revolução Francesa",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior porto natural do mundo?",
            A: "Porto de Rotterdam",
            B: "Porto de Singapura",
            C: "Baía de Guanabara",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem é conhecido como o 'Pai da Computação'?",
            A: "Bill Gates",
            B: "Alan Turing",
            C: "Steve Jobs",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior deserto de gelo do mundo?",
            A: "Deserto do Saara",
            B: "Antártica",
            C: "Deserto de Gobi",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu '1984'?",
            A: "Aldous Huxley",
            B: "George Orwell",
            C: "Ray Bradbury",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior produtor de café do mundo?",
            A: "Brasil",
            B: "Colômbia",
            C: "Vietnã",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro navegador a circunavegar o globo?",
            A: "Fernão de Magalhães",
            B: "Vasco da Gama",
            C: "Cristóvão Colombo",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior festival de música do mundo?",
            A: "Rock in Rio",
            B: "Coachella",
            C: "Woodstock",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro ser humano a viajar para o espaço duas vezes?",
            A: "John Glenn",
            B: "Yuri Gagarin",
            C: "Neil Armstrong",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'O Pequeno Príncipe'?",
            A: "Antoine de Saint-Exupéry",
            B: "Jules Verne",
            C: "Victor Hugo",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem liderou a Revolução Russa em 1917?",
            A: "Josef Stalin",
            B: "Leon Trotsky",
            C: "Vladimir Lenin",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem é conhecido como o 'Rei do Futebol'?",
            A: "Diego Maradona",
            B: "Pelé",
            C: "Lionel Messi",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual pintor é famoso por sua técnica de pontilhismo?",
            A: "Georges Seurat",
            B: "Henri Matisse",
            C: "Edgar Degas",
            respostaCerta: "A"
        },
        {
            pergunta: "Quantas vezes Michael Jordan ganhou o campeonato da NBA?",
            A: "4",
            B: "6",
            C: "8",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual tenista tem o maior número de títulos de Grand Slam?",
            A: "Roger Federer",
            B: "Rafael Nadal",
            C: "Novak Djokovic",
            respostaCerta: "C"
        },
        {
            pergunta: "O que é PIB?",
            A: "Produto Industrial Bruto",
            B: "Produto Interno Bruto",
            C: "Produto Individual Bruto",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior rio do mundo em volume de água?",
            A: "Rio Nilo",
            B: "Rio Yangtzé",
            C: "Rio Amazonas",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a fórmula do teorema de Pitágoras?",
            A: "a^2 + b^2 = c^2",
            B: "a^2 - b^2 = c^2",
            C: "a^2 + b = c^2",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o valor de π (pi) aproximadamente?",
            A: "2.14",
            B: "3.14",
            C: "4.14",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem pintou 'A Última Ceia'?",
            A: "Michelangelo",
            B: "Raphael",
            C: "Leonardo da Vinci",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a fórmula química da água?",
            A: "H2O",
            B: "O2",
            C: "CO2",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem inventou a lâmpada elétrica?",
            A: "Nikola Tesla",
            B: "Thomas Edison",
            C: "Alexander Graham Bell",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual evento marcou o fim da Idade Média?",
            A: "A descoberta da América",
            B: "A queda de Constantinopla",
            C: "A Revolução Francesa",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem é conhecido como o 'Pai da Psicanálise'?",
            A: "Carl Jung",
            B: "Wilhelm Wundt",
            C: "Sigmund Freud",
            respostaCerta: "C"
        }
    ]
    
      
    const apresentacaoDaPergunta = document.querySelector("#apresentacaoDaPergunta")
    const opcaoA = document.querySelector("#A")
    const opcaoB = document.querySelector("#B")
    const opcaoC = document.querySelector("#C") 
    const botaoJogar = document.querySelector("#botaoJogar")
    const primeiraTela = document.querySelector("#primeiraTela")
    const segundaTela = document.querySelector("#segundaTela")
    const boataoVoltar = document.querySelector("#boataoVoltar")
    const pontuacao = document.querySelector("#pontuacao")
    const botoesDeResposta = document.querySelectorAll(".botoesRespostas")
    const pontos = document.querySelector("#pontos")
    let indice
    
    const arrayDeBotoesRespostas = [...botoesDeResposta] //converte a nodeList criada pelo QuerySellectorAll em Array 

    console.log(arrayDeBotoesRespostas)
    
    botaoJogar.addEventListener("click", () =>
    {
        primeiraTela.style.display = 'none'
        primeiraTela.style.animation = 'desaparecer 0.7s ease-in-out'
        primeiraTela.style.opacity = 1
        segundaTela.style.display = 'flex'
        segundaTela.style.animation = 'aparecer 0.7s ease'
        segundaTela.style.opacity = 1  
        pontuacao.innerHTML = 0 
        
        jogar()
        
    })

    boataoVoltar.addEventListener("click", () =>
    {
        voltarNaTelaInicial()
    })

    arrayDeBotoesRespostas.forEach((botaoClicado) =>
        {
            botaoClicado.addEventListener("click", () =>
            {
                if (botaoClicado.id == perguntas[indice].respostaCerta)
                {
                    botaoClicado.style.backgroundColor = "#0f0"
                    somarPontos()
                    setTimeout(() =>
                    {                        
                        jogar()
                    }, 1000)
                }
                else
                {
                    const botaoResposta = `${perguntas[indice].respostaCerta}`

                    arrayDeBotoesRespostas.forEach((botao) =>
                    {
                        if (botao.id == botaoResposta)
                        {
                            botao.style.backgroundColor = "#0f0"
                        }
                    })
                    
                    pontos.innerHTML = `Pontuacão <br> ${pontuacao.value}`
                    botaoClicado.style.backgroundColor = "#f00"
                    setTimeout(() => voltarNaTelaInicial(), 1000)                    
                }
            })
    })

    function jogar()
    {
        indice = Math.round(Math.random() * (perguntas.length - 1))
        apresentacaoDaPergunta.innerHTML = perguntas[indice].pergunta
        opcaoA.innerHTML = perguntas[indice].A
        opcaoB.innerHTML = perguntas[indice].B
        opcaoC.innerHTML = perguntas[indice].C 
        
        arrayDeBotoesRespostas.forEach((botao) =>
        {
            botao.style.backgroundColor = "#fff"
        })
    }

    function voltarNaTelaInicial()
    {
        segundaTela.style.display = 'none'
        segundaTela.style.animation = 'desaparecer 0.7s ease'
        segundaTela.style.opacity = 0 
        primeiraTela.style.display = 'flex'
        primeiraTela.style.animation = 'aparecer 0.7s ease-in-out'
        primeiraTela.style.opacity = 1
    }

    function somarPontos()
    {
        pontuacao.innerHTML++ 
    }

    
})