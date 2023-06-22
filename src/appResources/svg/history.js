import React from 'react';
import {View} from 'react-native'
import { SvgCss } from 'react-native-svg'
import {colors } from '..'


const HomeIcon =(props)=>{
    const size =props.size ?props.size:40
    const color = props.color ?props.color :colors.primary
    const xml =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <clipPath id="clip-path">
        <path id="Shape" d="M0,12c0-1.235,2.437-1.352,2.489,0C2.7,17.379,6.619,21.5,12,21.5A9.353,9.353,0,0,0,21.524,12,9.391,9.391,0,0,0,12,2.452,9.625,9.625,0,0,0,4.286,6L6,7.718a.5.5,0,0,1-.353.853H.2a.2.2,0,0,1-.2-.2V2.921a.5.5,0,0,1,.853-.354L2.726,4.44A11.96,11.96,0,1,1,0,12Zm8,3a1.015,1.015,0,0,1-1-1.016.951.951,0,0,1,1-.96h4.04L12,7c0-.545,0-1,1-1s1,.448,1,1v6.026A2.151,2.151,0,0,1,11.977,15Z" transform="translate(3 3)" fill=${color}/>
      </clipPath>
      <clipPath id="clip-path-2">
        <rect width="30" height="30" fill="none"/>
      </clipPath>
    </defs>
    <g transform="translate(-3 -3)" clip-path="url(#clip-path)">
      <g id="Colors_Primary" data-name="Colors/Primary" clip-path="url(#clip-path-2)">
        <g id="Colors_Primary-2" data-name="Colors/Primary">
          <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill=${color}/>
          <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill=${color}/>
        </g>
      </g>
    </g>
  </svg>`
	return(<View style={[{width:size,height:size},props.style]}><SvgCss xml={xml} width="100%" height="100%" /></View>)
}
 
 export default HomeIcon