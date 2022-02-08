import { useState } from 'react'
import {
  Box,
  IconButton,
  GlobalStyles,
  Typography,
  LinearProgress
} from '@mui/material'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import { styled } from '@mui/material/styles'

import Unity, { UnityContext } from 'react-unity-webgl'

import { SectionHeader } from 'components/sections/Section'

const GameBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '100%'
  },

  width: '80%',
  height: '80%',
  margin: '30px auto',
  position: 'relative'
}))

const gameFolder = 'games/crossy'

const unityContext = new UnityContext({
  loaderUrl: `${gameFolder}/web.loader.js`,
  dataUrl: `${gameFolder}/web.data`,
  frameworkUrl: `${gameFolder}/web.framework.js`,
  codeUrl: `${gameFolder}/web.wasm`
})

const changeToFullScreen = () => {
  unityContext.setFullscreen(true)
}

export default function Game() {
  const [progression, setProgression] = useState(0)

  unityContext.on('progress', function (progression) {
    setProgression(progression)
  })

  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          body: { backgroundColor: theme.palette.background.secondary }
        })}
      />

      <GameBox>
        <SectionHeader msg={'CROSSY CROAK'}></SectionHeader>

        {progression < 1 ? (
          <>
            <Typography>
              Loading game {Math.round(progression * 100)} %...
            </Typography>
            <LinearProgress variant="determinate" value={progression * 100} />
          </>
        ) : (
          <FullScreenBtn />
        )}

        <Unity
          onClick={() => changeToFullScreen}
          unityContext={unityContext}
          style={{ height: '100%', width: '100%' }}
        />
      </GameBox>
    </>
  )
}

const FullScreenBtn = () => {
  return (
    <IconButton
      sx={{ position: 'absolute', right: 0, color: 'white' }}
      onClick={() => {
        changeToFullScreen()
      }}
    >
      <FullscreenIcon style={{ fontSize: '36px' }} />
    </IconButton>
  )
}
