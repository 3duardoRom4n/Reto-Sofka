const data2 = [
    {
        question:"¿Cual de las siguientes marcas de carro es Norteamericana?",
        choices: ["Kia","Suzuki","Ford","Hyundai"],
        answer: "Ford",
    },
    {
        question:"¿Quien fué el director de la afamada película Titanic?",
        choices: ["Steven Spielberg","James Cameron","Los Hermanos Russo","Dick Wolf"],
        answer: "James Cameron",
    },    
    {
        question:"¿Cual de los siguientes objetos no encontramos en una escuela?",
        choices: ["Lápiz","Borrador","Avión","Sacapuntas"],
        answer: "Avión",
    },
    {
        question:"¿Cuantos dias tiene un año?",
        choices: ["364","31","28","365"],
        answer: "365",
    },
    {
        question:"¿A quien se le conocía como el Rey del Pop?",
        choices: ["Michael Jackson","Diego Maradona","Hector Lavoe","Maluma"],
        answer: "Michael Jackson",
    },
    {
        question:"¿Cuanto es 1+1?",
        choices: ["5","3","2","8"],
        answer: "2",
    },
    {
        question:"¿Quien fué Leonardo Da Vinci?",
        choices: ["Un cantante","Un pintor","Un nadador Olimpico","Un Futbolista"],
        answer: "Un pintor",
    },    
    {
        question:"¿Cual de los siguientes objetos encontramos en un baño?",
        choices: ["Abanico","Cama","Jabón","Nevera"],
        answer: "Jabón",
    },
    {
        question:"¿Cuantos horas tiene un dia?",
        choices: ["31","35","24","22"],
        answer: "24",
    },
    {
        question:"¿Quién descubrió América?",
        choices: ["Américo Vespucio","Simón Bolivar","Cristobal Colón","J. Balvin"],
        answer: "Cristobal Colón",
    },
    
]

export const data = data2.sort(() => Math.random()-0.5)
