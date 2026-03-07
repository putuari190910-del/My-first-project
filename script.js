const questions = [
        {
                question: 'Apa benda yang akan semakin basah saat ia sedang mengeringkan sesuatu?',
                answer: [
                        'Spons',
                        'Handuk',
                        'Pel-Pelan'
                ],
                audio: null,
                isAudioVisible: false,
                correctAns: 1,
                questionLength: '1/5'
        },
        {
                question: 'Sebuah sapi menghadap ke arah Barat Laut. Ke arah manakah ekornya menghadap?',
                answer: [
                        'Tenggara',
                        'Timur laut',
                        'Ke bawah'
                ],
                audio: null,
                isAudioVisible: false,
                correctAns: 2,
                questionLength: '2/5'
        },
        {
                question: 'Jika 1 = 0, 8 = 2, dan 90 = 1, maka berapakah nilai dari 88?',
                answer: [
                        '4',
                        '16',
                        '0'
                ],
                audio: null,
                isAudioVisible: false,
                correctAns: 0,
                questionLength: '3/5'
        },
        {
                question: 'Ada seseorang yang lahir di Arab, besar di Arab, dan tinggal di Arab, tapi dia sama sekali tidak bisa bahasa Arab. Siapakah dia?',
                answer: [
                        'Bayi',
                        'Turis',
                        'Unta'
                ],
                audio: 'test.mp3',
                isAudioVisible: true,
                correctAns: 2,
                questionLength: '4/5'
        },
        {
                question: 'Jika kamu memegang 3 apel dan 4 jeruk di tangan kanan, lalu 4 apel dan 3 jeruk di tangan kiri, apa yang kamu miliki?',
                answer: [
                        'Salad buah yang banyak',
                        'Tangan yang sangat besar',
                        'Toko buah sendiri'
                ],
                audio: null,
                isAudioVisible: false,
                correctAns: 1,
                questionLength: '5/5'
        }
];

let now = 0;

function initQuestions() {
        const container = document.getElementById('question');
        const questionCount = document.getElementById('questionCount');
        const currentQuestion = questions[now];
        
        questionCount.textContent = currentQuestion.questionLength;
        container.innerHTML = `
        <p class="questionMark">${currentQuestion.question}</p>
        <div class="answerContainer">
                <div onclick="choice(0)" class="ans a">${currentQuestion.answer[0]}</div>
                <div onclick="choice(1)" class="ans b">${currentQuestion.answer[1]}</div>
                <div onclick="choice(2)" class="ans c">${currentQuestion.answer[2]}</div>
        </div>
        `;
}

function choice(index) {
        const currentQuestion = questions[now];
        const alertEl = document.getElementById('alert');
        
        if(currentQuestion.correctAns === index) {
                //alert('benar!');
                
                alertEl.classList.remove('hide');
                alertEl.innerHTML = `
                <div class="AlertContainer">
                        <h2>Benar!</h2>
                        <button onclick="updateQuestion()">Selanjutnya</button>
                </div>
                `;
                
                if(now < questions.length) now++;
                initQuestions();
        } else {
                //alert('salah!');
                initQuestions();
        }
}

initQuestions();