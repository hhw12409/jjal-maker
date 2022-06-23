import styled from 'styled-components'

const Title = styled.h1 `
  font-size : var(--font-size-medium);
  margin-top : var(--margin-size-medium);
`

function Header() {
  return (
    <div>
      <Title>짤 메이커</Title>
    </div>
  )
}

export default Header;