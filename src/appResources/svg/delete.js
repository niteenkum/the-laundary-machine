import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';
import {colors} from '../../appResources';

const xml = `<svg id="icons_contact_copy_2" data-name="icons/contact copy 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
<defs>
  <clipPath id="clip-path">
    <path id="Shape" d="M11.7,18.4H4.4a2.014,2.014,0,0,1-1.955-1.956L1.639,3.45H.575a.575.575,0,1,1,0-1.151H4.6V1.7A1.7,1.7,0,0,1,6.3,0H9.8a1.7,1.7,0,0,1,1.7,1.7v.6h4.025a.575.575,0,1,1,0,1.151H14.461l-.776,12.995A2.009,2.009,0,0,1,11.7,18.4ZM10.925,4.6a.575.575,0,0,0-.575.547L9.775,15.5a.579.579,0,0,0,.148.415.567.567,0,0,0,.4.189h.029a.576.576,0,0,0,.575-.546L11.5,5.2a.575.575,0,0,0-.546-.6ZM8.05,4.6a.576.576,0,0,0-.575.575v10.35a.575.575,0,1,0,1.15,0V5.175A.575.575,0,0,0,8.05,4.6Zm-2.875,0H5.147a.576.576,0,0,0-.546.6l.575,10.35a.575.575,0,0,0,.574.546h.03a.567.567,0,0,0,.4-.189.575.575,0,0,0,.148-.415L5.75,5.147A.575.575,0,0,0,5.175,4.6ZM6.3,1.15A.547.547,0,0,0,5.75,1.7v.6h4.6V1.7A.546.546,0,0,0,9.8,1.15Z" transform="translate(0 0)"/>
  </clipPath>
</defs>
<rect id="icons_contact_copy_2_background" data-name="icons/contact copy 2 background" width="24" height="24" fill="rgba(0,0,0,0)"/>
<rect id="Rectangle" width="24" height="24" fill="rgba(255,0,0,0)"/>
<path id="Shape-2" data-name="Shape" d="M11.7,18.4H4.4a2.014,2.014,0,0,1-1.955-1.956L1.639,3.45H.575a.575.575,0,1,1,0-1.151H4.6V1.7A1.7,1.7,0,0,1,6.3,0H9.8a1.7,1.7,0,0,1,1.7,1.7v.6h4.025a.575.575,0,1,1,0,1.151H14.461l-.776,12.995A2.009,2.009,0,0,1,11.7,18.4ZM10.925,4.6a.575.575,0,0,0-.575.547L9.775,15.5a.579.579,0,0,0,.148.415.567.567,0,0,0,.4.189h.029a.576.576,0,0,0,.575-.546L11.5,5.2a.575.575,0,0,0-.546-.6ZM8.05,4.6a.576.576,0,0,0-.575.575v10.35a.575.575,0,1,0,1.15,0V5.175A.575.575,0,0,0,8.05,4.6Zm-2.875,0H5.147a.576.576,0,0,0-.546.6l.575,10.35a.575.575,0,0,0,.574.546h.03a.567.567,0,0,0,.4-.189.575.575,0,0,0,.148-.415L5.75,5.147A.575.575,0,0,0,5.175,4.6ZM6.3,1.15A.547.547,0,0,0,5.75,1.7v.6h4.6V1.7A.546.546,0,0,0,9.8,1.15Z" transform="translate(4 3.2)" fill="#202020"/>
<g id="Group_68" data-name="Group 68" transform="translate(4 3.2)" clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary" transform="translate(-4 -3.2)">
    <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="24" height="24"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="24" height="24"/>
  </g>
</g>
</svg>`;
const DeleteIcon = props => {
  const size =props.size ?props.size:40
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </View>
  );
};
export default DeleteIcon;