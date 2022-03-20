const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
const info = document.querySelector('.info');
const scorecard = document.querySelector('.scorecard')
let newWord = '';
let randomWord = '';
let play = false;
let score = 0;



let swords = ['python', 'java', 'django', 'ruby', 'perl', 'html', 'reactjs', 'angularjs', 'expressjs', 'oracle', 'mongodb', 'datastructure', 'swift', 'android', 'c#', 'javascript', 'flutter', 'firebase', 'wordpress'];
// console.log(swords.length)
const createWords = () => {
    let random = Math.floor(Math.random() * swords.length);
    let tempword = swords[random];
    // console.log(tempword.split(""));
    return tempword;
}

const scrambleWord = (arr) => {

    for (let i = arr.length - 1; i >= 0; i--) {
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random() * (i + 1));
        // console.log(j);
        // console.log(i);

        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr;
}



btn.addEventListener('click', function() {

    if (!play) {
        play = true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        newWord = createWords();
        randomWord = scrambleWord(newWord.split("")).join("");
        // console.log(randomWord.join(""));
        msg.innerHTML = `Guess the word : ${randomWord}`;
    } else {
        let tempWord = guess.value;
        if (tempWord === newWord) {
            score = score + 1;
            play = false;
            guess.classList.toggle('hidden');
            guess.value = "";
            scorecard.innerHTML = `Score : ${score}`;


        } else {
            msg.innerHTML = `Sorry :(it 's incorrect , please try again <br> <br>
            ${randomWord} `;
            guess.value = "";

        }

    }
})