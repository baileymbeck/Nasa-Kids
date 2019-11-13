import React, { Component } from "react";
import api from "../../api";

const style = {
    score: {
        marginTop: "125px"
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
                <div>
                    {this.state.scores.map(data =>
                        <li key={data._id}>
                            THis is the score: {data.game}
                            {data.score && data.score.correct || 0} - 
                            {data.score && data.score.incorrect || 0}
                        </li>
                    )}
                </div>
            </div>
        )
    }
}

export default HighScore;
