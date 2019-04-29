import React, { Component } from 'react'
import Scorecard from './scorecard/scorecard'
import './GolfScore.css'
import './bootstrap.min.css'

let state = {
  name: 'Chris',
  holeScores: [3, 4, 3, 4, 4, 5, 2, 6, 7]
}

class GolfScore extends Component {
  render() {
    return (
      <div>
        <div className="GolfScore">GolfScore app!</div>
        <Scorecard scores={state} />
      </div>
    )
  }
}

export default GolfScore
