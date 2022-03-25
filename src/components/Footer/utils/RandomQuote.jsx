import React from 'react'

const quotes = [
  '"Change the world by being yourself." — Amy Poehler',
  '"Whatever you do, do it well." — Walt Disney',
  '"Be so good they can’t ignore you." — Steve Martin',
  '"Reality is wrong, dreams are for real." — Tupac',
  '"When words fail, music speaks." — Shakespeare',
  '"Make each day your masterpiece." — John Wooden',
  '"Stay hungry. Stay foolish." — Steve Jobs',
  '"Wherever you go, go with all your heart." — Confucius',
  '"Be yourself; everyone else is already taken." — Oscar Wilde',
  '"Live your dreams." — Les Brown',
]
const pickNumber = Math.floor(Math.random() * 10)

function RandomQuote() {
  return (
    <div className="">
      <p className="">{quotes[pickNumber]}</p>
    </div>
  )
}

export { RandomQuote }
