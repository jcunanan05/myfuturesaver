import React from 'react'
import Section from '../section'
import claimContent from '../../content/claimContent'

const Claim = () => {
  const { title, content } = claimContent
  return (
    <Section className="Section--blue" name="claim">
      <div className="columns">
        <div className="column is-one-third">
          <h2 className="title">{title}</h2>
        </div>

        <div className="column is-two-thirds">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </Section>
  )
}

export default Claim
