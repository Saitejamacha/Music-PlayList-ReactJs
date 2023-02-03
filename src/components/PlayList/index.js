import {AiOutlineDelete} from 'react-icons/ai'
import {List, Img, TextContainer, Button, Text} from './styledComponents'

const PlayList = props => {
  const {playList, onClickDeleteItem} = props
  const {id, imageUrl, name, genre, duration} = playList

  const onClickBinIcon = () => {
    onClickDeleteItem(id)
  }

  return (
    <List>
      <Img alt="track" src={imageUrl} />
      <TextContainer>
        <Text mainText>{name}</Text>
        <Text>{genre}</Text>
      </TextContainer>
      <Text mainText>{duration}</Text>
      <Button onClick={onClickBinIcon}>
        <AiOutlineDelete />
      </Button>
    </List>
  )
}

export default PlayList
