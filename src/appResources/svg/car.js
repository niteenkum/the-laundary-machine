import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';

const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="26" viewBox="0 0 38 26">
<path fill="#000" id="Icon" d="M34.2,26a4.149,4.149,0,0,1-.637-.05,3.827,3.827,0,0,1-3.162-3.8H7.6v.194A3.733,3.733,0,0,1,3.8,26a4.147,4.147,0,0,1-.636-.05A3.828,3.828,0,0,1,0,22.154V15.047a5.384,5.384,0,0,1,1.655-3.859,14.148,14.148,0,0,0,3.28-4.783l1.7-4.091A3.784,3.784,0,0,1,10.156,0H27.844a3.784,3.784,0,0,1,3.519,2.314l1.7,4.091a14.142,14.142,0,0,0,3.279,4.783A5.384,5.384,0,0,1,38,15.047v7.3A3.733,3.733,0,0,1,34.2,26ZM31.5,13A2.5,2.5,0,1,0,34,15.5,2.5,2.5,0,0,0,31.5,13Zm-25,0A2.5,2.5,0,1,0,9,15.5,2.5,2.5,0,0,0,6.5,13Zm8.875,1a1.506,1.506,0,0,0,0,3h8.25a1.505,1.505,0,0,0,0-3ZM9.782,2a1.929,1.929,0,0,0-1.8,1.136L6.062,7.817a.8.8,0,0,0,.08.764A.977.977,0,0,0,6.959,9H31.041a.977.977,0,0,0,.817-.418.805.805,0,0,0,.08-.764L30.013,3.136A1.928,1.928,0,0,0,28.219,2Z" transform="translate(0 0)"/>
</svg>`;

const CarIcon = props => {
  const size =props.size ?props.size:40
  return (
    <View style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </View>
  );
};
export default CarIcon;
