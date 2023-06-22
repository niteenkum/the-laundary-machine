import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15.6" viewBox="0 0 18 15.6">
<path id="Shape" d="M17.9,1.164l-7.857,14A.771.771,0,0,1,9.3,15.6a1.149,1.149,0,0,1-.2-.025.794.794,0,0,1-.464-.282.767.767,0,0,1-.177-.494L8.64,7.385.835,5.312a.848.848,0,0,1-.517-.169A.753.753,0,0,1,.023,4.7a.784.784,0,0,1,.432-.9L16.778.088A.816.816,0,0,1,17.157,0a.8.8,0,0,1,.589.238.746.746,0,0,1,.157.926Z" fill="#000"/>
</svg>
`;

const SenderIcon = props => {
  const size =props.size ?props.size:40
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </View>
  );
};
export default SenderIcon;