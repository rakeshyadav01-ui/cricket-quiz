const questions = [
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Ricky Ponting"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the 2011 Cricket World Cup?",
        options: ["Australia", "India", "Sri Lanka", "England"],
        answer: "India"
    },
    {
        question: "How many players are there in a cricket team?",
        options: ["9", "10", "11", "12"],
        answer: "11"
    },
    {
        question: "Which format of cricket is played for 20 overs per side?",
        options: ["Test", "ODI", "T20", "First Class"],
        answer: "T20"
    },
    {
        question: "Who is known as 'Captain Cool'?",
        options: ["Rohit Sharma", "MS Dhoni", "Virat Kohli", "Kapil Dev"],
        answer: "MS Dhoni"
    },
    {
        question: "How many overs are there in a standard ODI innings?",
        options: ["20", "40", "50", "60"],
        answer: "50"
    },
    {
        question: "Which country hosted the 2019 Cricket World Cup?",
        options: ["India", "Australia", "England", "South Africa"],
        answer: "England"
    },
    {
        question: "Who won the first ICC T20 World Cup in 2007?",
        options: ["Pakistan", "India", "Australia", "Sri Lanka"],
        answer: "India"
    },
    {
        question: "What is the maximum number of runs a batter can normally score by hitting the ball over the boundary without it bouncing?",
        options: ["4", "5", "6", "8"],
        answer: "6"
    },
    {
        question: "Which player is popularly known as the 'Hitman'?",
        options: ["Rohit Sharma", "Virat Kohli", "AB de Villiers", "Chris Gayle"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which team has won the most ODI Cricket World Cups?",
        options: ["India", "Australia", "West Indies", "Pakistan"],
        answer: "Australia"
    },
    {
        question: "What is a score of zero by a batter called?",
        options: ["Duck", "Goose", "Blank", "Nil"],
        answer: "Duck"
    },
    {
        question: "Which country is famous for the Big Bash League (BBL)?",
        options: ["England", "Australia", "India", "New Zealand"],
        answer: "Australia"
    },
    {
        question: "Who was India's first captain to win the ODI World Cup?",
        options: ["Sunil Gavaskar", "Kapil Dev", "MS Dhoni", "Sourav Ganguly"],
        answer: "Kapil Dev"
    },
    {
        question: "How many stumps are used to make one wicket?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "Which player is famous for the nickname 'Universe Boss'?",
        options: ["Chris Gayle", "Andre Russell", "Kieron Pollard", "Brian Lara"],
        answer: "Chris Gayle"
    },
    {
        question: "What is the length of a cricket pitch?",
        options: ["20 yards", "22 yards", "24 yards", "25 yards"],
        answer: "22 yards"
    },
    {
        question: "Which country won the 2019 Cricket World Cup?",
        options: ["New Zealand", "Australia", "India", "England"],
        answer: "England"
    },
    {
        question: "Which player is known for the nickname 'Mr. 360'?",
        options: ["AB de Villiers", "David Warner", "Glenn Maxwell", "Jos Buttler"],
        answer: "AB de Villiers"
    },
    {
        question: "How many legal deliveries are there in a standard cricket over?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    }
];

function getRandomQuestions() {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
}