import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';

const xml = `<svg id="Accessory" xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13">
<path id="Disclosure_Indicator" data-name="Disclosure Indicator" d="M0,1.5,1.5,0,8,6.5,1.5,13,0,11.5l5-5Z" fill="rgba(0,0,0,0.25)"/>
</svg>`;

const ArrowIcon = props => {
  const size =props.size ?props.size:30
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </View>
  );
};
export default ArrowIcon;