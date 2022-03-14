import React from "react";
import {StyledAside} from '../Styled'

class Aside extends React.Component {
 
  render() {
    return (
       <StyledAside>
           <h2> LABEFY </h2>
           <img src={this.props.imagem} alt=''/>
       </StyledAside>
    )
  }
}

export default Aside