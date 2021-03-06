import React from 'react'
import { Container } from '../LayoutComponents/Grid/Grid'

const About = () => {
  return (
    <>
      <Container py="-5">
        <h1 className="text-center  pb-3">About Us</h1>

        <div className="container">
          <p>
          <i>Joia</i>, pronounced as "Joy-ah," means gem or jewel.  Defining "Joia" is defining you: a precious jewel or gem to be treasure; and your art defines you; so let the multi-verse know you're rare, you're vaulable, you're Joia!
          </p>

          <p>
            We're a smooth, groove, "Leave-the-door-open" (artwise), kind of group: 
            where you, "The Artist," can Promote Your Art by Making an Amazing Online 
            Portfolio (using our Time-Saving Website Builder). We make it easy 
            for you to Curate Your Content, Ace Your Artist Statement, and paint 
             your About Me Page how you see it!
          </p>

          <p>
            Start blogging, Start Your Online Store, enter art competitions, attend art exhibitions, fairs; or Throw Your Own Art Shows!  Network, Network, Network! Enjoy who we are by becoming a part! Get Involved in Your Community, Collaborate on an Art Project- perhaps, Place Your Art in Film and TV Projects, or even Apply for Grants through our growing network! You can break the internet; and kill it on social media platforms.
          </p>

          <p>
            Who are we: other artists, gems of our diverse multi-verses, who Collaborate on an Art Projects, Cross-Promote With Other Artists, and who can Get Your Followers to Promote for You.  We want you to never have blocks; because you can Be Inspired By Your Fellow Artists Online. We care about developing you; so we hope you Be Inspired By Your Fellow Artists Online, by bringing to you Analytics Tools, in the near future. We're <b>JOIA</b>: Join Our Internet Alliance.  <i>"We're the gem for your Jewel or Jim!"</i>
          </p>
        </div>
      </Container>

      <div className="container-fluid bg-warning py-5">
        <h1 className="text-center mb-3"> How to post your artwork </h1>

        <div className="text-center">
          <p>1- Click register to create an account.</p>

          <p>
            2- After signup, click on the sell product button.
          </p>

          <p>
            3- Fill out the artwork information in the form and select
            submit.
          </p>
        </div>
      </div>

      <Container py="-5">
        <h1 className="text-center  pb-3">Joia Team</h1>

        <div className="container">
          <p>
            <span className="font-weight-bold mr-3">Andrew Olson</span>
            Technical Lead, Tests and Diagnostics, Database Developer.
          </p>

          <p>
            <span className="font-weight-bold mr-3">Connor Favero</span>
            Quality Assurance, Front-end Developer, Public Relations.
          </p>

          <p>
            <span className="font-weight-bold mr-3">Frederick Thomas, Super Coding Ninja???</span>
            Project Manager, Repository Maintenance, Back-end Registration.
          </p>

          <p>
            <span className="font-weight-bold mr-3">Rattanak Leng</span>
            Product Design, Front-end lead, Program Manager.
          </p>
        </div>
      </Container>
    </>
  )
}

export default About
