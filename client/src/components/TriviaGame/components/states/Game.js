import React from "react";


const questions = [{
    question: "What was the first full length CGI movie?",
    answers: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
    correctAnswer: "Toy Story",
    image: "assets/images/toystory.gif"
}, {
    question: "Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
    correctAnswer: "Fred Spice",
    image: "assets/images/spicegirls.gif"
}, {
    question: "Which NBA team won the most titles in the 90s?",
    answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
    correctAnswer: "Chicago Bulls",
    image: "assets/images/bulls.gif"
}, {
    question: "Which group released the hit song, 'Smells Like Teen Spirit'?",
    answers: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
    correctAnswer: "Nirvana",
    image: "assets/images/nirvanabark.gif"
}, {
    question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
    answers: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
    correctAnswer: "The Lion King",
    image: "assets/images/lionking.gif"
}, {
    question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
    answers: ["Dice", "Mirror", "Fresh", "Cab"],
    correctAnswer: "Fresh",
    image: "assets/images/fresh.gif"
}, {
    question: "What was Doug's best friend's name?",
    answers: ["Skeeter", "Mark", "Zach", "Cody"],
    correctAnswer: "Skeeter",
    image: "assets/images/skeeter.gif"
}, {
    question: "What was the name of the principal at Bayside High in Saved By The Bell?",
    answers: ["Mr.Zhou", "Mr.Driggers", "Mr.Belding", "Mr.Page"],
    correctAnswer: "Mr.Belding",
    image: "assets/images/belding.gif"
}];


const timer = 30;

export default class Game extends React.Component {
    state = {
        correct: 0,
        incorrect: 0,
        questionIndex: 0,
        timer
    };

    answerQuestion = (correct) => {
        const key = correct ? "correct" : "incorrect"
        const newState = { ...this.state, [key]: this.state[key] + 1 }
        if (this.state.questionIndex < questions.length - 1) {
            this.setState({
                ...newState,
                questionIndex: this.state.questionIndex + 1,
            })
        } else {
            this.props.setScore(newState.correct, newState.incorrect)
        }
    }

    //function to render question to the page
    handleQuestion = (userAnswer) => {
        //if the answer they clciked on is equal to the correct answer
        const correctAnswer = questions[this.state.questionIndex].correctAnswer
        if (userAnswer === correctAnswer) {
            this.answerQuestion(true)
        }else {
            this.answerQuestion(false)
        }        
    }

    //Countdown function
    countdown = () => {

    }
   


    render() {
        return (
            <div>
                <h2>Time Remaining: {this.state.time}</h2>
                <h2>{questions[this.state.questionIndex].question}</h2>
                <div>{questions[this.state.questionIndex].answers.map((answer, index) => {
                    return (<h3 onClick={() => this.handleQuestion(answer)} key={index} >{answer}</h3>)
                })}</div>
            </div>
        ) 
    }
}
