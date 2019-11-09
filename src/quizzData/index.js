const qBank = [
  {
    question:
    "which coutry hosted the 2019 African cup of Nations?   ",
    answers: ["Kenya", "Zimbabwe", "Egypt", "Ghana"],
    correct: "Egypt",
    questionId: "01"
  },
  {
    question:
    "How many teams participated in the 2019 African cup of Nations?",
    answers: ["21", "22", "26", "24"],
    correct: "24",
    questionId: "02"
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: ["HTC", "Oculus", "Google", "Razer"],
    correct: "HTC",
    questionId: "03"
  },
  {
    question: "which team won 4th place in the 2019 African cup of Nations?",
    answers: [
      "Gambia",
      "Tunisia",
      "South Africa",
      "Ghana"
    ],
    correct: "Tunisa",
    questionId: "04"
  },
  {
    question: "which coutry hosted the 2019 African cup of Nations?",
    answers: ["Kenya", "Zimbabwe", "Egypt", "Ghana"],
    correct: "Kenya",
    questionId: "05"
  },
  {
    question:
      "who was the top scorer in the 2019 African cup of Nations?",
    answers: [
      "Odion ighalo",
      "Mohammed salah",
      "Rais M'Bolhi",
      "Donnald Trump"
    ],
    correct: "Odion ighalo",
    questionId: "06"
  },
  {
    question:
      "who got the award for best player in  the 2019 African cup of Nations?",
    answers: ["Mikel Obi", "Ismael Bennacer", "Farouk Johnson", "Kieta lambert"],
    correct: "Ismael Bennacer",
    questionId: "07"
  },
  {
    question: "which won the award for the best young player in the 2019 African cup of Nations?",
    answers: ["kreplin Diatta", "chukwueze Andrew ", "Effiong samuel", "Victor smith"],
    correct: "kreplin Diatta",
    questionId: "08"
  },
  {
    question:
      "How much was the final position prize money in the 2019 African cup of Nations?",
    answers: ["$4.5million", "$5.2million", "$3.5million", "$4.7million"],
    correct: "$4.5million",
    questionId: "09"
  },
  {
    question:
      "who was the major the sponsor for the 2019 African cup of Nations?",
    answers: [
      "Visa",
      "1XBET",
      "Total",
      "Yamaha"
    ],
    correct: "Total",
    questionId: "10"
  },
  {
    question: "what was the official mascot of the 2019 African cup of Nations?",
    answers: ["Vuvuzela", "wolf", "Bear", "Tut"],
    correct: "Tut",
    questionId: "11"
  },
  
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
