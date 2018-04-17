import React from 'react'

import './GuessCount.css'

import propTypes from 'prop-types'

const GuessCount = ({ guesses }) => <div className="guesses">{ guesses }</div>

GuessCount.propTypes = {
    guesses: propTypes.number.isRequired
}

export default GuessCount