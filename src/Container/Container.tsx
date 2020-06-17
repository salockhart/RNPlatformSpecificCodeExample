import React from 'react';
import {View} from 'react-native';

const Container: React.FC = ({children}) => {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      {children}
    </View>
  );
};

export default Container;
