import React, {Component} from 'react'
import beziersquare from './bezier-square.svg'
import instagramlogo from './instagram-logo.svg'
import astronaut from './astronaut.jpg'
import wahndur1 from './wahndur-1.jpg'
import wahndur2 from './wahndur-2.png'
import magiceye from './magic-eye.jpg'
import octo from './octo.png'


class PsychadelicHueRotate extends Component {

  constructor(props) {

    super(props)

    this.state = {
      degree: 0,
      images: [
        instagramlogo,
        astronaut,
        wahndur1,
        wahndur2,
        magiceye,
        octo,
      ],
      imageIdx: 0,
    }

    this.selectRandomImage = this.selectRandomImage.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
  }

  render() {
    return (
      <div style={this.style0()}>
        <h3 style={{margin: 0}}>Press-and-Hold images and</h3>
        <h3 style={{margin: 0}}>GETT TT R I P P E D O U TTTTT</h3>
        <div style={{display: 'flex', justifyContent: 'space-around', padding: '1rem 0', width: '100%'}}>
          <button onClick={this.selectRandomImage} style={{padding: '1rem 0'}}>Next image</button>
          <div>{this.state.imageIdx + 1+ ' / ' +this.state.images.length}</div>
          <div>{`filter: hue-rotate(${this.state.degree}deg);`}</div>
        </div>
        <div style={this.style1(this.props)}>
          <img
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
            onMouseLeave={this.handleMouseUp}
            onMouseMove={this.handleMouseUp}
            onMouseOut={this.handleMouseUp}
            src={this.state.images[this.state.imageIdx]}
            style={this.style2(this.props, this.state)}/>
        </div>
      </div>
    )
  }

  incrementDegree() {}

  selectRandomImage() {

    this.setState({imageIdx: this.state.imageIdx + 1 === this.state.images.length ? 0 : this.state.imageIdx + 1})
  }

  handleMouseDown() {

    this.incrementDegree = setInterval(() => {
      this.setState((prevState) => ({degree: prevState.degree > 360 ? 0 : prevState.degree + 1}))
    }, 1)
  }

  handleMouseUp() {

    clearInterval(this.incrementDegree)
  }

  style0() {
    return {
      width: '50%',
      display: 'flex',
      margin: '0 auto',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: '"Helvetica", sans-serif',
    }
  }

  style1(props) {

    return Object.assign(
      {},
      {
        display: 'inline-flex',
        margin: '0 auto',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        overflow: 'hidden',
        WebkitMask: `url(${beziersquare}) 0% 0% / contain no-repeat`,
        mask: `url(${beziersquare}) 0% 0% / contain no-repeat`,
      },
      props.style
    )
  }

  style2(props, state) {

    return {
      width: '100%',
      height: '100%',
      filter: `hue-rotate(${state.degree}deg)`,
    }
  }
}

export default PsychadelicHueRotate
