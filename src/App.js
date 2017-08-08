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
      <div>
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
        <button onClick={this.selectRandomImage}>Next image</button>
        <div>{this.state.imageIdx + 1+ ' / ' +this.state.images.length}</div>
        <div>{`filter: hue-rotate(${this.state.degree}deg);`}</div>
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

  style1(props) {

    return Object.assign(
      {},
      {
        display: 'inline-flex',
        overflow: 'hidden',
        WebkitMask: `url(${beziersquare}) 0% 0% / contain no-repeat`,
        mask: `url(${beziersquare}) 0% 0% / contain no-repeat`,
      },
      props.style
    )
  }

  style2(props, state) {

    return {
      width: '100vw',
      height: '100vw',
      filter: `hue-rotate(${state.degree}deg)`,
    }
  }
}

export default PsychadelicHueRotate
