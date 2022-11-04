var cards = document.querySelectorAll('.blur-card');

bluring()

function bluring() {
    for (let i = 0; i < cards.length; i++) {
        cards.item(i).addEventListener('mouseover', (event) => {
            for (let i = 0; i < cards.length; i++) {
                if (cards.item(i) !== event.target){
                    cards.item(i).classList.add("blur");
                }
            }
        })
        cards.item(i).addEventListener('mouseout', (event) => {
            for (let i = 0; i < cards.length; i++) {
                if (cards.item(i)!== event.target){
                    cards.item(i).classList.remove("blur");
                }
            }
        })
    }
}

var cards_r = document.querySelectorAll('.third-glass-gallery > div');
opacity()
function opacity() {
    for (let i = 0; i < cards_r.length; i++) {
        cards_r.item(i).addEventListener('mouseover', (event) => {
            for (let i = 0; i < cards_r.length; i++) {
                if (cards_r.item(i) !== event.target){
                    cards_r.item(i).classList.add("opac");
                }
            }
        })
        cards_r.item(i).addEventListener('mouseout', (event) => {
            for (let i = 0; i < cards_r.length; i++) {
                if (cards_r.item(i)!== event.target){
                    cards_r.item(i).classList.remove("opac");
                }
            }
        })
    }
}