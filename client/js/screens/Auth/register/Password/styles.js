import {StyleSheet} from 'react-native';
import {
  deviceWidth,
  horizontalMargin,
  smallDevice,
} from '../../../../components/device';
import {WHITE} from '../../../../components/colors';

export default StyleSheet.create({
  textInput: {
    width: deviceWidth - 2 * horizontalMargin,
    marginTop: smallDevice() ? 0 : 12,
    backgroundColor: WHITE,
  },
});
