import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
  //   background-color: lightblue;
  border: 2px solid #cbd5e1;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  margin-top: 30px;
  height: 25vh;
`

export const Img = styled.img`
  width: 15vw;
  height: 18vh;
  margin-left: 10px;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //   background-color: lightgreen;
  height: 15vh;
  flex-grow: 1;
  margin-left: 20px;
`

export const Button = styled.button`
  width: 90px;
  height: 40px;
  font-size: 30px;
  background-color: transparent;
  border: 0px;
  color: white;
`
export const Text = styled.p`
  font-size: ${props => (props.mainText ? '30px' : '20px')};
  color: ${props => (props.mainText ? 'white' : '#3b82f6')};
  font-weight: 700;
  margin-top: 10px;
`
