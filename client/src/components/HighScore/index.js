import React, { Component } from "react";
import api from "../../api";

const style = {
    score: {
        marginTop: "125px"
    },
    body: {
        overflow: "auto"
    },
    game: {
        fontSize: "40px",
        fontWeight: "bold"
    }
}


class HighScore extends React.Component {
    state = {
        scores: [],
        q: ""

    };

    componentDidMount() {
        this.getScores();
    }

    getScores = () => {
        api.getScores().then(res =>{
            console.log(res.data);
            this.setState({ scores: res.data})
        }
        )
            .catch(err => console.log(err));
        // console.log(this.state.scores)
    }
s

    render() {
        console.log(this.state.scores)

        return (
            <div>
                <h1 style={style.score}>HighScore</h1>
                <div style={style.body}>
                    {this.state.scores.map(data =>
                        <ul key={data._id}>
                            <ul style={style.game}>{data.game}</ul> 
                            <ul>Correct:{data.score && data.score.correct || 0}</ul>
                            <ul>Incorrect:{data.score && data.score.incorrect || 0}</ul>
                         </ul>
                    )}
                </div>
            </div>
        )
    }
}

export default HighScore;
