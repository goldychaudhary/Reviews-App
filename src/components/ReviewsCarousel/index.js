import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onRightArrowClick = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index >= 0 && index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    } else {
      console.log('last')
    }
  }

  onLeftArrowClick = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(index)
    if (index > 0 && index < reviewsList.length) {
      this.setState(prevState => ({index: prevState.index - 1}))
    } else {
      console.log('first')
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const currentObject = reviewsList[index]
    const {imgUrl, username, companyName, description} = currentObject

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="section-one">
          <button
            testid="leftArrow"
            onClick={this.onLeftArrowClick}
            type="button"
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="content">
            <img src={imgUrl} alt={username} />
            <p className="username">{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            testid="rightArrow"
            onClick={this.onRightArrowClick}
            type="button"
          >
            <img
              className="arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
