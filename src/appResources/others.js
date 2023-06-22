import { Dimensions, Platform, StatusBar , PixelRatio} from 'react-native';
import { ifIphoneX, getStatusBarHeight } from '../utils/isIphoneX';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

 
export const fonts = {
  reguler:'OpenSans-Regular',
  bold:'OpenSans-Bold',
  semibold :'OpenSans-SemiBold'
}

export const isIphoneX = () => {
    const dimen = Dimensions.get('window');
    return isIos
      ? dimen.height === 812 ||
          dimen.width === 812 ||
          (dimen.height === 896 || dimen.width === 896)
      : dimen.height > 736;
  };
  
  export const isIphone6 = () => {
    const dimen = Dimensions.get('window');
    return dimen.height > 600 && dimen.height < 750;
  };
  
  const widthPercentageToDP = (
    iphoneWidthPercent,
    androidWidthPercent = iphoneWidthPercent,
  ) => {
    const elemWidth =
      typeof iphoneWidthPercent === 'number'
        ? isIos
          ? iphoneWidthPercent
          : androidWidthPercent
        : parseFloat(isIos ? iphoneWidthPercent : androidWidthPercent);
    return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
  };
  
  export const HeightPercentageToDP = (
    iphoneHeightPercent,
    androidHeightPercent = iphoneHeightPercent,
  ) => {
    const elemHeight =
      typeof iphoneHeightPercent === 'number'
        ? isIos
          ? iphoneHeightPercent
          : androidHeightPercent
        : parseFloat(isIos ? iphoneHeightPercent : androidHeightPercent);
    return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
  };
  
  export const deviceDimensions = {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    WPTDP: widthPercentageToDP,
    HPTDP: HeightPercentageToDP,
  };
  
  export const heiWidScale = 0.125;
  
  export const scales = (size, type = 'height') => {
    if (type == 'height') {
      return deviceDimensions.HPTDP(heiWidScale * size);
    }
    return deviceDimensions.WPTDP(heiWidScale * size);
  };
  
  const iphoneXBottomSpace = scales(35);
 
 
  export const dimensions = {
    statusBar: getStatusBar(true),
    topExtraSpace: 6,
    topSpace: this.statusBar + 6,
    roundBtnHeight:
      Math.min(deviceDimensions.height, deviceDimensions.width) * 0.2,
    bottomButtonHeight: 60,
    numKeyboardHeight: deviceDimensions.height * 0.67,
    iphoneXBottomSpace,
    tabBarHeight: deviceDimensions.HPTDP(isIphoneX() ? '7.5%' : '10%', '10%'),
    safeHeight:
      deviceDimensions.height -
      getStatusBar(true) -
      (isIphoneX() ? iphoneXBottomSpace : 0),
  };
  
  function getStatusBar() {
    return !isIos ? StatusBar.currentHeight : getStatusBarHeight();
  }
  
  export const fontScale = 0.123;
  
  export const fontSize = size => {
    return deviceDimensions.HPTDP(fontScale * size);
  };
  
  
  
  export const marginPaddingScale = 0.125;
  export const svgWidthScale = 0.122;
  export const svgHeightScale = 0.126;
  
  export const spacing = size => {
    return deviceDimensions.HPTDP(marginPaddingScale * size);
  };
  
  export const svgWidth = size => {
    return deviceDimensions.HPTDP(svgWidthScale * size);
  };
  
  export const svgHeight = size => {
    return deviceDimensions.HPTDP(svgHeightScale * size);
  };
  
  export const stringToHslColor = (str = 'Cash', s = 30, l = 60) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var h = hash % 360;
    return 'hsl('+h+', '+s+'%, '+l+'%)';
  };
  
 