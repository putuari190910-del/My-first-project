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
                questionLength: '1/5',
                desc: 'Kenapa jawabannya B? Karena ia menyerap air dari benda yang dikeringkan',
                password: 'p@55vv0rd'
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
                questionLength: '2/6',
                desc: 'Pasti bingung yaa? Ekor sapi selalu menghadap ke bawah, terlepas dari arah badannya',
                password: '@r1y'
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
                questionLength: '3/6',
                desc: 'Kamu nggak nyadar polanya?',
                password: 'qu|%z1t!'
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
                questionLength: '4/6',
                desc: 'Unta memang tinggal di Arab tapi tidak bisa bicara',
                password: 'pyR@AA1d'
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
                questionLength: '5/6',
                desc: 'Secara logika, tangan manusia normal tidak bisa menggenggam buah sebanyak itu sekaligus',
                password: 'l0Ngh@Nd'
        },
        {
                question: `
                Suara apa yang kamu dengar?
                <button onclick="document.getElementById('audio').play()">Putar suara</button>\n<span style="opacity:0.4;margin:0">Perbesar suara hpmu agar terdengar lebih jelas.</span>
                <audio style="display:none;" id="audio" controls>
                        <source src="./test.mp3" type="audio/mpeg">
                </audio>
                `,
                answer: [
                        'System off',
                        'Sittemowf',
                        'See them wolf'
                ],
                audio: null,
                isAudioVisible: false,
                correctAns: 0,
                questionLength: '6/6',
                desc: 'Apakah telingamu bermasalah?',
                password: '5Y1sT3m'
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
        
        if(now===5) document.getElementById('audio').volume = 0.05;
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
                        <p>${currentQuestion.desc}</p>
                        <button onclick="updateQuestion('correct')">Selanjutnya</button>
                </div>
                `;
        } else {
                //alert('salah!');
                alertEl.classList.remove('hide');
                alertEl.innerHTML = `
                <div class="AlertContainer incorrect">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><g transform="matrix(1, 0, 0, 1, 50, 50)"><rect x="-35" y="-35" width="70" height="70" rx="45" ry="45" style="fill:#FFFFFF00;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:10.43;" /><path d="M-14.84,-5.93 C-17.18,-8.27 -17.18,-12.07 -14.84,-14.42 L-14.42,-14.84 C-12.07,-17.18 -8.27,-17.18 -5.93,-14.84 L14.84,5.93 C17.18,8.27 17.18,12.07 14.84,14.42 L14.42,14.84 C12.07,17.18 8.27,17.18 5.93,14.84 L-14.84,-5.93 ZM5.93,-14.84 C8.27,-17.18 12.07,-17.18 14.42,-14.84 L14.84,-14.42 C17.18,-12.07 17.18,-8.27 14.84,-5.93 L-5.93,14.84 C-8.27,17.18 -12.07,17.18 -14.42,14.84 L-14.84,14.42 C-17.18,12.07 -17.18,8.27 -14.84,5.93 L5.93,-14.84 Z" style="fill:currentColor;" /></g></svg>
                        <h2>Salah!</h2>
                        <button onclick="updateQuestion('incorrect')">Coba lagi</button>
                </div>`;
        }
}

function updateQuestion(inp) {
        const alertEl = document.getElementById('alert');
        alertEl.classList.add('hide');
        
        if(inp === 'correct') {
                if(now < (questions.length - 1)) {
                        now++;
                        initQuestions();
                } else {
                        document.getElementById('endWindow').classList.remove('hide');
                        document.getElementById('audioJP').play();
                }
        } else {
                initQuestions();
        }
}

function closeWw() {
        initQuestions();
        document.getElementById('welcomeWindow').style.display = 'none';
        document.getElementById('questionCard').style.animation = 'popOutFade 0.5s';
        document.getElementById('mainHeader').style.animation = 'popOutFade 0.5s';
}

function openClue() {
        const clueEl = document.getElementById('clue');
        clueEl.classList.remove('hide');
        clueEl.innerHTML = `
                <div class="AlertContainer">
                        <h2>Password</h2>
                        <p>Masukan password untuk mengakses clue.</p>
                        <input id="passwordInp" placeholder="Password...">
                        <button class="submit" onclick="inputPassword()">Submit</button>
                        <button onclick="closeClue()">Batal</button>
                </div>`;
} function closeClue() { document.getElementById('clue').classList.add('hide'); }

function inputPassword() {
        const clueEl = document.getElementById('clue');
        const inp = document.getElementById('passwordInp');
        const currentQuestion = questions[now];
        const option = ['A.', 'B.', 'C.'];
        const clues = currentQuestion.correctAns;
        if(inp.value===currentQuestion.password) {
                //alert('Benar!');
                
                clueEl.innerHTML = `
                <div class="AlertContainer">
                        <h2>Clue</h2>
                        <p>Jawabannya adalah: <strong>${option[clues]} ${currentQuestion.answer[clues]}</strong>.</p>
                        <button onclick="closeClue()">Oke</button>
                </div>`;
        } else {
                //alert('salah');
                clueEl.innerHTML = `
                <div class="AlertContainer">
                        <h2>Password</h2>
                        <p>Masukan password untuk mengakses clue.</p>
                        <input id="passwordInp" placeholder="Password salah!">
                        <button class="submit" onclick="inputPassword()">Submit</button>
                        <button onclick="closeClue()">Batal</button>
                </div>`;
        }
}