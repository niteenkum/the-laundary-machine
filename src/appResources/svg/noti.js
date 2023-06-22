import React from 'react';
import {View} from 'react-native'
import { SvgCss } from 'react-native-svg'
import {colors } from '..'


const NotiIcon =(props)=>{
    const size =props.size ?props.size:40
    const color = props.color ?props.color :colors.primary
    const xml =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="25.639" viewBox="0 0 22 25.639">
    <defs>
      <clipPath id="clip-path">
        <path id="Shape" d="M10.985,25.639C9.144,25.639,8,24.628,8,23h5.97C13.97,24.628,12.826,25.639,10.985,25.639ZM22,22H0V21l3-3V11A7.271,7.271,0,0,1,4.484,5.778,7.464,7.464,0,0,1,9,3V2a2,2,0,0,1,4,0V3a7.466,7.466,0,0,1,4.516,2.778A7.268,7.268,0,0,1,19,11v7l3,3v1Z" transform="translate(4 2)" fill=${color}/>
      </clipPath>
    </defs>
    <g transform="translate(-4 -2)" clip-path="url(#clip-path)">
      <g id="Colors_Primary" data-name="Colors/Primary">
        <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill=${color}/>
        <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill=${color}/>
      </g>
    </g>
  </svg>`
	return(<View style={[{width:size,height:size},props.style]}><SvgCss xml={xml} width="100%" height="100%" /></View>)
}
 
 export default NotiIcon