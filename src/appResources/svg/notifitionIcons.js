import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';
import { spacing, svgHeight } from '../others';

const Icons = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
     <path id="Shape" d="M12,24A12,12,0,0,1,3.515,3.515,12,12,0,1,1,20.485,20.485,11.922,11.922,0,0,1,12,24ZM5.811,10.688a.751.751,0,0,0-.53.216L4.22,11.947a.728.728,0,0,0,0,1.043l4.874,4.794a.76.76,0,0,0,1.061,0L18.78,9.3a.73.73,0,0,0,0-1.043L17.72,7.216a.76.76,0,0,0-1.061,0L9.625,14.134,6.341,10.9A.753.753,0,0,0,5.811,10.688Z" fill="#fff"/>
   </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
   <defs>
     <clipPath id="clip-path">
       <rect width="30" height="30" fill="none"/>
     </clipPath>
     <clipPath id="clip-path-2">
       <path id="Shape" d="M22,18H2a2,2,0,0,1-2-2V12a.5.5,0,0,1,.5-.5,2.5,2.5,0,0,0,0-5A.5.5,0,0,1,0,6V2A2,2,0,0,1,2,0H22a2,2,0,0,1,2,2V6a.5.5,0,0,1-.5.5,2.5,2.5,0,1,0,0,5,.5.5,0,0,1,.5.5v4A2,2,0,0,1,22,18ZM6.5,14a.5.5,0,0,0-.5.5v1a.5.5,0,1,0,1,0v-1A.5.5,0,0,0,6.5,14ZM16,9a2.3,2.3,0,0,0-2,2.5A2.3,2.3,0,0,0,16,14a2.3,2.3,0,0,0,2-2.5A2.3,2.3,0,0,0,16,9Zm.5-5a.5.5,0,0,0-.416.223l-6,9a.5.5,0,1,0,.832.554l6-9a.5.5,0,0,0-.139-.693A.507.507,0,0,0,16.5,4Zm-10,6a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,1,0v-1A.5.5,0,0,0,6.5,10ZM11,4A2.3,2.3,0,0,0,9,6.5,2.3,2.3,0,0,0,11,9a2.3,2.3,0,0,0,2-2.5A2.3,2.3,0,0,0,11,4ZM6.5,6a.5.5,0,0,0-.5.5v1a.5.5,0,1,0,1,0v-1A.5.5,0,0,0,6.5,6Zm0-4.126a.5.5,0,0,0-.5.5V3.5a.5.5,0,0,0,1,0V2.375A.5.5,0,0,0,6.5,1.875Z" transform="translate(3 6)" fill="#fff"/>
     </clipPath>
   </defs>
   <g id="Repeat_Grid_1" data-name="Repeat Grid 1" clip-path="url(#clip-path)">
     <g transform="translate(-27 -29)">
       <g id="icons_promo" data-name="icons/promo" transform="translate(27 29)">
         <rect id="Rectangle" width="30" height="30" fill="rgba(255,0,0,0)"/>
         <path id="Shape-2" data-name="Shape" d="M22,18H2a2,2,0,0,1-2-2V12a.5.5,0,0,1,.5-.5,2.5,2.5,0,0,0,0-5A.5.5,0,0,1,0,6V2A2,2,0,0,1,2,0H22a2,2,0,0,1,2,2V6a.5.5,0,0,1-.5.5,2.5,2.5,0,1,0,0,5,.5.5,0,0,1,.5.5v4A2,2,0,0,1,22,18ZM6.5,14a.5.5,0,0,0-.5.5v1a.5.5,0,1,0,1,0v-1A.5.5,0,0,0,6.5,14ZM16,9a2.3,2.3,0,0,0-2,2.5A2.3,2.3,0,0,0,16,14a2.3,2.3,0,0,0,2-2.5A2.3,2.3,0,0,0,16,9Zm.5-5a.5.5,0,0,0-.416.223l-6,9a.5.5,0,1,0,.832.554l6-9a.5.5,0,0,0-.139-.693A.507.507,0,0,0,16.5,4Zm-10,6a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,1,0v-1A.5.5,0,0,0,6.5,10ZM11,4A2.3,2.3,0,0,0,9,6.5,2.3,2.3,0,0,0,11,9a2.3,2.3,0,0,0,2-2.5A2.3,2.3,0,0,0,11,4ZM6.5,6a.5.5,0,0,0-.5.5v1a.5.5,0,1,0,1,0v-1A.5.5,0,0,0,6.5,6Zm0-4.126a.5.5,0,0,0-.5.5V3.5a.5.5,0,0,0,1,0V2.375A.5.5,0,0,0,6.5,1.875Z" transform="translate(3 6)"/>
         <g clip-path="url(#clip-path-2)">
           <g id="Colors_Primary" data-name="Colors/Primary">
             <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="30" height="30" fill="#fff"/>
             <rect id="Rectangle_3" data-name="Rectangle 3" width="30" height="30" fill="#fff"/>
           </g>
         </g>
       </g>
     </g>
   </g>
 </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
 <path id="Shape" d="M12,24A12,12,0,0,1,3.515,3.515a12,12,0,1,1,16.97,16.97A11.922,11.922,0,0,1,12,24ZM7.65,6.07a.421.421,0,0,0-.3.123L6.193,7.356a.429.429,0,0,0,0,.6l4.066,4.019L6.2,16.05a.427.427,0,0,0,0,.6l1.157,1.163a.432.432,0,0,0,.3.123.41.41,0,0,0,.3-.123L12,13.757l4.045,4.05a.437.437,0,0,0,.3.123.415.415,0,0,0,.3-.123L17.8,16.645a.414.414,0,0,0,.123-.3.425.425,0,0,0-.123-.3l-4.05-4.065,4.066-4.019a.43.43,0,0,0,0-.6L16.661,6.193a.427.427,0,0,0-.6,0l-4.055,4-4.055-4A.421.421,0,0,0,7.65,6.07Z" fill="#fff"/>
