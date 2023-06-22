import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.2" height="14.943" viewBox="0 0 19.2 14.943">
<defs>
  <clipPath id="clip-path">
    <path id="Path" d="M5.962.511.491,6.239A1.661,1.661,0,0,0,0,7.46,1.67,1.67,0,0,0,.491,8.682l5.471,5.749a1.613,1.613,0,0,0,2.356,0,1.8,1.8,0,0,0,0-2.465L5.695,9.217H17.531A1.708,1.708,0,0,0,19.2,7.471a1.708,1.708,0,0,0-1.669-1.745H5.695L8.324,2.977a1.8,1.8,0,0,0,0-2.465A1.619,1.619,0,0,0,5.962.511Z" fill="#ff6c00"/>
  </clipPath>
</defs>
<g id="Group_65" data-name="Group 65" clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary" transform="translate(-2.4 -4.8)">
    <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="24" height="24" fill="#61C6C1"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill="#61C6C1"/>
  </g>
</g>
</svg>`;

const BackIcon = props => {
  const size = props.size ? props.size : 40;
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </View>
  );
};
export default BackIcon;
