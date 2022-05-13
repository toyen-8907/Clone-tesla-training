import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description,leftBtnText,rightbTNtEXT,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <Fade bottom>
          <ItemText>
              <h1>{ title }</h1>
              <p>{description}</p>
          </ItemText>
          </Fade>
        <Fade bottom>  
          <Buttons>
            <ButtonGroup>
                <LeftButton>
                  {leftBtnText}
                </LeftButton>
                { rightbTNtEXT &&
                    <RightButton>
                        {rightbTNtEXT}
                    </RightButton>
                }
                
            </ButtonGroup>

            <DownArrow src="/images/down-arrow.svg" />
          </Buttons>
        </Fade>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height:100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: url('./images/model-s.jpg');
    display:flex;
    flex-direction:column;
    justify-content:space-between; //vertical
    align-items:center; //horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const ButtonGroup = styled.div`
  display:flex;
  flex-direction:column;
  margin-bottom:30px;
  @media (max-width: 768px){
    flex-dirextion: column;
  }
`
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height:40px;
  width:256px;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity: 0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px
`
const RightButton = styled(LeftButton)`
  background-color:white;
  color:black;
`

const DownArrow = styled.img`
  margin-top:20px;
  height:40px;
  animation:animateDown infinite 1.5s;
  cursor:pointer;
`
const Buttons =styled.div`


`