import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';
 

const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
<defs>
  <clipPath id="clip-path">
    <rect width="30" height="30" fill="none"/>
  </clipPath>
  <clipPath id="clip-path-2">
    <path id="Shape" d="M26.137,21a12.324,12.324,0,0,0,1.7-5.774H25.712v-1.05h2.143A12.394,12.394,0,0,0,26.4,8.833L24.553,9.877l-.535-.913,1.835-1.038A12.86,12.86,0,0,0,24.1,5.788a13.183,13.183,0,0,0-2.217-1.74L20.823,5.839l-.93-.525,1.051-1.791a13.055,13.055,0,0,0-5.41-1.41V4.2H14.463V2.114a12.967,12.967,0,0,0-5.41,1.41l1.058,1.79-.93.525L8.123,4.048a13.275,13.275,0,0,0-2.217,1.74A12.716,12.716,0,0,0,4.152,7.926L5.993,8.964l-.535.913L3.617,8.833a12.382,12.382,0,0,0-1.461,5.342h2.13v1.05H2.156A12.348,12.348,0,0,0,3.864,21H1.446A14.4,14.4,0,0,1,0,14.7,14.854,14.854,0,0,1,15,0,14.853,14.853,0,0,1,30,14.7,14.4,14.4,0,0,1,28.553,21ZM13,17.75a2.135,2.135,0,0,1,2-2.25c.075,0,.149.007.226.014L20.5,11l.5.563L16.988,17.5c.006.086.013.168.013.253A2.134,2.134,0,0,1,15,20,2.134,2.134,0,0,1,13,17.75Z" transform="translate(0 4)"/>
  </clipPath>
</defs>
<g id="icons_speed" data-name="icons/speed" clip-path="url(#clip-path)">
  <rect id="Rectangle" width="30" height="30" fill="rgba(255,0,0,0)"/>
  <path id="Shape-2" data-name="Shape" d="M26.137,21a12.324,12.324,0,0,0,1.7-5.774H25.712v-1.05h2.143A12.394,12.394,0,0,0,26.4,8.833L24.553,9.877l-.535-.913,1.835-1.038A12.86,12.86,0,0,0,24.1,5.788a13.183,13.183,0,0,0-2.217-1.74L20.823,5.839l-.93-.525,1.051-1.791a13.055,13.055,0,0,0-5.41-1.41V4.2H14.463V2.114a12.967,12.967,0,0,0-5.41,1.41l1.058,1.79-.93.525L8.123,4.048a13.275,13.275,0,0,0-2.217,1.74A12.716,12.716,0,0,0,4.152,7.926L5.993,8.964l-.535.913L3.617,8.833a12.382,12.382,0,0,0-1.461,5.342h2.13v1.05H2.156A12.348,12.348,0,0,0,3.864,21H1.446A14.4,14.4,0,0,1,0,14.7,14.854,14.854,0,0,1,15,0,14.853,14.853,0,0,1,30,14.7,14.4,14.4,0,0,1,28.553,21ZM13,17.75a2.135,2.135,0,0,1,2-2.25c.075,0,.149.007.226.014L20.5,11l.5.563L16.988,17.5c.006.086.013.168.013.253A2.134,2.134,0,0,1,15,20,2.134,2.134,0,0,1,13,17.75Z" transform="translate(0 4)"/>
  <g clip-path="url(#clip-path-2)">
    <g id="Colors_Primary" data-name="Colors/Primary">
      <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill="rgba(0,0,0,0)"/>
      <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill="#fff"/>
    </g>
  </g>
</g>
</svg>`;
const MeterIcon = props => {
  const size =props.size ?props.size:40
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </View>
  );
};
export default MeterIcon;