</svg>`,
`<svg id="icons_notification" data-name="icons/notification" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22" viewBox="0 0 22 22">
<defs>
  <clipPath id="clip-path">
    <path id="Wallet" d="M20,22H3a2.981,2.981,0,0,1-3-2.955V4A4,4,0,0,1,4,0H15.8a4,4,0,0,1,4,4V4.38a2.2,2.2,0,0,1,1.515.687A2.189,2.189,0,0,1,22,6.57V20.03A1.987,1.987,0,0,1,20,22ZM18,11.05a1.991,1.991,0,1,0,2,1.991A2,2,0,0,0,18,11.05ZM3.7,2.19a1.5,1.5,0,0,0-1.5,1.5v.69H17.6V3.69a1.5,1.5,0,0,0-1.5-1.5Z" fill="#fff"/>
  </clipPath>
</defs>
<path id="Wallet-2" data-name="Wallet" d="M20,22H3a2.981,2.981,0,0,1-3-2.955V4A4,4,0,0,1,4,0H15.8a4,4,0,0,1,4,4V4.38a2.2,2.2,0,0,1,1.515.687A2.189,2.189,0,0,1,22,6.57V20.03A1.987,1.987,0,0,1,20,22ZM18,11.05a1.991,1.991,0,1,0,2,1.991A2,2,0,0,0,18,11.05ZM3.7,2.19a1.5,1.5,0,0,0-1.5,1.5v.69H17.6V3.69a1.5,1.5,0,0,0-1.5-1.5Z" fill="#fff"/>
</svg>`
];
const NotiIcons = props => {
  const size = props.size ? props.size : svgHeight(25);
  const type = props.type ? props.type : 0;
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={Icons[type]} width="100%" height="100%" />
    </View>
  );
};
export default NotiIcons;
