import { Link, useLocation } from 'react-router-dom'
import Flex from '@shared/Flex'
import Button from '@shared/Button'
import { css } from '@emotion/react'
import { colors } from '@/styles/colorPalette'
import useUser from '@/hooks/auth/useUser'
import { useCallback } from 'react'
import MyImage from '@components/my/MyImage'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false

  const user = useUser()

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to="my">
          <MyImage size={40} />
        </Link>
      )
    }

    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton])

  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/" style={{ width: '80px', transform: 'translateX(-25px)' }}>
        <img
          width="100%"
          src="https://framerusercontent.com/images/y7135TGP0TiQ7gtLbQ0IrWOzww.jpg?lossless=1"
          alt=""
        />
      </Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.grey};
`

export default Navbar
