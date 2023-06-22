import React from 'react';
import {View} from 'react-native';
import {SvgCss} from 'react-native-svg';
import colors from '../colors';
const xml = `<svg xmlns="http://www.w3.org/2000/svg" width="331" height="194" viewBox="0 0 331 194">
<path id="Fill_1" data-name="Fill 1" d="M168.852,0V15.237h5.812V74.53H182.3V56.271h4.021V51.86l8.8,4.411h2.155V45.3l10.524-15.9,10.523,15.9V82.6h4.94v7.249h7.289V60.268h6.041l-.252-12.275h6.991V44.477h7.083l1.09-21.261,1.089,21.261h1.362v3.516h1.838l-.674,32.875h1.3v-14.5l14.645-10.093V74.53H285.71V60.268h9.04V51.86l15.486,12.76V51.86L331,68.968V194H0V72.147H7.053L6.558,47.992h15V13.028h8.906V20.46h8.907v6.8h8.906V62.348h6.847V46.036h2.438v-1.8H73.448v1.8h2.439V80.048h4.965V36.336h2.439v-1.8H99.177v1.8h2.439V61.508h5.4V46.036h2.439v-1.8h15.886v1.8h2.44V51.86l5.1,6.407V69.009H139.7V62.348h3.518V46.036h12.975V36.379l5.532-5.508V15.237h5.813V0Z" fill=${colors.primary}/>
</svg>`;
const xml2 = `<svg xmlns="http://www.w3.org/2000/svg" width="172" height="126" viewBox="0 0 172 126">
<path id="Fill_1_Copy_2" data-name="Fill 1 Copy 2" d="M84.258,0h.683V9.9h3.021V20.051l2.874,3.577V29.9h6.742V40.494h1.828V44.82h3.542V37.844l2.649-4.161V29.9h1.268V28.732h8.255V29.9h1.267V39.948H119.2V23.6h1.267V22.431h8.255V23.6h1.267V51.99h2.58V29.9h1.267V28.732h8.255V29.9h1.267V40.494h3.558V17.708h4.628v-4.42h4.628V8.461H160.8V31.17h7.795l-.257,15.688H172V126H0V44.794L10.789,33.682V41.97l8.047-8.287v5.461h4.7v9.263h7.61V36.547l7.61,6.555v9.42h.678l-.35-21.352h.955V28.887h.708l.566-13.808.566,13.808h3.681V31.17h3.633l-.131,7.973H52.2V58.358h3.788V53.65h2.567V29.422L64.023,19.1l5.469,10.326v7.124h1.12l4.57-2.865v2.865h2.089v11.86h3.967V9.9h3.02Z" fill=${colors.primary}/>
</svg>`;
const xml3 = `<svg xmlns="http://www.w3.org/2000/svg" width="221" height="126" viewBox="0 0 221 126">
<path id="Fill_1_Copy" data-name="Fill 1 Copy" d="M108.262,0V9.9h-3.881v38.51h-5.1V36.547H96.6V33.682l-5.872,2.865H89.288V29.422L82.262,19.1,75.236,29.422V53.65h-3.3v4.708H67.071V39.143H63.038l.168-7.973H58.538V28.887H53.809l-.728-13.808-.727,13.808h-.91V31.17H50.217l.45,21.352H49.8V43.1l-9.778-6.555v11.86H30.239V39.143H24.2V33.682L13.863,41.97V33.682L0,44.794V126H221V46.858h-4.709l.33-15.688H206.606V8.461H200.66v4.827h-5.947v4.42h-5.946V40.494H184.2V29.9h-1.628V28.732H171.96V29.9h-1.628V51.99h-3.315V23.6h-1.629V22.431H154.782V23.6h-1.629V39.948h-3.609V29.9h-1.628V28.732H137.31V29.9h-1.629v3.782l-3.4,4.161V44.82h-4.552V40.494h-2.349V29.9h-8.663V23.628l-3.693-3.577V9.9H109.14V0Z" fill=${colors.primary}/>
</svg>
`;
const BackGroundIcon = props => {
  return (
    <View
      style={[
        {width: '100%', height: '100%', overflow: 'hidden'},
        props.style,
      ]}>
      <SvgCss
        style={{position: 'absolute'}}
        xml={xml}
        width="100%"
        height="100%"
      />
      <SvgCss
        style={{position: 'absolute', right: 0, bottom: -40}}
        xml={xml2}
        width="50%"
        height="100%"
      />
      <SvgCss
        style={{position: 'absolute', bottom: -50}}
        xml={xml3}
        width="60%"
        height="100%"
      />
    </View>
  );
};
export default BackGroundIcon;
