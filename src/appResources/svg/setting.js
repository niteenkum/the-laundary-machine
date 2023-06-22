import React from 'react';
import {View} from 'react-native'
import { SvgCss } from 'react-native-svg'
import {colors } from '..'


const SettingIcon =(props)=>{
    const size =props.size ?props.size:40
    const color = props.color ?props.color :colors.primary
    const xml =`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
    <defs>
      <clipPath id="clip-path">
        <path id="Settings" d="M12.921,24H11.069a1.226,1.226,0,0,1-1.181-.96L9.6,21.485a1.795,1.795,0,0,0-2.592-1.113l-1.248.893a1.23,1.23,0,0,1-1.584-.144l-1.3-1.287a1.222,1.222,0,0,1-.144-1.593l.893-1.172A1.8,1.8,0,0,0,2.516,14.4L.96,14.112A1.223,1.223,0,0,1,0,12.921V11.069A1.224,1.224,0,0,1,.96,9.888L2.516,9.6A1.8,1.8,0,0,0,3.629,7.008L2.736,5.76A1.223,1.223,0,0,1,2.88,4.166l1.3-1.286A1.228,1.228,0,0,1,5.76,2.736l1.21.893A1.8,1.8,0,0,0,9.6,2.516L9.888.96A1.222,1.222,0,0,1,11.078,0h1.853a1.225,1.225,0,0,1,1.181.96L14.4,2.516a1.925,1.925,0,0,0,.979,1.238,1.856,1.856,0,0,0,1.613-.125l1.248-.893a1.228,1.228,0,0,1,1.584.144l1.3,1.286a1.223,1.223,0,0,1,.144,1.594l-.893,1.171A1.8,1.8,0,0,0,21.485,9.6l1.555.288a1.224,1.224,0,0,1,.96,1.19v1.853a1.226,1.226,0,0,1-.96,1.181l-1.555.288a1.795,1.795,0,0,0-1.113,2.592l.893,1.248a1.222,1.222,0,0,1-.144,1.593l-1.3,1.287a1.231,1.231,0,0,1-1.507.144l-1.248-.893A1.8,1.8,0,0,0,14.4,21.485l-.3,1.555A1.226,1.226,0,0,1,12.921,24ZM12,7.68A4.32,4.32,0,1,0,16.32,12,4.325,4.325,0,0,0,12,7.68Z" transform="translate(3 3)" fill=${color}/>
      </clipPath>
    </defs>
    <g transform="translate(-3 -3)" clip-path="url(#clip-path)">
      <g id="Colors_Primary" data-name="Colors/Primary">
        <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill=${color}/>
        <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill=${color}/>
      </g>
    </g>
  </svg>`
	return(<View style={[{width:size,height:size},props.style]}><SvgCss xml={xml} width="100%" height="100%" /></View>)
}
 
 export default SettingIcon