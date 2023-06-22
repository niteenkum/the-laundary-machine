import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';
import {spacing, svgHeight} from '../others';
import colors from '../colors';

const Icons = {
  pass: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19.933" height="19.933" viewBox="0 0 19.933 19.933">
  <defs>
    <clipPath id="clip-path">
      <path id="Shape" d="M9.966,19.933a9.967,9.967,0,1,1,9.967-9.966A9.978,9.978,0,0,1,9.966,19.933Zm2.591-3.611c-.13,0-.254,0-.369.014a5.771,5.771,0,0,0-1.566.46,5.406,5.406,0,0,1-.746.262c-.2.045-.389.1-.566.145a4.386,4.386,0,0,1-.991.193.789.789,0,0,0-.563.289,1.968,1.968,0,0,1-.462.348,8.466,8.466,0,0,0,7.361-.98C14.28,16.375,12.955,16.322,12.557,16.322ZM8.8,1.551h0a8.5,8.5,0,0,0-6.764,5.37c.095.01.207.018.337.028C3.1,7,4.19,7.085,4.349,7.533c.09.251-.049.5-.226.821a2.712,2.712,0,0,0-.436,1.373c0,.658.442.954.87,1.241.362.242.7.47.7.9A8.62,8.62,0,0,0,5.5,13.58a4.019,4.019,0,0,1,.1.6c0,.325,1.331,2.009,1.8,2.009a.162.162,0,0,0,.124-.057c.2-.219.118-1.016.054-1.657a5.821,5.821,0,0,1-.048-.692,12.749,12.749,0,0,1,.3-1.557,2.4,2.4,0,0,1,1.417-1.55,1.785,1.785,0,0,0,.949-.842,2.276,2.276,0,0,0,.006-1.957c-.53-.943-1.914-1.207-2.579-1.334a3.006,3.006,0,0,1-.351-.077,3.281,3.281,0,0,0-1.012-.142,2.191,2.191,0,0,0-.615.068.269.269,0,0,1-.087.013.888.888,0,0,1-.551-.288.905.905,0,0,1-.3-.594c0-.258.407-.656.837-1.077a5.7,5.7,0,0,0,.789-.874,1.733,1.733,0,0,1,.678-.64,4.386,4.386,0,0,0,.719-.531,2.776,2.776,0,0,1,.429-.3A1.593,1.593,0,0,0,8.8,1.551Zm5.48,1.873a.149.149,0,0,1,.117.045c.489.543.106.932-.339,1.381a1.83,1.83,0,0,0-.6,2.367A2.01,2.01,0,0,0,15.439,8.55c.809.014,1.173,1.338,1.261,2.118a7.549,7.549,0,0,1-.324,2.888,1.357,1.357,0,0,0,.331,1.583A8.5,8.5,0,0,0,12.666,1.91c-.247.3-.361.517-.348.658.081.812.339,1.206.789,1.206A1.8,1.8,0,0,0,13.76,3.6l.083-.035A1.348,1.348,0,0,1,14.279,3.424Z" transform="translate(0 0)" fill="#030104"/>
    </clipPath>
  </defs>
  <g id="Group_77" data-name="Group 77" clip-path="url(#clip-path)">
    <g id="Colors_Primary" data-name="Colors/Primary" transform="translate(-1.533 -1.533)">
      <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="23" height="23" fill="rgba(0,0,0,0)"/>
      <rect id="Rectangle_3" data-name="Rectangle 3" width="23" height="23" fill="#fff"/>
    </g>
  </g>
</svg>`,
cart :`<svg id="icons_order" data-name="icons/order" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
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
</svg>`,
Terms :`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="17.634" height="13.201" viewBox="0 0 17.634 13.201">
<defs>
  <clipPath id="clip-path">
    <path id="Shape" d="M2.777,13.2a.956.956,0,0,1,0-1.913H15.256a.956.956,0,0,1,0,1.913Zm12.857-3.024H2l-.914-7.2A1.522,1.522,0,0,1,0,1.526,1.54,1.54,0,0,1,1.55,0,1.54,1.54,0,0,1,3.1,1.526,1.512,1.512,0,0,1,2.528,2.7L5.2,4.927,7.838,2.7a1.512,1.512,0,0,1-.571-1.174,1.55,1.55,0,0,1,3.1,0A1.512,1.512,0,0,1,9.8,2.7l2.638,2.227L15.1,2.7a1.512,1.512,0,0,1-.571-1.174,1.55,1.55,0,0,1,3.1,0A1.52,1.52,0,0,1,16.55,2.975l-.914,7.2h0ZM7.267,7.633a1.55,1.55,0,1,0,1.55-1.526A1.54,1.54,0,0,0,7.267,7.633Zm5.166.509a.517.517,0,1,0,.516-.509A.513.513,0,0,0,12.433,8.141Zm-8.266,0a.517.517,0,1,0,.517-.509A.514.514,0,0,0,4.167,8.141Zm4.062-.164a.591.591,0,1,1,.588.531A.562.562,0,0,1,8.229,7.978Z" transform="translate(0 0)" fill="#fff"/>
  </clipPath>
</defs>
<g id="Group_79" data-name="Group 79" clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary" transform="translate(-3.067 -4.6)">
    <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="23" height="23" fill="rgba(0,0,0,0)"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="23" height="23" fill="#fff"/>
  </g>
</g>
</svg>`,
Qus:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18.4" height="18.4" viewBox="0 0 18.4 18.4">
<defs>
  <clipPath id="clip-path">
    <path id="Shape" d="M9.2,18.4A9.2,9.2,0,0,1,2.694,2.694,9.2,9.2,0,1,1,15.705,15.705,9.14,9.14,0,0,1,9.2,18.4Zm0-5.75a1.15,1.15,0,1,0,1.15,1.15A1.151,1.151,0,0,0,9.2,12.65Zm0-7.283A1.535,1.535,0,0,1,10.734,6.9c0,.612-.376.99-.989,1.557l0,0a3.13,3.13,0,0,0-1.308,2.273H9.966c0-.376.311-.682.819-1.15A3.569,3.569,0,0,0,12.267,6.9a3.067,3.067,0,0,0-6.133,0H7.667A1.535,1.535,0,0,1,9.2,5.367Z" transform="translate(0 0)"/>
  </clipPath>
</defs>
<g id="Group_80" data-name="Group 80" transform="translate(0 0)" clip-path="url(#clip-path)">
  <g id="Colors_Primary" data-name="Colors/Primary" transform="translate(-2.3 -2.3)">
    <rect id="Colors_Primary_background" data-name="Colors/Primary background" width="23" height="23" fill="rgba(0,0,0,0)"/>
    <rect id="Rectangle_3" data-name="Rectangle 3" width="23" height="23" fill="#fff"/>
  </g>
</g>
</svg>`
};
const SettingIcons = props => {
  const size = props.size ? props.size : svgHeight(30);
  const type = props.type ? props.type : 'pass';
  const backcolor = props.backColor ? colors[props.backColor] : colors.card;
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: spacing(5),
          marginLeft: spacing(10),
          padding: spacing(5),
          backgroundColor:backcolor
        },
        props.style,
      ]}>
      <SvgCss xml={Icons[type]} width="100%" height="100%" />
    </View>
  );
};
export default SettingIcons;
