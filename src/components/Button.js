import React from "react"
import styled from "styled-components"

const PrimaryButton = styled.div`
  background-color: white;
  color: black;
`

export default function Button(props) {
  return <a style={style}>{props.text}</a>
}
