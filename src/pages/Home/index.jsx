// HOME

import React from 'react'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { MainDates } from '../../dates'
import { FAQ } from './utils/FAQ'
import { Version } from './utils/Version'
import { Listing } from '../../components/Listing'

function Home() {
  return (
    <div className="">
      <div className="">
        <Section
          title="How much time left?"
          description="Did you ever did yourself this question? Me too! Endiday is my personal solution for that."
        />
        <div className="mx-auto max-w-7xl px-8">
          <div className="mx-auto grid max-w-3xl items-center gap-8 py-8">
            {MainDates() &&
              MainDates().map((item, index) => {
                return <Card title={item.title} list={item.list} key={index} />
              })}
          </div>
        </div>

        <div className="">
          <Section
            title="Our Roadmap"
            description="Endiday is my independent project. That's mean that I made a personal roadmap to the project."
          />
          <Listing list={Version} />
        </div>
        <div className="">
          <Section title="Frequently Asked Question" description="By no one." />
          <Listing list={FAQ} />
        </div>
      </div>
    </div>
  )
}

export { Home }
