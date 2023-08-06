import CartContext from '../../context/CartContext'

import {
  VideoCardContainer,
  ThumbnailImage,
  VideoCardBottonContainer,
  ProfileImage,
  VideoDetailsContainer,
  VideoDetailsText,
  NavLink,
} from './styledComponents'

const VideoCard = props => {
  const {details} = props
  const {channel, title, id, thumbnailUrl, publishedAt, viewCount} = details
  const {name, profileImageUrl} = channel

  return (
    <CartContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#181818' : '#f9f919'
        const textColor = isDarkTheme ? '#f9f949' : '#181818'
        return (
          <NavLink to={`videos/${id}`}>
            <VideoCardContainer bgColor={bgColor}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

              <VideoCardBottonContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />

                <VideoDetailsContainer>
                  <VideoDetailsText color={textColor}>{title}</VideoDetailsText>

                  <VideoDetailsText color={textColor}>{name}</VideoDetailsText>
                  <VideoDetailsText color={textColor}>
                    {viewCount} views
                  </VideoDetailsText>

                  <VideoDetailsText>{publishedAt} </VideoDetailsText>
                </VideoDetailsContainer>
              </VideoCardBottonContainer>
            </VideoCardContainer>
          </NavLink>
        )
      }}
    </CartContext.Consumer>
  )
}

export default VideoCard
