import React, { Component } from 'react';
import { View } from 'react-native';

import WebView from 'react-native-webview';

type Props = {};
type State = {};

export default class NativeWebpage extends Component<Props, State> {
  state = {};

  render() {
    return (
      <View style={{ height: 400 }}>
        <WebView
          // source={{ uri: 'https://infinite.red' }}
          // source={{ uri: 'http://localhost:8000', headers: {cookie: 'xs=foobar;attribute=1;path=/;,datr=blahhhh'} }}
          source={{ uri: 'http://localhost:8000' }}
          cookies={['xs=foobar;attribute=1;path=/;', 'datr=omg']}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
    );
  }
}
