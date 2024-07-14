window.addEventListener("load", () =>
{
    const perguntas = [
        
        {
            pergunta: "Quem pintou a Mona Lisa?",
            opcaoA: "Vincent van Gogh",
            opcaoB: "Leonardo da Vinci",
            opcaoC: "Pablo Picasso",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior planeta do sistema solar?",
            opcaoA: "Vênus",
            opcaoB: "Júpiter",
            opcaoC: "Saturno",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
            opcaoA: "Thomas Jefferson",
            opcaoB: "George Washington",
            opcaoC: "John Adams",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior animal do mundo?",
            opcaoA: "Baleia-azul",
            opcaoB: "Elefante africano",
            opcaoC: "Girafa",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'Dom Quixote'?",
            opcaoA: "Miguel de Cervantes",
            opcaoB: "William Shakespeare",
            opcaoC: "Gustave Flaubert",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior deserto de gelo do mundo?",
            opcaoA: "Deserto do Saara",
            opcaoB: "Antártica",
            opcaoC: "Deserto de Gobi",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro imperador romano?",
            opcaoA: "Augusto",
            opcaoB: "Júlio César",
            opcaoC: "Nero",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a maior ponte do mundo em extensão?",
            opcaoA: "Golden Gate",
            opcaoB: "Ponte Vasco da Gama",
            opcaoC: "Ponte Danyang-Kunshan",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem é conhecido como o 'Pai da Computação'?",
            opcaoA: "Bill Gates",
            opcaoB: "Alan Turing",
            opcaoC: "Steve Jobs",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o autor de '1984'?",
            opcaoA: "Aldous Huxley",
            opcaoB: "George Orwell",
            opcaoC: "Ray Bradbury",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o país mais populoso do mundo?",
            opcaoA: "Índia",
            opcaoB: "Estados Unidos",
            opcaoC: "China",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem inventou o telefone?",
            opcaoA: "Alexander Graham Bell",
            opcaoB: "Thomas Edison",
            opcaoC: "Nikola Tesla",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior porto natural do mundo?",
            opcaoA: "Porto de Rotterdam",
            opcaoB: "Porto de Singapura",
            opcaoC: "Baía de Guanabara",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro astronauta a caminhar na Lua?",
            opcaoA: "Buzz Aldrin",
            opcaoB: "Michael Collins",
            opcaoC: "Neil Armstrong",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é o animal mais veloz do mundo?",
            opcaoA: "Guepardo",
            opcaoB: "Falcão peregrino",
            opcaoC: "Lebre",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'O Pequeno Príncipe'?",
            opcaoA: "Antoine de Saint-Exupéry",
            opcaoB: "Jules Verne",
            opcaoC: "Victor Hugo",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a montanha mais alta da América do Norte?",
            opcaoA: "Monte McKinley",
            opcaoB: "Monte Logan",
            opcaoC: "Monte Rainier",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro navegador a circunavegar o globo?",
            opcaoA: "Fernão de Magalhães",
            opcaoB: "Vasco da Gama",
            opcaoC: "Cristóvão Colombo",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a maior ilha do mundo?",
            opcaoA: "Groenlândia",
            opcaoB: "Austrália",
            opcaoC: "Havaí",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'Odisseia'?",
            opcaoA: "Homero",
            opcaoB: "Sófocles",
            opcaoC: "Eurípides",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior produtor de café do mundo?",
            opcaoA: "Brasil",
            opcaoB: "Colômbia",
            opcaoC: "Vietnã",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro ser humano a viajar para o espaço duas vezes?",
            opcaoA: "John Glenn",
            opcaoB: "Yuri Gagarin",
            opcaoC: "Neil Armstrong",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior festival de música do mundo?",
            opcaoA: "Rock in Rio",
            opcaoB: "Coachella",
            opcaoC: "Woodstock",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem pintou 'A Noite Estrelada'?",
            opcaoA: "Vincent van Gogh",
            opcaoB: "Claude Monet",
            opcaoC: "Edvard Munch",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o segundo maior país do mundo em área?",
            opcaoA: "China",
            opcaoB: "Canadá",
            opcaoC: "Estados Unidos",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro cientista a formular a teoria da relatividade?",
            opcaoA: "Isaac Newton",
            opcaoB: "Albert Einstein",
            opcaoC: "Niels Bohr",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a maior cachoeira do mundo em volume de água?",
            opcaoA: "Cataratas do Iguaçu",
            opcaoB: "Cataratas Vitória",
            opcaoC: "Cataratas do Niágara",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro homem a escalar o Monte Everest?",
            opcaoA: "Tenzing Norgay",
            opcaoB: "Edmund Hillary",
            opcaoC: "Reinhold Messner",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a maior fortaleza do mundo?",
            opcaoA: "Castelo de Windsor",
            opcaoB: "Castelo de Praga",
            opcaoC: "Castelo de São João",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro homem a ganhar dois prêmios Nobel em diferentes áreas?",
            opcaoA: "Marie Curie",
            opcaoB: "Albert Einstein",
            opcaoC: "Linus Pauling",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é o maior deserto de sal do mundo?",
            opcaoA: "Deserto do Saara",
            opcaoB: "Deserto do Atacama",
            opcaoC: "Salar de Uyuni",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro presidente negro da África do Sul?",
            opcaoA: "Nelson Mandela",
            opcaoB: "Thabo Mbeki",
            opcaoC: "Cyril Ramaphosa",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior animal marinho?",
            opcaoA: "Baleia-azul",
            opcaoB: "Tubarão-baleia",
            opcaoC: "Orca",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro homem a chegar ao Polo Norte?",
            opcaoA: "Robert Peary",
            opcaoB: "Roald Amundsen",
            opcaoC: "Ernest Shackleton",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a capital da Austrália?",
            opcaoA: "Sydney",
            opcaoB: "Melbourne",
            opcaoC: "Camberra",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro presidente dos Estados Unidos a ser eleito para um terceiro mandato?",
            opcaoA: "George Washington",
            opcaoB: "Thomas Jefferson",
            opcaoC: "Franklin D. Roosevelt",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a maior ilha da Grécia?",
            opcaoA: "Creta",
            opcaoB: "Santorini",
            opcaoC: "Rhodes",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem inventou o avião?",
            opcaoA: "Wilbur e Orville Wright",
            opcaoB: "Leonardo da Vinci",
            opcaoC: "Amelia Earhart",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a maior caverna do mundo?",
            opcaoA: "Grutas de Mira de Aire",
            opcaoB: "Grutas de Postojna",
            opcaoC: "Gruta Son Doong",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro homem a pisar na Lua?",
            opcaoA: "Buzz Aldrin",
            opcaoB: "Michael Collins",
            opcaoC: "Neil Armstrong",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é o nome da linha que divide a Terra em hemisfério ocidental e oriental?",
            opcaoA: "Linha do Equador",
            opcaoB: "Meridiano de Greenwich",
            opcaoC: "Círculo Polar Ártico",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro presidente do Brasil?",
            opcaoA: "Juscelino Kubitschek",
            opcaoB: "Getúlio Vargas",
            opcaoC: "Deodoro da Fonseca",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a montanha mais alta da América do Sul?",
            opcaoA: "Monte Aconcágua",
            opcaoB: "Monte Chimborazo",
            opcaoC: "Monte Ojos del Salado",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro homem a viajar para o espaço?",
            opcaoA: "Yuri Gagarin",
            opcaoB: "Neil Armstrong",
            opcaoC: "Alan Shepard",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior rio do mundo em volume de água?",
            opcaoA: "Rio Amazonas",
            opcaoB: "Rio Nilo",
            opcaoC: "Rio Yangtze",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem é conhecido como o 'pai da Medicina'?",
            opcaoA: "Hipócrates",
            opcaoB: "Avicena",
            opcaoC: "Paracelso",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior parque nacional do mundo?",
            opcaoA: "Yellowstone",
            opcaoB: "Everglades",
            opcaoC: "Serengeti",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro presidente dos Estados Unidos a ser assassinado no cargo?",
            opcaoA: "Thomas Jefferson",
            opcaoB: "Abraham Lincoln",
            opcaoC: "John F. Kennedy",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a maior estátua do mundo?",
            opcaoA: "Estátua da Liberdade",
            opcaoB: "Estatua de Cristo Redentor",
            opcaoC: "Estatua da Unidade",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem é considerado o 'pai da psicanálise'?",
            opcaoA: "Carl Jung",
            opcaoB: "Sigmund Freud",
            opcaoC: "Alfred Adler",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior lago da África?",
            opcaoA: "Lago Vitória",
            opcaoB: "Lago Tanganica",
            opcaoC: "Lago Niassa",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'O Médico'?",
            opcaoA: "Michael Crichton",
            opcaoB: "Noah Gordon",
            opcaoC: "Robin Cook",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior estádio do mundo?",
            opcaoA: "Estádio Wembley",
            opcaoB: "Estádio Maracanã",
            opcaoC: "Estádio Rungrado 1º de Maio",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro presidente dos Estados Unidos a renunciar ao cargo?",
            opcaoA: "Richard Nixon",
            opcaoB: "Lyndon B. Johnson",
            opcaoC: "Gerald Ford",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a ilha mais populosa do mundo?",
            opcaoA: "Java",
            opcaoB: "Honshu",
            opcaoC: "Taiwan",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro homem a completar uma viagem ao redor do mundo sem parar em nenhum porto?",
            opcaoA: "Ferdinand Magalhães",
            opcaoB: "Sir Francis Drake",
            opcaoC: "Joshua Slocum",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é o segundo idioma mais falado no mundo?",
            opcaoA: "Hindi",
            opcaoB: "Espanhol",
            opcaoC: "Inglês",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem é o autor de 'O Senhor das Moscas'?",
            opcaoA: "William Golding",
            opcaoB: "J.D. Salinger",
            opcaoC: "Ray Bradbury",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a maior muralha do mundo?",
            opcaoA: "Muralha da China",
            opcaoB: "Muralha de Adriano",
            opcaoC: "Muralha de Berlim",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
            opcaoA: "Thomas Jefferson",
            opcaoB: "George Washington",
            opcaoC: "John Adams",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a maior rodovia do mundo?",
            opcaoA: "Trans-Siberiana",
            opcaoB: "Rodovia Pan-Americana",
            opcaoC: "Rodovia Transamazônica",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem é conhecido como o 'pai da filosofia ocidental'?",
            opcaoA: "Sócrates",
            opcaoB: "Platão",
            opcaoC: "Aristóteles",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior grupo étnico do mundo?",
            opcaoA: "Chineses Han",
            opcaoB: "Indianos",
            opcaoC: "Árabes",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro presidente da República do Brasil?",
            opcaoA: "Deodoro da Fonseca",
            opcaoB: "Getúlio Vargas",
            opcaoC: "Juscelino Kubitschek",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior parque nacional dos Estados Unidos?",
            opcaoA: "Yellowstone",
            opcaoB: "Everglades",
            opcaoC: "Yosemite",
            respostaCerta: "A"
        },

        {
            pergunta: "Qual é a capital da França?",
            opcaoA: "Roma",
            opcaoB: "Paris",
            opcaoC: "Madrid",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'Dom Quixote'?",
            opcaoA: "William Shakespeare",
            opcaoB: "Miguel de Cervantes",
            opcaoC: "Victor Hugo",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior planeta do sistema solar?",
            opcaoA: "Terra",
            opcaoB: "Saturno",
            opcaoC: "Júpiter",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem pintou a Mona Lisa?",
            opcaoA: "Vincent van Gogh",
            opcaoB: "Leonardo da Vinci",
            opcaoC: "Pablo Picasso",
            respostaCerta: "B"
        },
        {
            pergunta: "Em que ano o homem pisou na Lua pela primeira vez?",
            opcaoA: "1965",
            opcaoB: "1969",
            opcaoC: "1972",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a língua oficial do Brasil?",
            opcaoA: "Espanhol",
            opcaoB: "Português",
            opcaoC: "Inglês",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
            opcaoA: "Thomas Jefferson",
            opcaoB: "Abraham Lincoln",
            opcaoC: "George Washington",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a moeda oficial do Japão?",
            opcaoA: "Yuan",
            opcaoB: "Iene",
            opcaoC: "Won",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem descobriu a penicilina?",
            opcaoA: "Alexander Fleming",
            opcaoB: "Marie Curie",
            opcaoC: "Louis Pasteur",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior oceano do mundo?",
            opcaoA: "Atlântico",
            opcaoB: "Índico",
            opcaoC: "Pacífico",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem escreveu 'O Pequeno Príncipe'?",
            opcaoA: "Antoine de Saint-Exupéry",
            opcaoB: "J.K. Rowling",
            opcaoC: "Mark Twain",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a fórmula química da água?",
            opcaoA: "CO2",
            opcaoB: "H2O",
            opcaoC: "O2",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro homem a circunavegar a Terra?",
            opcaoA: "Cristóvão Colombo",
            opcaoB: "Ferdinand Magellan",
            opcaoC: "James Cook",
            respostaCerta: "B"
        },
        {
            pergunta: "Em que continente fica o Deserto do Saara?",
            opcaoA: "Ásia",
            opcaoB: "América do Sul",
            opcaoC: "África",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a maior ilha do mundo?",
            opcaoA: "Groenlândia",
            opcaoB: "Madagascar",
            opcaoC: "Nova Guiné",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o autor de 'A Origem das Espécies'?",
            opcaoA: "Albert Einstein",
            opcaoB: "Isaac Newton",
            opcaoC: "Charles Darwin",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é o metal mais abundante na crosta terrestre?",
            opcaoA: "Ferro",
            opcaoB: "Alumínio",
            opcaoC: "Silício",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o país com a maior população do mundo?",
            opcaoA: "Índia",
            opcaoB: "China",
            opcaoC: "Estados Unidos",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem pintou o teto da Capela Sistina?",
            opcaoA: "Michelangelo",
            opcaoB: "Rafael",
            opcaoC: "Donatello",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a capital da Austrália?",
            opcaoA: "Sydney",
            opcaoB: "Melbourne",
            opcaoC: "Canberra",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem escreveu '1984'?",
            opcaoA: "Aldous Huxley",
            opcaoB: "George Orwell",
            opcaoC: "F. Scott Fitzgerald",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o país de origem da banda The Beatles?",
            opcaoA: "Estados Unidos",
            opcaoB: "Austrália",
            opcaoC: "Reino Unido",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é o maior mamífero terrestre?",
            opcaoA: "Elefante africano",
            opcaoB: "Girafa",
            opcaoC: "Hipopótamo",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro ministro britânico durante a Segunda Guerra Mundial?",
            opcaoA: "Winston Churchill",
            opcaoB: "Neville Chamberlain",
            opcaoC: "Margaret Thatcher",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o ponto mais alto da Terra?",
            opcaoA: "Monte Kilimanjaro",
            opcaoB: "Monte Everest",
            opcaoC: "Monte Fuji",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o menor país do mundo em área?",
            opcaoA: "Mônaco",
            opcaoB: "Nauru",
            opcaoC: "Vaticano",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem escreveu 'Odisseia'?",
            opcaoA: "Homero",
            opcaoB: "Sófocles",
            opcaoC: "Aristóteles",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior rio do mundo em volume de água?",
            opcaoA: "Rio Nilo",
            opcaoB: "Rio Amazonas",
            opcaoC: "Rio Yangtzé",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro homem a escalar o Monte Everest?",
            opcaoA: "Edmund Hillary",
            opcaoB: "Reinhold Messner",
            opcaoC: "George Mallory",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a capital do Canadá?",
            opcaoA: "Toronto",
            opcaoB: "Ottawa",
            opcaoC: "Vancouver",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem pintou 'A Noite Estrelada'?",
            opcaoA: "Claude Monet",
            opcaoB: "Vincent van Gogh",
            opcaoC: "Pablo Picasso",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a capital da Itália?",
            opcaoA: "Milão",
            opcaoB: "Veneza",
            opcaoC: "Roma",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro homem a realizar um voo solo transatlântico sem escalas?",
            opcaoA: "Charles Lindbergh",
            opcaoB: "Amelia Earhart",
            opcaoC: "Howard Hughes",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a maior floresta tropical do mundo?",
            opcaoA: "Floresta Amazônica",
            opcaoB: "Floresta do Congo",
            opcaoC: "Floresta da Indonésia",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'Hamlet'?",
            opcaoA: "William Shakespeare",
            opcaoB: "Christopher Marlowe",
            opcaoC: "Geoffrey Chaucer",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a moeda oficial do Reino Unido?",
            opcaoA: "Euro",
            opcaoB: "Dólar",
            opcaoC: "Libra esterlina",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem descobriu a teoria da relatividade?",
            opcaoA: "Isaac Newton",
            opcaoB: "Nikola Tesla",
            opcaoC: "Albert Einstein",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a capital da Rússia?",
            opcaoA: "São Petersburgo",
            opcaoB: "Moscou",
            opcaoC: "Novosibirsk",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'Moby Dick'?",
            opcaoA: "Herman Melville",
            opcaoB: "Mark Twain",
            opcaoC: "Jules Verne",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior deserto do mundo?",
            opcaoA: "Deserto do Saara",
            opcaoB: "Deserto da Arábia",
            opcaoC: "Deserto da Antártida",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é o país mais populoso da África?",
            opcaoA: "Egito",
            opcaoB: "Nigéria",
            opcaoC: "África do Sul",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro homem a voar em um avião?",
            opcaoA: "Orville Wright",
            opcaoB: "Wilbur Wright",
            opcaoC: "Santos Dumont",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a capital do Egito?",
            opcaoA: "Cairo",
            opcaoB: "Alexandria",
            opcaoC: "Luxor",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'O Morro dos Ventos Uivantes'?",
            opcaoA: "Emily Brontë",
            opcaoB: "Charlotte Brontë",
            opcaoC: "Jane Austen",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior lago do mundo?",
            opcaoA: "Lago Superior",
            opcaoB: "Mar Cáspio",
            opcaoC: "Lago Vitória",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem pintou 'Guernica'?",
            opcaoA: "Salvador Dalí",
            opcaoB: "Pablo Picasso",
            opcaoC: "Joan Miró",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a montanha mais alta da África?",
            opcaoA: "Monte Quênia",
            opcaoB: "Monte Kilimanjaro",
            opcaoC: "Monte Rwenzori",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'O Processo'?",
            opcaoA: "Franz Kafka",
            opcaoB: "Albert Camus",
            opcaoC: "Fyodor Dostoevsky",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o rio mais longo da América do Sul?",
            opcaoA: "Rio Orinoco",
            opcaoB: "Rio Amazonas",
            opcaoC: "Rio Paraná",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem descobriu a eletricidade?",
            opcaoA: "Thomas Edison",
            opcaoB: "Benjamin Franklin",
            opcaoC: "Nikola Tesla",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a capital do Japão?",
            opcaoA: "Osaka",
            opcaoB: "Tóquio",
            opcaoC: "Quioto",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'A Metamorfose'?",
            opcaoA: "Franz Kafka",
            opcaoB: "Gabriel García Márquez",
            opcaoC: "Jorge Luis Borges",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a menor ave do mundo?",
            opcaoA: "Beija-flor",
            opcaoB: "Pardal",
            opcaoC: "Canário",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'Orgulho e Preconceito'?",
            opcaoA: "Charlotte Brontë",
            opcaoB: "Jane Austen",
            opcaoC: "Emily Brontë",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o ponto mais baixo da superfície terrestre?",
            opcaoA: "Vale da Morte",
            opcaoB: "Mar Morto",
            opcaoC: "Lago Baikal",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro homem a viajar no espaço?",
            opcaoA: "Yuri Gagarin",
            opcaoB: "Neil Armstrong",
            opcaoC: "John Glenn",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a capital da Índia?",
            opcaoA: "Mumbai",
            opcaoB: "Nova Délhi",
            opcaoC: "Calcutá",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'A Divina Comédia'?",
            opcaoA: "Dante Alighieri",
            opcaoB: "Geoffrey Chaucer",
            opcaoC: "John Milton",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior animal terrestre?",
            opcaoA: "Rinoceronte branco",
            opcaoB: "Elefante africano",
            opcaoC: "Girafa",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'O Velho e o Mar'?",
            opcaoA: "F. Scott Fitzgerald",
            opcaoB: "Ernest Hemingway",
            opcaoC: "John Steinbeck",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a maior cadeia de montanhas do mundo?",
            opcaoA: "Montanhas Rochosas",
            opcaoB: "Alpes",
            opcaoC: "Himalaia",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro homem a nadar os 100 metros livres em menos de 50 segundos?",
            opcaoA: "Michael Phelps",
            opcaoB: "Mark Spitz",
            opcaoC: "Caeleb Dressel",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior estado do Brasil em área?",
            opcaoA: "Amazonas",
            opcaoB: "Pará",
            opcaoC: "Mato Grosso",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'Os Miseráveis'?",
            opcaoA: "Victor Hugo",
            opcaoB: "Alexandre Dumas",
            opcaoC: "Honoré de Balzac",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior país do mundo em área?",
            opcaoA: "Canadá",
            opcaoB: "China",
            opcaoC: "Rússia",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem foi o primeiro presidente do Brasil?",
            opcaoA: "Getúlio Vargas",
            opcaoB: "Deodoro da Fonseca",
            opcaoC: "Juscelino Kubitschek",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a maior ilha da Europa?",
            opcaoA: "Islândia",
            opcaoB: "Grã-Bretanha",
            opcaoC: "Sicília",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'O Retrato de Dorian Gray'?",
            opcaoA: "Oscar Wilde",
            opcaoB: "F. Scott Fitzgerald",
            opcaoC: "Ernest Hemingway",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior estado dos EUA em área?",
            opcaoA: "Califórnia",
            opcaoB: "Texas",
            opcaoC: "Alasca",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem escreveu 'Anna Karenina'?",
            opcaoA: "Fyodor Dostoevsky",
            opcaoB: "Leo Tolstoy",
            opcaoC: "Anton Chekhov",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a maior cidade do mundo em população?",
            opcaoA: "Nova York",
            opcaoB: "Tóquio",
            opcaoC: "Xangai",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro homem a andar na Lua?",
            opcaoA: "Buzz Aldrin",
            opcaoB: "Michael Collins",
            opcaoC: "Neil Armstrong",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é a maior cordilheira da América do Sul?",
            opcaoA: "Andes",
            opcaoB: "Apalaches",
            opcaoC: "Montanhas Rochosas",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'Crime e Castigo'?",
            opcaoA: "Fyodor Dostoevsky",
            opcaoB: "Leo Tolstoy",
            opcaoC: "Anton Chekhov",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o menor oceano do mundo?",
            opcaoA: "Atlântico",
            opcaoB: "Ártico",
            opcaoC: "Índico",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro homem a escalar o Monte Everest sem oxigênio suplementar?",
            opcaoA: "Edmund Hillary",
            opcaoB: "Reinhold Messner",
            opcaoC: "Tenzing Norgay",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é a maior floresta de coníferas do mundo?",
            opcaoA: "Taiga",
            opcaoB: "Floresta Boreal",
            opcaoC: "Floresta Temperada",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'O Senhor dos Anéis'?",
            opcaoA: "J.K. Rowling",
            opcaoB: "J.R.R. Tolkien",
            opcaoC: "C.S. Lewis",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o menor país da América do Sul?",
            opcaoA: "Suriname",
            opcaoB: "Uruguai",
            opcaoC: "Guiana",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'A Revolução dos Bichos'?",
            opcaoA: "George Orwell",
            opcaoB: "Aldous Huxley",
            opcaoC: "Ray Bradbury",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a montanha mais alta da Europa?",
            opcaoA: "Mont Blanc",
            opcaoB: "Monte Elbrus",
            opcaoC: "Monte Rosa",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro homem a chegar ao Polo Sul?",
            opcaoA: "Roald Amundsen",
            opcaoB: "Robert Falcon Scott",
            opcaoC: "Ernest Shackleton",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é a capital da Argentina?",
            opcaoA: "Rosário",
            opcaoB: "Mendoza",
            opcaoC: "Buenos Aires",
            respostaCerta: "C"
        },
        {
            pergunta: "Quem escreveu 'A Montanha Mágica'?",
            opcaoA: "Thomas Mann",
            opcaoB: "Hermann Hesse",
            opcaoC: "Franz Kafka",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o maior arquipélago do mundo?",
            opcaoA: "Indonésia",
            opcaoB: "Filipinas",
            opcaoC: "Malásia",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem foi o primeiro homem a nadar os 200 metros borboleta em menos de 2 minutos?",
            opcaoA: "Michael Phelps",
            opcaoB: "Mark Spitz",
            opcaoC: "Ian Thorpe",
            respostaCerta: "A"
        },
        {
            pergunta: "Qual é o menor estado do Brasil em área?",
            opcaoA: "Sergipe",
            opcaoB: "Alagoas",
            opcaoC: "Rio de Janeiro",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'O Grande Gatsby'?",
            opcaoA: "Ernest Hemingway",
            opcaoB: "F. Scott Fitzgerald",
            opcaoC: "John Steinbeck",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior país da América do Sul?",
            opcaoA: "Brasil",
            opcaoB: "Argentina",
            opcaoC: "Colômbia",
            respostaCerta: "A"
        },
        {
            pergunta: "Quem escreveu 'Guerra e Paz'?",
            opcaoA: "Fyodor Dostoevsky",
            opcaoB: "Leo Tolstoy",
            opcaoC: "Anton Chekhov",
            respostaCerta: "B"
        },
        {
            pergunta: "Qual é o maior estado da Índia em área?",
            opcaoA: "Maharashtra",
            opcaoB: "Rajasthan",
            opcaoC: "Uttar Pradesh",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem foi o primeiro homem a realizar uma caminhada espacial?",
            opcaoA: "Neil Armstrong",
            opcaoB: "Yuri Gagarin",
            opcaoC: "Alexei Leonov",
            respostaCerta: "C"
        },
        {
            pergunta: "Qual é o maior oceano do mundo?",
            opcaoA: "Atlântico",
            opcaoB: "Pacífico",
            opcaoC: "Índico",
            respostaCerta: "B"
        },
        {
            pergunta: "Quem escreveu 'O Sol é Para Todos'?",
            opcaoA: "Harper Lee",
            opcaoB: "J.D. Salinger",
            opcaoC: "Mark Twain",
            respostaCerta: "A"
        }
    ];
      
    const apresentacaoDaPergunta = document.querySelector("#apresentacaoDaPergunta")
    const opcaoA = document.querySelector("#opcaoA")
    const opcaoB = document.querySelector("#opcaoB")
    const opcaoC = document.querySelector("#opcaoC") 
    const botaoJogar = document.querySelector("#botaoJogar")
    const primeiraTela = document.querySelector("#primeiraTela")
    const segundaTela = document.querySelector("#segundaTela")
    const boataoVoltar = document.querySelector("#boataoVoltar")

    botaoJogar.addEventListener("click", () =>
    {
        primeiraTela.style.display = 'none'
        primeiraTela.style.animation = 'desaparecer 0.7s ease-in-out'
        primeiraTela.style.opacity = 1
        segundaTela.style.display = 'flex'
        segundaTela.style.animation = 'aparecer 0.7s ease'
        segundaTela.style.opacity = 1   
        
        const indice = Math.round(Math.random() * (perguntas.length - 1)) + 1
        apresentacaoDaPergunta.innerHTML = perguntas[indice].pergunta
        opcaoA.innerHTML = perguntas[indice].opcaoA
        opcaoB.innerHTML = perguntas[indice].opcaoB
        opcaoC.innerHTML = perguntas[indice].opcaoC
    })

    boataoVoltar.addEventListener("click", () =>
    {
        segundaTela.style.display = 'none'
        segundaTela.style.animation = 'desaparecer 0.7s ease'
        segundaTela.style.opacity = 0 
        primeiraTela.style.display = 'flex'
        primeiraTela.style.animation = 'aparecer 0.7s ease-in-out'
        primeiraTela.style.opacity = 1
    })

    
})