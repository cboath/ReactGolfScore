import React from 'react'
import './scorecard.css'

const totalScore = score => {
  let scorefill = 0
  for (let x = 0; x < score.length; x++) {
    scorefill = scorefill + score[x].score
  }
  return <div className='TotalScore'>{scorefill}</div>
}

const scoreCard = props => {
  console.log('Dem B props', props)
  let holeBadge = <div className='HoleName'>Hole</div>
  let total = <div className='TotalTitle'>Total</div>
  let nameBadge = <div className='HoleName'>{props.scores.name}</div>
  let playerScore = props.scores.holeScores
  let holes = playerScore.map(score => (
    <div className='HoleNumber'>
      <p>{score.hole}</p>
    </div>
  ))
  let items = playerScore.map(score => (
    <div>
      <input className='HoleScore' value={score.score} />
    </div>
  ))

  return (
    <div>
      <div className='rowC'>
        {holeBadge}
        {holes}
        {total}
      </div>
      <div className='rowC'>
        {nameBadge}
        {items}
        {totalScore(playerScore)}
      </div>
    </div>
  )
}

export default scoreCard
