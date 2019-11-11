import React from "react";


const questions = [{
    question: "How old is the universe?",
    answers: ["100 million years", "3 billion years", "13.8 billion years", "500 million years"],
    correctAnswer: "13.8 billion years",
    image: "https://media.giphy.com/media/2WH6sqGKm027uq1Q9G/giphy.gif"
}, {
    question: "What is the largest planet in our solar system?",
    answers: ["Mercury", "Jupiter", "Moon", "Earth"],
    correctAnswer: "Jupiter",
    image: "https://media.giphy.com/media/l0MYIKGlXPrn0Z4uQ/giphy.gif"
}, {
    question: "What is the most common type of star found in the milky way?",
    answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Red supergiant stars"],
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


const timerDuration = 30;

export default class Game extends React.Component {
    state = {
        correct: 0,
        incorrect: 0,
        questionIndex: 0,
        timer: timerDuration,
        displayQuestion: true,
        answerCorrect: true
    };

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        console.log("dfha;sdj")
        clearInterval(this.timerID);
    }

    tick() {
        if (this.state.timer === 0) {
            this.answerQuestion(false);
        } else {
            this.setState({ ...this.state, timer: this.state.timer - 1 })
        }
    }

    answerQuestion = (correct) => {
        this.setState(() => ({
            displayQuestion: false, 
            timer: 30,
            answerCorrect: correct
        }))
        setTimeout(() => {
            const key = correct ? "correct" : "incorrect"
            const newState = { ...this.state, [key]: this.state[key] + 1, timer: timerDuration, displayQuestion: true }
            if (this.state.questionIndex < questions.length - 1) {
                this.setState({
                    ...newState,
                    questionIndex: this.state.questionIndex + 1,
                })
            } else {
                this.props.setScore(newState.correct, newState.incorrect)
            }
        }, 5000)

    }

    //function to render question to the page
    handleQuestion = (userAnswer) => {
        //if the answer they clciked on is equal to the correct answer
        const correctAnswer = questions[this.state.questionIndex].correctAnswer
        if (userAnswer === correctAnswer) {
            this.answerQuestion(true)
        } else {
            this.answerQuestion(false)
        }

    }





    render() {
        return (
            <div>
                {this.state.displayQuestion ?
                    <div>
                        <h2>Time Remaining: {this.state.timer}</h2>
                        <h2>{questions[this.state.questionIndex].question}</h2>
                        <div>{questions[this.state.questionIndex].answers.map((answer, index) => {
                            return (<h3 onClick={() => this.handleQuestion(answer)} key={index} >{answer}</h3>)

                        })}
                        </div>
                    </div>
                    :
                    <div>

                        <h2>{this.state.answerCorrect ? "Correct" : "Wrong"}</h2>
                        <h3>the correct answer is: {questions[this.state.questionIndex].correctAnswer} </h3>
                        <img src={questions[this.state.questionIndex].image}/>
                    </div>
                }
            </div>
        )
    }
}
