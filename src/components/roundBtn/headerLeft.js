import React from 'react'
import RoundBtn from '.'
import { MenuIcon } from '../../appResources/svg'
import { svgHeight } from '../../appResources'
 const HeaderLeft = (props) => {
   return( <RoundBtn onPress={props.onPress} style={props.style} type='LEFT'><MenuIcon color={props.color} size={svgHeight(25)}/></RoundBtn> )
}
export default HeaderLeft