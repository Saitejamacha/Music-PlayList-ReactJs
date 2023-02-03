import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-size: 40x;
  color: white;
  margin-top: ${props => (props.singer ? '250px' : '0px')};
  margin-left: 30px;
`

export const Para = styled.p`
  font-size: 30px;
  color: white;
  margin-left: 30px;
  margin-top: -15px;
`

export const BannerContainer = styled.div`
  width: 100vw;
  height: 55vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
`
export const PlayListContainer = styled(AppContainer)`
  background-color: #152850;
  align-items: center;
  min-height: 110vh;
  //   background-color: lightpink;
`
export const MusicTracksContainer = styled(PlayListContainer)`
  background-color: #152850;
  align-items: center;
  min-height: 90vh;
  width: 92vw;
  overflow-y: scroll;
  //   background-color: lightseagreen;
  margin-top: 30px;
  padding-top: 20px;
`

export const NavContainer = styled(PlayListContainer)`
  flex-direction: row;
  justify-content: space-between;
  //   background-color: lightgray;
  min-height: 6vh;
  width: 90vw;
  margin-top: 20px;
`

export const SearchContainer = styled(NavContainer)`
  border: 1px solid #cbd5e1;
  width: 22vw;
  border-radius: 5px;
  color: white;
  min-height: 45px;
  justify-content: space-around;
  padding-right: 10px;
`

export const Input = styled.input`
  height: 45px;
  width: 20vw;
  background-color: transparent;
  border: 0px;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  color: white;

  border-radius: 5px;
  padding-left: 10px;
`
export const UnorderedPlayList = styled.ul`
  height: 15vw;
  width: 90vw;
`
