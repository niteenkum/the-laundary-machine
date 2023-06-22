import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgCss} from 'react-native-svg';
import colors from '../colors';
 
const PhoneIcon = props => {
  const size =props.size ?props.size:40
  const color=props.color?colors[props.color]:colors.white
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18.783" height="18.771" viewBox="0 0 18.783 18.771">
<defs>
  <clipPath id="clip-path">
    <path id="Shape" d="M7.61,4.307C7.365,1.5,4.432.115,4.307.059a.623.623,0,0,0-.372-.05C.548.571.039,2.542.018,2.624a.634.634,0,0,0,.013.346C4.071,15.5,12.466,17.827,15.226,18.591c.212.059.388.106.521.15a.61.61,0,0,0,.2.031.633.633,0,0,0,.265-.058,5.186,5.186,0,0,0,2.566-4.042.638.638,0,0,0-.061-.392,6.071,6.071,0,0,0-3.98-2.771.625.625,0,0,0-.566.134,8.552,8.552,0,0,1-2.717,1.7c-3.647-1.783-5.683-5.2-5.76-5.853A6.863,6.863,0,0,1,7.443,4.8.639.639,0,0,0,7.61,4.307Z" transform="translate(0 0)"/>
  </clipPath>
</defs>
<g id="Group_67" data-name="Group 67" clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary" transform="translate(-2.608 -2.613)">
    <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="24" height="24" fill="rgba(0,0,0,0)"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24" fill=${color}/>
  </g>
</g>
</svg>`;
  return (
    <TouchableOpacity disabled={!props.onPress} onPress={props.onPress} style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </TouchableOpacity>
  );
};
export default PhoneIcon;