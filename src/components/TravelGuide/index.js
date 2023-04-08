import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {
  ListItemsContainer,
  Title,
  ListItem,
  Image,
  Name,
  Description,
  MainContainer,
} from './styledComponents'

const appStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
}

class TravelGuide extends Component {
  state = {appStatus: appStatusConstants.initial, travelList: []}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    this.setState({appStatus: appStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.packages.map(item => ({
        id: item.id,
        description: item.description,
        imageUrl: item.image_url,
        name: item.name,
      }))
      this.setState({
        appStatus: appStatusConstants.success,
        travelList: updatedData,
      })
    }
  }

  renderSuccessView = () => {
    const {travelList} = this.state

    return (
      <ListItemsContainer>
        {travelList.map(item => (
          <ListItem key={item.id}>
            <Image src={item.imageUrl} alt={item.name} />
            <Name>{item.name}</Name>
            <Description>{item.description}</Description>
          </ListItem>
        ))}
      </ListItemsContainer>
    )
  }

  renderLoaderView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderingView = () => {
    const {appStatus} = this.state
    switch (appStatus) {
      case appStatusConstants.inProgress:
        return this.renderLoaderView()

      case appStatusConstants.success:
        return this.renderSuccessView()

      default:
        return null
    }
  }

  render() {
    const {travelList} = this.state
    console.log(travelList)
    return (
      <MainContainer>
        <Title>Travel Guide</Title>
        {this.renderingView()}
      </MainContainer>
    )
  }
}

export default TravelGuide
