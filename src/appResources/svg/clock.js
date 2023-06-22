import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';
import {colors} from '../../appResources';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="26" viewBox="0 0 26 26">
<defs>
  <clipPath id="clip-path">
    <path id="Shape" d="M13,26A13,13,0,0,1,3.794,3.819a12.976,12.976,0,0,1,18.387,0A12.988,12.988,0,0,1,13,26ZM13,2A10.987,10.987,0,0,0,5.231,20.768,10.987,10.987,0,1,0,20.769,5.231,10.926,10.926,0,0,0,13,2Zm5.525,16.4h0L11.7,14.3V6.5h1.95v6.825L19.5,16.77l-.975,1.625Z" transform="translate(2 2)" fill="#fff"/>
  </clipPath>
</defs>
<g transform="translate(-2 -2)" clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary">
    <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill="#fff"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill="#fff"/>
  </g>
</g>
</svg>`;
const ClockIcon = props => {
  const size =props.size ?props.size:40
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </View>
  );
};
export default ClockIcon;
