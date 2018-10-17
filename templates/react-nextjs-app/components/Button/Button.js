// @flow

import styled from 'styled-components'

const StyledButton = styled.a`
  border-radius: 0.5rem;
  cursor: pointer;
  outline: none;

  background: ${({ theme }) => theme.colors.pink}; 
  transition: background-color 0.2s ease, color 0.2s ease;
  
  // Text styles
  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  padding: 1.4rem 3rem;
  line-height: 1;

  border: 0;
  outline: 0;

  &:hover {
    background: ${({ theme }) => theme.colors['pink-dark']};
  }
`

const StyledButtonButton = StyledButton.withComponent('button')

type Props = {
  label: string,
  onClick?: Function,
  disabled?: boolean,
  isLink?: boolean
}

function getWrapper (isLink) {
  return isLink ? StyledButton : StyledButtonButton
}

const Button = ({ label, onClick, disabled, isLink, ...props }: Props) => {
  const Wrapper = getWrapper(isLink)
  return (
    <Wrapper onClick={onClick} disabled={disabled} {...props}>
      {label}
    </Wrapper>
  )
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  isLink: true
}

export default styled(Button)``
