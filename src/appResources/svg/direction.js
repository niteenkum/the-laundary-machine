import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgCss} from 'react-native-svg';
import colors from '../colors';
 
const DirectionIcon = props => {
  const size =props.size ?props.size:40
  const color=props.color?colors[props.color]:colors.white
  const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="30.449" height="26.52" viewBox="0 0 30.449 26.52">
  <path id="Shape" d="M29.838,1.94,16.744,25.27A1.286,1.286,0,0,1,15.5,26a1.915,1.915,0,0,1-.327-.042,1.324,1.324,0,0,1-.774-.469,1.279,1.279,0,0,1-.294-.824L14.4,12.309,1.391,8.853A1.414,1.414,0,0,1,.53,8.571,1.254,1.254,0,0,1,.039,7.83a1.306,1.306,0,0,1,.72-1.5L23.241,1.219,27.963.146A1.36,1.36,0,0,1,28.6,0a1.324,1.324,0,0,1,.981.4,1.244,1.244,0,0,1,.262,1.544Z" transform="matrix(1, -0.017, 0.017, 1, 0, 0.524)" fill=${color}/>
</svg>`;
  return (
    <TouchableOpacity disabled={!props.onPress} onPress={props.onPress} style={[{width: size, height: size}, props.style]}>
      <SvgCss xml={xml} width="100%" height="100%" />
    </TouchableOpacity>
  );
};
export default DirectionIcon;