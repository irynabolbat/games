import giraffe from "./img/giraffe.jpeg"
import parrots from "./img/parrots.jpeg"
import peacock from "./img/peacock.jpeg"
import raccoon from "./img/raccoon.jpeg"
import redPanda from "./img/red-panda.jpeg"
import tiger from "./img/tiger.jpeg"
import hedgehog from "./img/hedgehog.jpeg"
import squirrel from "./img/squirrel.jpeg"
import owl from "./img/owl.jpeg"
import whiteTigers from "./img/white_tigers.jpeg"
import elephant from "./img/elephant.jpeg"
import rhinoceros from "./img/rhinoceros.png"

const randomCards = [
    {
        id: 1,
        name: "giraffe",
        image: giraffe,
        status: ""
    },
    {
        id: 2,
        name: "parrots",
        image: parrots,
        status: ""
    },
    {
        id: 3,
        name: "peacock",
        image: peacock,
        status: ""
    },
    {
        id: 4,
        name: "raccoon",
        image: raccoon,
        status: ""
    },
    {
        id: 5,
        name: "redPanda",
        image: redPanda,
        status: ""
    },
    {
        id: 6,
        name: "tiger",
        image: tiger,
        status: ""
    },
    {
        id: 7,
        name: "hedgehog",
        image: hedgehog,
        status: ""
    },
    {
        id: 8,
        name: "squirrel",
        image: squirrel,
        status: ""
    },
    {
        id: 9,
        name: "owl",
        image: owl,
        status: ""
    },
    {
        id: 10,
        name: "whiteTigers",
        image: whiteTigers,
        status: ""
    },
    {
        id: 11,
        name: "elephant",
        image: elephant,
        status: ""
    },
    {
        id: 12,
        name: "rhinoceros",
        image: rhinoceros,
        status: ""
    }
].sort(() => Math.random() - .5)

export const showCards = (numberOfCards) => {
    let cards = []
    for (let i = 0; i < numberOfCards; i++) {
        cards.push(randomCards[i])
        cards.push(JSON.parse(JSON.stringify(randomCards[i])))
    }
    return cards.sort(() => Math.random() - .5)
}

