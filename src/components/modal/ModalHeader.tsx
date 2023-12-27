import React, { FC, PropsWithChildren } from 'react';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { resolveStyleProp } from '../../helpers';
import { CloseIcon } from '../../icons/material/Close';
import { Text } from '../text';

export interface ModalHeaderProps extends ViewProps {
  label?: string;
  textStyle?: StyleProp<TextStyle>;
  touchableStyle?: StyleProp<ViewStyle>;
  touchableProps?: TouchableOpacityProps;
  onClose?: () => void;
  iconColor?: ColorValue;
  renderCloseIcon?: (fill?: ColorValue) => React.JSX.Element | null;
}

export const ModalHeader: FC<PropsWithChildren<ModalHeaderProps>> = ({
  label,
  textStyle,
  touchableStyle,
  touchableProps,
  onClose,
  iconColor,
  renderCloseIcon = (fill?: ColorValue) => <CloseIcon fill={fill} />,
  children,
  ...rest
}) => {
  return (
    <View style={[s.viewStyle, rest.style]}>
      {children ?? <Text style={[s.textStyle, textStyle]}>{label}</Text>}
      <TouchableOpacity
        {...touchableProps}
        style={[s.touchableStyle, touchableStyle, touchableProps?.style]}
        onPress={onClose}
      >
        {renderCloseIcon(iconColor ?? resolveStyleProp(textStyle)?.color)}
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  viewStyle: {
    padding: 16,
    paddingRight: 0,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableStyle: {
    marginLeft: 'auto',
    padding: 8,
    paddingRight: 16,
  },
  textStyle: {
    fontSize: 18,
    color: '#fff',
  },
});
