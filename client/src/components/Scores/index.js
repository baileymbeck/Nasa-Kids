import React, { Component } from "react";
import api from "../../api";

const style = {
    score: {
        marginTop: "125px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    body: {
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    game: {
        fontSize: "40px",
        fontWeight: "bold"
    },
    scores: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    scoreList: {
        paddingLeft: 0
    },
    scoreListItem: {
        paddingLeft: 0
    }
}


class Scores extends React.Component {
    state = {
        scores: [],
        q: ""

    };

    componentDidMount() {
        this.getScores();
    }

    getScores = () => {
        api.getScores().then(res => {
            console.log(res.data);
            this.setState({ scores: res.data })
        }
        )
            .catch(err => console.log(err));
        // console.log(this.state.scores)
    }
    
    renderScore (name, score) {
        console.log("name", name);
        switch (name) {
            case 'trivia':
                return [
                    <ul style={style.scoreListItem}>Correct: {score && score.correct}</ul>,
                    <ul style={style.scoreListItem}>Incorrect: {score && score.incorrect}</ul> 
                ]
               
            case 'clicky':
                return (
                    <ul style={style.scoreListItem}>Correct: {score}</ul>
                )
                
            case 'hangman':
                return (
                    <div></div>
                )
                break;
            default:
            // code block
        }
    }

    render() {
        console.log(this.state.scores)
      

        return (
            <div style={style.scores}>
                <h1 style={style.score}>Scores</h1>
                <div style={style.body}>
                    {this.state.scores.map(data =>
                        <ul style={style.scoreList} key={data._id}>
                            <ul style={{...style.game, ...style.scoreListItem}}>{data.game}</ul>
                            {this.renderScore(data.game, data.score)}
                        </ul>
                    )}
                </div>
            </div>
        )
    }
}
{/* <ul>Correct: {data.score && data.score.correct || 0}</ul>
    <ul>Incorrect: {data.score && data.score.incorrect || 0}</ul> */}

export default Scores;
