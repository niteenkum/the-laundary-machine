import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgCss} from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32.266" height="25.096" viewBox="0 0 32.266 25.096">
<defs>
  <clipPath id="clip-path">
    <path id="Shape" d="M29.66,25.1H2.607A2.627,2.627,0,0,1,0,22.455V6.6A2.578,2.578,0,0,1,2.607,4H7.96L11.022.862V.854A2.545,2.545,0,0,1,12.929,0h6.517a2.519,2.519,0,0,1,1.8.767l.017.016c.006,0,.021.015.022.017L24.424,4H29.66a2.608,2.608,0,0,1,2.606,2.6V22.455A2.627,2.627,0,0,1,29.66,25.1ZM16.133,6.613A7.262,7.262,0,1,0,23.3,13.875,7.222,7.222,0,0,0,16.133,6.613Z" transform="translate(0 0)"/>
  </clipPath>
</defs>
<g id="Group_70" data-name="Group 70" transform="translate(0)" clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary" transform="translate(-5.867 -8.8)">
    <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="44" height="44" fill="rgba(0,0,0,0)"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="44" height="44" fill="#ffd428"/>
  </g>
</g>
</svg>
`;

const CameraIcon = props => {
  const size =props.size ?props.size:40
  return (
    <TouchableOpacity onPress={props.onPress} style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </TouchableOpacity>
  );
};
export default CameraIcon;