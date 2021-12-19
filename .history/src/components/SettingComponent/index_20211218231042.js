import React from 'react';
import {View, Text} from 'react-native';
import CustomTouchableOpacy from '../Common/CustomTouchableOpacy';

const SettingComponent = () => {
  return (
    <View>
      <CustomTouchableOpacy
        title={'Đổi Mật Khẩu'}
        secondary
        style={{height: 40, marginVertical: 15}}
      />
    </View>
  );
};

export default SettingComponent;
