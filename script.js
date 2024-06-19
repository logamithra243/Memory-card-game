const griddisplay = document.querySelector('#grid');
const resultdisplay = document.querySelector("#score");
const movesDisplay = document.querySelector("#moves");
const newGameButton = document.querySelector("#newGame");
const timerDisplay = document.querySelector("#timer");
const cardImages = [
    { name: "jerry", img: "image/Jerry-Mouse.jpg" },
    { name: "micky", img: "image/mi.jpeg" },
    { name: "panda", img: "image/panda.jpeg" },
    { name: "pig", img: "image/pig.jpeg" },
    { name: "poki", img: "image/poki.png" },
    { name: "tom", img: "image/tom.jpeg" },
    { name: "jerry", img: "image/Jerry-Mouse.jpg" },
    { name: "micky", img: "image/mi.jpeg" },
    { name: "panda", img: "image/panda.jpeg" },
    { name: "pig", img: "image/pig.jpeg" },
    { name: "poki", img: "image/poki.png" },
    { name: "tom", img: "image/tom.jpeg" }
];
    
    card_chosen = [];
    card_chosen_id = [];
    let cardsWon = [];
    let moves = 0;
    let timer;
    let seconds = 0;

    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            timerDisplay.textContent = formatTime(seconds);
        }, 1000);
    }
    
    function stopTimer() {
        clearInterval(timer);
    }
    
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

     
    cardImages.sort(() => 0.5 - Math.random())

    shuffle();


    function shuffle() {
        griddisplay.innerHTML = '';
   
        card_chosen = [];
        card_chosen_id = [];
        moves = 0;
        movesDisplay.innerHTML = moves;
        cardsWon = [];
        resultdisplay.innerHTML = cardsWon.length;
        for (let i = 0; i<cardImages.length; i++) 
        {
            const card = document.createElement('img');
            card.setAttribute('src','image/bg.jpeg');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipcard);
            griddisplay.appendChild(card);
    

        }
        seconds = 0;
        timerDisplay.textContent = formatTime(seconds);
        stopTimer();

        console.log(cardImages);

    }

    function flipcard(){
                const card_id = this.getAttribute("data-id");
                if (card_chosen_id.includes(card_id) || card_chosen.length === 2) return;
                this.setAttribute('src',cardImages[card_id].img);
                card_chosen_id.push(card_id);
                card_chosen.push(cardImages[card_id].name);


                if (card_chosen.length === 2) {
                    moves++;
                    movesDisplay.innerHTML = moves;
                    if (moves === 1) {
                        startTimer();
                    }
                    setTimeout(checkmatch, 500);
                }
            }
                cardsWon = []
    
                function checkmatch(){

                    const cards = document.querySelectorAll('img');


                    if(card_chosen[0] == card_chosen[1])

                        {

                            alert("You have found a match");
                            cards[card_chosen_id[0]].setAttribute('src','image/done.jpg');
                            cards[card_chosen_id[1]].setAttribute('src','image/done.jpg');
                            cards[card_chosen_id[0]].removeEventListener('click',flipcard);
                            cards[card_chosen_id[1]].removeEventListener('click',flipcard);
                            cardsWon.push(card_chosen);

                            resultdisplay.innerHTML = cardsWon.length;
                        }
                        else{
                            cards[card_chosen_id[0]].setAttribute('src','image/bg.jpeg')
                            cards[card_chosen_id[1]].setAttribute('src','image/bg.jpeg')
                        }
                        card_chosen = [];
                        card_chosen_id = [];
                        if(cardsWon.length == cardImages.length/2)
                            {
                                stopTimer();
                                resultdisplay.innerHTML = "Cogradulations.. You have successfully completed the game"
                            }

                        }

                        newGameButton.addEventListener('click', shuffle);

                        shuffle();
                    
      
