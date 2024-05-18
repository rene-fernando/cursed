function checkFridayThe13th() {
    const today = new Date();
    const isFridayThe13th = today.getDay() === 5 && today.getDate() === 13;
    const resultText = isFridayThe13th ? 'Yes' : 'No';
    const imageUrl = isFridayThe13th ? 'spooky.png' : 'happy.png';
    const additionalMessage = isFridayThe13th ? 'Watch out for black cats and ladders!' : '';

    document.getElementById('result').textContent = resultText;
    document.getElementById('image').src = imageUrl;
    document.getElementById('bottomText').textContent = additionalMessage;
}

function checkFridayThe17th() {
    const url = 'https://en.wikipedia.org/wiki/Heptadecaphobia#Friday_the_17th';
    const today = new Date();
    const isFridayThe17th = today.getDay() == 6 && today.getDate() == 18;
    let additionalMessage = ''; 

    if (isFridayThe17th) {
        additionalMessage = 'unless you\'re Italian';
    }
    
    document.getElementById('italianText').textContent = additionalMessage;
}

checkFridayThe13th();
checkFridayThe17th();