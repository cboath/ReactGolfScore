import React from 'react'
import './scorecard.css'

const scoreCard = props => {
  console.log('Dem B props', props)
  let nameBadge = <div className='HoleNumber'>{props.scores.name}</div>
  let playerScore = props.scores.holeScores
  let items = playerScore.map(score => (
    <div>
      <div className='HoleNumber'>
        <p>{1}</p>
      </div>
      <input className='HoleScore' value={score} />
    </div>
  ))

  console.log('Items', items)

  return (
    <div className='rowC'>
      {nameBadge}
      {items}
    </div>
  )
}

export default scoreCard
