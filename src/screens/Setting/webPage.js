import 'react-native-get-random-values';
import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {Background} from '../../components';
import {colors} from '../../appResources';

import {Environment} from '../../config/environment';
const {WEB_URL} = Environment;
const WAB = [
  '/privacy-policy',
  '/app-terms-conditions',
  // '/storage/pages/licenses.html',
];

const WebPage = props => {
  const [loading, setLoading] = useState(false);
  const [header, setHeader] = useState('Privacy Policy');
  const [pageid, setPageID] = useState(0);
  useEffect(() => {
    const {Header = 'Privacy Policy', id = 0} = props.route.params;
    setHeader(Header);
    setPageID(id);
  }, []);
  const onError = () => {
    setLoading(false);
  };
  const onLoadEnd = () => {
    setLoading(false);
  };
  const onLoadStart = () => {
    setLoading(true);
  };

  const WebUrl = WEB_URL + WAB[pageid];
  return (
    <Background
      {...props}
      headerTitle={header}
      headerBack
      headerRight={() => <View />}>
      <View style={{width: '100%', backgroundColor: colors.gray3, height: 1}} />
      <WebView
        source={{uri: WebUrl}}
        onError={onError}
        onLoadEnd={onLoadEnd}
        onLoadStart={onLoadStart}
        renderLoading={{startInLoadingState: true}}
        style={{flex: 1, marginLeft: 10, marginRight: 10}}
      />
      {loading ? (
        <Text style={{position: 'absolute', top: 20, left: '40%'}}>
          Loading...
        </Text>
      ) : null}
    </Background>
  );
};

export default WebPage;
