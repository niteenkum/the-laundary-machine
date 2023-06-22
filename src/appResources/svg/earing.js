import React from 'react';
import {View} from 'react-native'
import { SvgCss } from 'react-native-svg'
import {colors } from '..'


const EarnIcon =(props)=>{
    const size =props.size ?props.size:40
    const color = props.color ?props.color :colors.primary
    const xml =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22">
    <defs>
      <clipPath id="clip-path">
        <path id="Wallet" d="M20,22H3a2.981,2.981,0,0,1-3-2.955V4A4,4,0,0,1,4,0H15.8a4,4,0,0,1,4,4V4.38a2.2,2.2,0,0,1,1.515.687A2.189,2.189,0,0,1,22,6.57V20.03A1.987,1.987,0,0,1,20,22ZM18,11.05a1.991,1.991,0,1,0,2,1.991A2,2,0,0,0,18,11.05ZM3.7,2.19a1.5,1.5,0,0,0-1.5,1.5v.69H17.6V3.69a1.5,1.5,0,0,0-1.5-1.5Z" transform="translate(4 4)" fill=${color}/>
      </clipPath>
    </defs>
    <g transform="translate(-4 -4)" clip-path="url(#clip-path)">
      <g id="Colors_Primary" data-name="Colors/Primary">
        <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill=${color}/>
        <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill=${color}/>
      </g>
    </g>
  </svg>`
	return(<View style={[{width:size,height:size},props.style]}><SvgCss xml={xml} width="100%" height="100%" /></View>)
}
 
 export default EarnIcon