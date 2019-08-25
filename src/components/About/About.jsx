import React, { Component } from 'react'
import Header from '../Header/Header';

export class About extends Component {
  render() {
    return (
      <div className="about-container">
        <Header componentName={'About'}> </Header>
        <section className="about-section" >a</section>
        <section className="about-section" >b</section>
        <section className="about-section" >c</section>
      </div>
    )
  }
}

export default About
