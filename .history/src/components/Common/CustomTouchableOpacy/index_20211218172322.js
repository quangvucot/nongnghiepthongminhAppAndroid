import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';
const CustomTouchableOpacy = ({
  onPress,
  title,
  danger,
  secondary,
  yellow,
  disabled,
  style,
  xanh,
  green,
  background,
  link,
  ...props
}) => {
  const bg =
    'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
  const getBGColor = () => {
    if (disabled) {
      return colors.gray;
    }
    if (yellow) {
      return colors.yellow;
    }
    if (green) {
      return colors.green;
    }
    if (danger) {
      return colors.red;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (xanh) {
      return colors.xanh;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBGColor()}, style]}>
      <View style={style.content}>
        <Text style={styles.content}>{title}</Text>
        {background && (
          <Image
            style={styles.contentImage}
            height={50}
            width={50}
            source={link}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacy;
