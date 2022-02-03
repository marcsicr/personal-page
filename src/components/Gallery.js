import { useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack,Button } from '@mui/material'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import CancelIcon from '@mui/icons-material/Cancel';

import WhiteButton from './ui/WhiteButton'
import GalleryContext from './context/GalleryContext'

const GalleryBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex:'1',
}))

const ImageBoxContainer = styled(Box)(({ theme }) => ({
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    '@media (orientation: landscape)': {
        maxWidth:'60vw'
      }
  }))


  const NavigationButtons = ({moveLeftFunc,moveRightFunc}) => {
    return (
      <Stack
        marginTop={"10px"}
        display={'flex'}
        width={'100%'}
        direction={'row'}
        justifyContent={'center'}
        alignContent={'start'}
        gap={'20px'}
      >
        <WhiteButton
          onClick={() => moveLeftFunc()}
          startIcon={<NavigateBeforeIcon />}
        >
          Prev
        </WhiteButton>
        <WhiteButton onClick={() => moveRightFunc()} endIcon={<NavigateNextIcon />}>
          Next
        </WhiteButton>
      </Stack>
    )
  }

export default function Gallery({ pics,show }) {

  const [index, setIndex] = useState(0)
  const {closeGallery} = useContext(GalleryContext)

  const moveLeft = () => {
    if (pics && Array.isArray(pics) && pics.length > 0) {
      if (index === 0) setIndex(pics.length - 1)
      else setIndex(index - 1)
    }
  }

  useEffect(() => {
    setIndex(0)
  },[show])

  const moveRight = () => {
    if (pics && Array.isArray(pics) && pics.length > 0) {
      if (index === pics.length - 1) setIndex(0)
      else setIndex(index + 1)
    }
  }


  return ( !show? null :
    <GalleryBox>
      <Stack>
        <ImageBoxContainer>
          {pics && (
            <Box
              position={'relative'}
              width={'auto'}
              height={'100%'}
              justifyContent={'center'}
              maxHeight={'70vh'}
            >
              <img
                alt="Gallery"
                src={pics[index]}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
              <Button onClick={()=> closeGallery()}
                style={{ position: 'absolute', top: '5px', right: '15px', color:'white', backgroundColor:'rgba(0,0,0,.6)' }}
                startIcon={<CancelIcon/>}
              >
                Close
              </Button>
            </Box>
          )}
        </ImageBoxContainer>
        <NavigationButtons moveLeftFunc={moveLeft} moveRightFunc={moveRight} />
      </Stack>
    </GalleryBox>
  )
}
