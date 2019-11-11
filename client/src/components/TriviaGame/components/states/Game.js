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
    answers: ["Red giant star", "Neutron stars", "Supergiant stars", "Red dwarf stars"],
    correctAnswer: "Red dwarf stars",
    image: "https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif"
}, {
    question: "What has a gravitational pull so strong that even light cannot escape it?",
    answers: ["Black hole", "The Moon", "Supernova", "The Sun"],
    correctAnswer: "Black hole",
    image: "https://media.giphy.com/media/LtWIXcIgXsGiI/giphy.gif"
}, {
    question: "Earth is located in which galaxy?",
    answers: ["Milky Way Galaxy", "Whirlpool Galaxy", "Andromeda Galaxy", "Pinwheel Galaxy"],
    correctAnswer: "Milky Way Galaxy",
    image: "https://media.giphy.com/media/YNk9HRcH9zJfi/giphy.gif"
}, {
    question: "Who was the first person to walk on the moon?",
    answers: ["Buzz Aldrin", "John Glenn", "Neil Armstrong", "Sally Ride"],
    correctAnswer: "Neil Armstrong",
    image: "https://media.giphy.com/media/f95jwQbVwwGgDI5BE3/giphy.gif"
}, {
    question: "What is the hottest planet in our solar system?",
    answers: ["Venus", "Mercury", "Neptune", "Mars"],
    correctAnswer: "Venus",
    image: "https://media.giphy.com/media/3ov9jMqcKSVDAvLJgQ/giphy.gif"
}, {
    question: "What is the name of the first satellite sent into space?",
    answers: ["International Space Station", "Calipso", "Sputnik", "Skylab"],
    correctAnswer: "Sputnik",
    image: "http://giphygifs.s3.amazonaws.com/media/Jo5NLNfCcE4Rq/giphy.gif"
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
