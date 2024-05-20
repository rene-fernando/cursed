function generateZalgo(text) {
    const zalgoChars = {
        up: ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '̽', 'ͣ', 'ͭ', 'ͫ', 'ͤ', 'ͪ', 'ͦ', 'ͨ', 'ͩ', '͋', '͌', '̾', '͛', '͆', '̚'],
        down: ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'],
        mid: ['̕', '̛', '̀', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚']
    };

    const randomChar = (chars) => chars[Math.floor(Math.random() * chars.length)];

    let result = '';
    for (const char of text) {
        result += char;
        for (let i = 0; i < Math.floor(Math.random() * 13); i++) {
            const direction = ['up', 'down', 'mid'][Math.floor(Math.random() * 3)];
            result += randomChar(zalgoChars[direction]);
        }
    }
    return result;
}

function generateInterval() {
    setInterval(() => {
        document.getElementById('result').textContent = generateZalgo('Yes');
    }, 200);
}

function ohno() {
    let maxAppends = 1313;
    let count = 0;
    const bottomText = document.getElementById('bottomText');
    const intervalId = setInterval(() => {
        bottomText.textContent += 'oh no ';
        count++;
        if (count >= maxAppends) {
            clearInterval(intervalId);
            bottomText.textContent = '';
            ohno();
        }
    }, 50);
}


function checkFridayThe13th() {
    const today = new Date();
    const isFridayThe13th = today.getDay() === 5 && today.getDate() === 13;
    const resultText = isFridayThe13th ? generateInterval() : 'No';
    const imageUrl = isFridayThe13th ? 'uncanny.png' : 'happy.png';
    const additionalMessage = isFridayThe13th ? ohno() : '';

    document.getElementById('result').textContent = resultText;
    document.getElementById('image').src = imageUrl;
    document.getElementById('bottomText').textContent = additionalMessage;
    if (isFridayThe13th) {
        document.body.style.backgroundColor = 'red';
        document.getElementById('result').style.color = 'white';
        document.getElementById('result').style.fontFamily = 'Jacquard 24';
        document.getElementById('why').style.color = 'white';
        document.getElementById('why').textContent = 'escape';
    }
    
}

function checkFridayThe17th() {
    const url = 'https://en.wikipedia.org/wiki/Heptadecaphobia#Friday_the_17th';
    const today = new Date();
    const isFridayThe17th = today.getDay() == 5 && today.getDate() == 17;
    let additionalMessage = '';

    if (isFridayThe17th) {
        additionalMessage = 'unless you\'re <a href="' + url + '" target="_blank">Italian</a>';
    }

    document.getElementById('italianText').innerHTML = additionalMessage;
}

function getNextFridayThe13th() {
    let date = new Date();
    date.setDate(13);

    while (date.getDay() !== 5) {
        date.setMonth(date.getMonth() + 1);
    }
    
    return date;
}

function updateCountdown() {
    const today = new Date();
    const nextFridayThe13th = getNextFridayThe13th();
    const diffTime = Math.abs(nextFridayThe13th - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    document.getElementById('countdown').textContent = `Come back in ${diffDays} days`;
}

function showCountdown() {
    document.getElementById('countdown').style.visibility = 'visible';
}

function hideCountdown() {
    document.getElementById('countdown').style.visibility = 'hidden';
}

updateCountdown();
checkFridayThe13th();
checkFridayThe17th();