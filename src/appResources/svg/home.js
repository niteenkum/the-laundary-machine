import React from 'react';
import {View} from 'react-native'
import { SvgCss } from 'react-native-svg'
import {colors } from '../../appResources'


const HomeIcon =(props)=>{
    const size =props.size ?props.size:40
    const color = props.color ?props.color :colors.primary
    const xml =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.541" height="24" viewBox="0 0 20.541 24">
    <defs>
      <clipPath id="clip-path">
        <path id="Shape" d="M15.77,24h-11a2.5,2.5,0,0,1-2.5-2.5V11.419H1.494A1.5,1.5,0,0,1,.459,8.84L9.23.419a1.5,1.5,0,0,1,2.08,0L20.08,8.84a1.5,1.5,0,0,1-1.04,2.579H18.27V21.5A2.5,2.5,0,0,1,15.77,24Zm-5.5-10.5a2,2,0,1,0,2,2A2,2,0,0,0,10.27,13.5Z" transform="translate(5 3)" fill=${color}/>
      </clipPath>
    </defs>
    <g transform="translate(-4.999 -3)" clip-path="url(#clip-path)">
      <g id="Colors_Primary" data-name="Colors/Primary">
        <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill=${color}/>
        <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill=${color}/>
      </g>
    </g>
  </svg>`
	return(<View style={[{width:size,height:size},props.style]}><SvgCss xml={xml} width="100%" height="100%" /></View>)
}
 
 export default HomeIcon