import React from 'react';
import {View} from 'react-native'
import { SvgCss } from 'react-native-svg'
import {colors } from '../../appResources'


const MenuIcon =(props)=>{
  const color =props.color?colors[props.color] : colors.primary
  const xml =`<svg id="icons_arrow-left" data-name="icons/arrow-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
<defs>
  <clipPath id="clip-path">
	<path id="XMLID_101_" d="M14.461,14.564H1.333a1.333,1.333,0,1,1,0-2.667H14.461a1.333,1.333,0,1,1,0,2.667Zm0-5.949H1.333a1.333,1.333,0,1,1,0-2.667H14.461a1.333,1.333,0,1,1,0,2.667Zm0-5.949H1.333A1.333,1.333,0,0,1,1.333,0H14.461a1.333,1.333,0,1,1,0,2.667Z" transform="translate(0 0)" fill=${color }/>
  </clipPath>
</defs>
<rect id="icons_arrow-left_background" data-name="icons/arrow-left background" width="24" height="24" fill="rgba(0,0,0,0)"/>
<rect id="Rectangle" width="24" height="24" fill="rgba(255,0,0,0)"/>
<path id="XMLID_101_2" data-name="XMLID_101_" d="M14.461,14.564H1.333a1.333,1.333,0,1,1,0-2.667H14.461a1.333,1.333,0,1,1,0,2.667Zm0-5.949H1.333a1.333,1.333,0,1,1,0-2.667H14.461a1.333,1.333,0,1,1,0,2.667Zm0-5.949H1.333A1.333,1.333,0,0,1,1.333,0H14.461a1.333,1.333,0,1,1,0,2.667Z" transform="translate(4 4.8)" fill="#242e42"/>
<g id="Group_63" data-name="Group 63" transform="translate(4 4.8)" clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary" transform="translate(-4 -4.8)">
	<rect id="Colors_Primary_background" data-name="Colors/Primary background" width="24" height="24" fill=${color}/>
	<rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill=${color}/>
  </g>
</g>
</svg>`
    const size =props.size ?props.size:10
	return(<View style={[{width:size,height:size},props.style]}>
        <SvgCss xml={xml} width="100%" height="100%" />
        </View>)
}
 export default MenuIcon