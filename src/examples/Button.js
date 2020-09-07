import styled from "styled-components"

const sizes = {
  sm: ".8rem",
  md: "2rem",
  lg: "3rem",
}

const Button = styled.button`
  color: ${({ color }) => color};
  background: green;
  font-size: ${({ size }) => sizes[size]};
  padding: 1rem;
  margin: 1rem;
`

export default Button
