import * as React from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Bounceable, BounceableProps } from '../bounceable';
import { CheckBoldIcon } from '../../icons/material/CheckBold';

type IconProps = { height: number; width: number };

export interface CheckboxProps extends Omit<BounceableProps, 'onPress'> {
  size?: number;
  radius?: number;
  checked?: boolean;
  onPress?: (checked: boolean) => void;
  fillColor?: string;
  unFillColor?: string;

  renderIcon?: () => JSX.Element;
  iconContainerStyle?: StyleProp<ViewStyle>;
  innerIconContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  size = 24,
  radius = 8,
  checked,
  onPress,
  style,

  fillColor = '#ffc484',
  unFillColor = 'transparent',

  renderIcon = (props: IconProps) => <CheckBoldIcon {...props} />,
  iconContainerStyle,
  innerIconContainerStyle,

  bounceEffectIn = 0.9,
  bounceEffectOut = 1,
  bounceVelocityIn = 0.1,
  bounceVelocityOut = 0.4,
  bouncinessIn = 20,
  bouncinessOut = 20,

  ...rest
}) => {
  const [_checked, setChecked] = useState(!!checked);

  useEffect(() => {
    setChecked(!!checked);
  }, [checked]);

  const handlePress = useCallback(() => {
    onPress?.(!_checked);
    setChecked(state => !state);
  }, [_checked, onPress]);

  const iconContainer = useMemo(
    () => [
      getIconContainerStyle(_checked, fillColor, unFillColor, radius),
      iconContainerStyle,
    ],
    [_checked, fillColor, iconContainerStyle, radius, unFillColor],
  );

  const innerIconContainer = useMemo(
    () => [
      getInnerIconContainerStyle(fillColor, radius),
      innerIconContainerStyle,
    ],
    [fillColor, innerIconContainerStyle, radius],
  );

  const _style = useMemo(
    () => [{ width: size, height: size }, style],
    [size, style],
  );

  return (
    <Bounceable
      bounceEffectIn={bounceEffectIn}
      bounceEffectOut={bounceEffectOut}
      bounceVelocityIn={bounceVelocityIn}
      bounceVelocityOut={bounceVelocityOut}
      bouncinessIn={bouncinessIn}
      bouncinessOut={bouncinessOut}
      {...rest}
      style={_style}
      onPress={handlePress}
    >
      <View style={iconContainer}>
        <View style={innerIconContainer}>
          {_checked && renderIcon({ height: size * 0.7, width: size * 0.7 })}
        </View>
      </View>
    </Bounceable>
  );
};

const getIconContainerStyle = (
  checked: boolean,
  fillColor: string,
  unFillColor: string,
  radius: number = 0,
): ViewStyle => ({
  width: '100%',
  height: '100%',
  borderRadius: radius,
  backgroundColor: checked ? fillColor : unFillColor,
  alignItems: 'center',
  justifyContent: 'center',
});
const getInnerIconContainerStyle = (
  fillColor: string,
  radius: number = 0,
): ViewStyle => ({
  width: '100%',
  height: '100%',
  borderWidth: 1,
  borderColor: fillColor,
  borderRadius: radius,
  alignItems: 'center',
  justifyContent: 'center',
});
