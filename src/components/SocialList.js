import { Avatar, SvgIcon, Box,Link} from '@mui/material'
import { ReactComponent as Twitter } from 'icons/twitter.svg'
import { ReactComponent as LinkedIn } from 'icons/linkedin.svg'
import { ReactComponent as Github } from 'icons/github.svg'
import { ReactComponent as Instagram } from 'icons/instagram.svg'
import {styled} from '@mui/material'


const CustomSvg = styled(SvgIcon)(({ theme }) => ({
  color:theme.palette.primary.main
}))

const SocialAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor:theme.palette.background.primary,
  marginRight: '.5rem' 
}))

const SocialNetworkLink = ({ alt, svg }) => {
  return (
    <SocialAvatar>
      <CustomSvg
        alt={alt}
        component={svg}
        viewBox='0 0 28 28'
      />
    </SocialAvatar>
  )
}

export const SocialList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <ul style={{ display: 'flex', listStyleType: 'none', padding: '0' }}>
        <li>
          <Link href={'https://github.com/marcsicr'}>
          <SocialNetworkLink alt="Github" svg={Github} />
          </Link>
        </li>
        <li>
          <Link href={'https://www.linkedin.com/in/marcsicr/'}>
          <SocialNetworkLink alt="LinkedIn" svg={LinkedIn} />
          </Link>
        </li>
        <li>
          <Link href={'https://twitter.com/marcsicr'}>
          <SocialNetworkLink alt="Twitter" svg={Twitter} />
          </Link>
        </li>
        <li>
          <Link href={'https://www.instagram.com/marcsicr/'}>
          <SocialNetworkLink alt="Instagram" svg={Instagram} />
          </Link>
        </li>
      </ul>
    </Box>
  )
}

