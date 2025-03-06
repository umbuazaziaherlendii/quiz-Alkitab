const questions = [
    {
      question: "Siapakah yang memimpin bangsa Israel keluar dari Mesir dan membelah Laut Merah?",
      answers: ["Musa", "Elia", "Daud", "Salomo"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Musa"
    },
    {
      question: "Siapakah yang membunuh Goliat dengan menggunakan batu dan umban?",
      answers: ["Daud", "Saul", "Elia", "Yosua"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Daud"
    },
    {
      question: "Di mana Yesus dilahirkan dan mengapa tempat itu penting?",
      answers: ["Betlehem, karena nubuat", "Yerusalem, karena kota raja", "Nazaret, karena kediaman Yesus", "Jericho, karena tempat tinggal Zakeus"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Betlehem"
    },
    {
      question: "Siapakah rasul yang menulis sebagian besar surat dalam Perjanjian Baru?",
      answers: ["Paulus", "Petrus", "Yohanes", "Jakobus"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Paulus"
    },
    {
      question: "Apa nama kitab terakhir dalam Perjanjian Lama?",
      answers: ["Maleakhi", "Zakharia", "Yeremia", "Yesaya"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Maleakhi"
    },
    {
      question: "Siapakah nabi yang dimakan oleh ikan besar setelah mencoba melarikan diri dari Tuhan?",
      answers: ["Yunus", "Elia", "Yesaya", "Yeremia"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Yona"
    },
    {
      question: "Berapa lama durasi banjir besar pada zaman Nuh, yang melanda seluruh dunia?",
      answers: ["40 hari 40 malam", "7 hari 7 malam", "12 bulan", "6 bulan"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Banjir"
    },
    {
      question: "Siapakah yang disebut sebagai 'Air KeHidupan' dalam Injil Yohanes?",
      answers: ["Yesus", "Salomo", "Musa", "Elia"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Yesus"
    },
    {
      question: "Apa nama bangsa yang dibawa ke Babel sebagai tawanan setelah kehancuran Yerusalem?",
      answers: ["Bangsa Yahudi", "Bangsa Israel", "Bangsa Mesir", "Bangsa Palestina"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Babel"
    },
    {
      question: "Siapakah yang mengkhianati Yesus dengan menjual Yesus?",
      answers: ["Yudas Iskariot", "Petrus", "Bartholomeus", "Thomas"],
      correct: 0,
      image: "https://via.placeholder.com/300x200.png?text=Yudas"
    }
  ];
  
  const bibleVerses = [
    "Tuhan adalah Gembalaku, takkan kekurangan aku. (Mazmur 23:1)",
    "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku. (Filipi 4:13)",
    "Kasih adalah sabar, kasih adalah murah hati. (1 Korintus 13:4)",
    "Karena Tuhan memberi hikmat, dari mulut-Nya datang pengetahuan dan kepandaian. (Amsal 2:6)",
    "Jika kamu meminta sesuatu kepada-Ku dalam nama-Ku, Aku akan melakukannya. (Yohanes 14:14)"
  ];
  
  let currentQuestionIndex = 0;
  
  function shuffleAnswers() {
    const question = questions[currentQuestionIndex];
    const answers = [...question.answers];
    const correctAnswer = question.correct;
    
    // Mengacak urutan jawaban
    answers.sort(() => Math.random() - 0.5);
    
    // Menemukan jawaban yang benar setelah pengacakan
    question.correct = answers.indexOf(question.answers[correctAnswer]);
    
    // Memperbarui urutan jawaban yang sudah diacak
    question.answers = answers;
  }
  
  function displayQuestion() {
    shuffleAnswers();
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("answer1").innerText = question.answers[0];
    document.getElementById("answer2").innerText = question.answers[1];
    document.getElementById("answer3").innerText = question.answers[2];
    document.getElementById("answer4").innerText = question.answers[3];
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
      document.getElementById("next-btn").style.display = "none";
      document.getElementById("result").style.display = "none";
    } else {
      document.getElementById("question-container").style.display = "none";
      document.getElementById("next-button-container").style.display = "none";
  
      // Menampilkan pesan ayat Alkitab setelah quiz selesai
      const randomIndex = Math.floor(Math.random() * bibleVerses.length);
      document.getElementById("final-message").innerText = bibleVerses[randomIndex];
      document.getElementById("final-message").style.display = "block";
    }
  }
  
  function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
  
    const resultElement = document.getElementById("result");
    if (isCorrect) {
      resultElement.innerHTML = `<span>Yeyy, kamu benar! 😊</span>`;
    } else {
      resultElement.innerHTML = `<span>Yahh, jawabannya salah! 😞</span>`;
    }
    resultElement.style.display = "block";
    document.getElementById("next-btn").style.display = "inline-block";
  }
  
  document.getElementById("answer1").addEventListener("click", () => checkAnswer(0));
  document.getElementById("answer2").addEventListener("click", () => checkAnswer(1));
  document.getElementById("answer3").addEventListener("click", () => checkAnswer(2));
  document.getElementById("answer4").addEventListener("click", () => checkAnswer(3));
  
  displayQuestion();
  