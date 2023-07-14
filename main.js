function generateQuote() {
    var AuthorName = ["“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "“Be yourself; everyone else is already taken.”",
        "“So many books, so little time.”",
        "“Be the change that you wish to see in the world.”",
        "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        "“A room without books is like a body without a soul.”"
    ]
    var AuthorText = ["― Albert Einstein",
        "― Oscar Wilde",
        "― Frank Zappa",
        "― Mahatma Gandhi",
        "― Maya Angelou",
        "― Marcus Tullius Cicero"

    ]
    var photos = ["asset/img/Einstein.jpg",
    "asset/img/Oscar Wilde.jpg",
    "asset/img/Frank Zappa.jpg",
    "asset/img/Mahatma Gandhi.jpg",
    "asset/img/Maya Angelou.jpg",
    "asset/img/Marcus Tullius Cicero.jpg"

]

    var num = Math.floor(Math.random() * AuthorName.length)
    document.getElementById('quoteOutput').innerHTML = AuthorName[num];
    document.getElementById('authorOutput').innerHTML = AuthorText[num];
    document.getElementById('imgees').src = photos[num];

}





