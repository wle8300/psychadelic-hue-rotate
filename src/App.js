import React, {Component} from 'react'


class ReactBezierSquare extends Component {

  constructor(props) {

    super(props)

    this.state = {
      degree: 0,
      images: [
        'instagram-logo.svg',
        'astronaut.jpg',
        'wahndur-1.jpg',
        'wahndur-2.png',
        'magic-eye.jpg',
        'octo.png',
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
            src={`/${this.state.images[this.state.imageIdx]}`}
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
        WebkitMask: 'url(/bezier-square.svg) 0% 0% / contain no-repeat',
        mask: 'url(/bezier-square.svg) 0% 0% / contain no-repeat',
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

export default ReactBezierSquare
