import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';

const xml = `<svg id="icons_order" data-name="icons/order" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
<defs>
  <clipPath id="clip-path">
    <path id="Shape" d="M14.142,25h0L11,22.657,7.857,25,4.714,22.657,1.467,25H0V3.125A3.137,3.137,0,0,1,3.143,0H18.857A3.137,3.137,0,0,1,22,3.125V25H20.533l-3.248-2.344L14.143,25ZM11,20.625h0L14,23l3-2.375,3,2.254V3.49A1.5,1.5,0,0,0,18.5,2H3.5A1.5,1.5,0,0,0,2,3.49V22.9l3-2.278L8,23l3-2.375ZM16.25,17H5.75C5.337,17,5,16.552,5,16s.336-1,.75-1h10.5c.413,0,.75.449.75,1S16.664,17,16.25,17Zm0-5H5.75C5.337,12,5,11.551,5,11s.336-1,.75-1h10.5c.413,0,.75.449.75,1S16.664,12,16.25,12Zm0-5H5.75C5.337,7,5,6.552,5,6s.336-1,.75-1h10.5c.413,0,.75.449.75,1S16.664,7,16.25,7Z" transform="translate(4 2)" fill="#fff"/>
  </clipPath>
</defs>
<rect id="Rectangle" width="30" height="30" fill="rgba(255,0,0,0)"/>
<path id="Shape-2" data-name="Shape" d="M14.142,25h0L11,22.657,7.857,25,4.714,22.657,1.467,25H0V3.125A3.137,3.137,0,0,1,3.143,0H18.857A3.137,3.137,0,0,1,22,3.125V25H20.533l-3.248-2.344L14.143,25ZM11,20.625h0L14,23l3-2.375,3,2.254V3.49A1.5,1.5,0,0,0,18.5,2H3.5A1.5,1.5,0,0,0,2,3.49V22.9l3-2.278L8,23l3-2.375ZM16.25,17H5.75C5.337,17,5,16.552,5,16s.336-1,.75-1h10.5c.413,0,.75.449.75,1S16.664,17,16.25,17Zm0-5H5.75C5.337,12,5,11.551,5,11s.336-1,.75-1h10.5c.413,0,.75.449.75,1S16.664,12,16.25,12Zm0-5H5.75C5.337,7,5,6.552,5,6s.336-1,.75-1h10.5c.413,0,.75.449.75,1S16.664,7,16.25,7Z" transform="translate(4 2)"/>
<g clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary">
    <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill="#fff"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill="#fff"/>
  </g>
</g>
</svg>`;

const CartIcon = props => {
  const size =props.size ?props.size:40
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </View>
  );
};
export default CartIcon;
