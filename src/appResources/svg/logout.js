import React from 'react';
import {View} from 'react-native'
import { SvgCss } from 'react-native-svg'
import {colors } from '..'


const LogoutIcon =(props)=>{
    const size =props.size ?props.size:40
    const color = props.color ?props.color :colors.primary
    const xml =`<svg id="icons_notification" data-name="icons/notification" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
    <defs>
      <clipPath id="clip-path">
        <path id="Path-103" d="M-13.275,21a1,1,0,0,0,1-1V8.35l2.255,2.361a1.259,1.259,0,0,0,1.838,0,1.407,1.407,0,0,0,0-1.925l-3.9-4.082a1.26,1.26,0,0,0-1.806-.033,1,1,0,0,0-.988,1V5.7l-2.945,3.083a1.407,1.407,0,0,0,0,1.925,1.26,1.26,0,0,0,1.839,0l1.106-1.158V20a1,1,0,0,0,1,1ZM-19.5,18a1.249,1.249,0,0,0,1.3-1.233,1.3,1.3,0,0,0-1.3-1.289h-1.3a2.6,2.6,0,0,1-2.717-2.465L-23.468,5A2.614,2.614,0,0,1-20.8,2.459H-5.2A2.646,2.646,0,0,1-2.5,5v8.012a2.619,2.619,0,0,1-2.7,2.5H-6.5a1.254,1.254,0,0,0-1.3,1.24A1.256,1.256,0,0,0-6.5,18h1.3A5.038,5.038,0,0,0,0,13.009V5A5.046,5.046,0,0,0-5.2,0H-20.8A5.178,5.178,0,0,0-26,5.155v7.853A5.038,5.038,0,0,0-20.8,18Z" transform="translate(25 28) rotate(90)" fill=${color} opacity="0.3"/>
      </clipPath>
    </defs>
    <rect id="Rectangle" width="30" height="30" fill="rgba(255,0,0,0)"/>
    <path id="Path-103-2" data-name="Path-103" d="M-13.275,21a1,1,0,0,0,1-1V8.35l2.255,2.361a1.259,1.259,0,0,0,1.838,0,1.407,1.407,0,0,0,0-1.925l-3.9-4.082a1.26,1.26,0,0,0-1.806-.033,1,1,0,0,0-.988,1V5.7l-2.945,3.083a1.407,1.407,0,0,0,0,1.925,1.26,1.26,0,0,0,1.839,0l1.106-1.158V20a1,1,0,0,0,1,1ZM-19.5,18a1.249,1.249,0,0,0,1.3-1.233,1.3,1.3,0,0,0-1.3-1.289h-1.3a2.6,2.6,0,0,1-2.717-2.465L-23.468,5A2.614,2.614,0,0,1-20.8,2.459H-5.2A2.646,2.646,0,0,1-2.5,5v8.012a2.619,2.619,0,0,1-2.7,2.5H-6.5a1.254,1.254,0,0,0-1.3,1.24A1.256,1.256,0,0,0-6.5,18h1.3A5.038,5.038,0,0,0,0,13.009V5A5.046,5.046,0,0,0-5.2,0H-20.8A5.178,5.178,0,0,0-26,5.155v7.853A5.038,5.038,0,0,0-20.8,18Z" transform="translate(25 28) rotate(90)" opacity="0.3"/>
    <g clip-path="url(#clip-path)">
      <g id="Colors_Primary" data-name="Colors/Primary">
        <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill=${color}/>
        <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill=${color}/>
      </g>
    </g>
  </svg>`
	return(<View style={[{width:size,height:size},props.style]}><SvgCss xml={xml} width="100%" height="100%" /></View>)
}
 
 export default LogoutIcon