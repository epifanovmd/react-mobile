import React, { FC, memo, useEffect, useMemo, useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  ColorValue,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { Text } from '../text';
import { Col, FlexProps, Row, useFlexProps } from '../flexView';
import { Touchable } from '../touchable';
import { isString } from 'lodash';

type ButtonType = 'small' | 'middle' | 'large';

const sizes: {
  [key in ButtonType]: TextStyle;
} = {
  large: {
    fontSize: 12,
    height: 36,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  middle: {
    fontSize: 12,
    height: 28,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  small: {
    fontSize: 10,
    height: 22,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
};

export interface ButtonProps extends FlexProps, TouchableOpacityProps {
  loading?: boolean;
  icon?: React.JSX.Element;
  title: React.JSX.Element | string;
  color?: ColorValue;
  size?: ButtonType;
}

export const Button: FC<ButtonProps> = memo(
  ({ loading, title, icon, size, color, ...rest }) => {
    const { style, ownProps } = useFlexProps(rest, {
      radius: 4,
      row: true,
      bg: rest.disabled || loading ? 'rgb(73, 100, 169)' : '#1c3e94',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    });

    const buttonSizeStyle = useMemo(() => sizes[size || 'middle'], [size]);

    const animated = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      if (loading) {
        Animated.timing(animated, {
          duration: 300,
          toValue: 1,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(animated, {
          duration: 300,
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    const buttonColor = useMemo(() => (color ? color : '#fff'), [color]);

    const textStyle = useRef({
      transform: [
        {
          scale: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.7],
          }),
        },
        {
          translateX: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -24],
          }),
        },
      ],
    }).current;

    const loadingStyle = useRef({
      transform: [
        { translateX: -8 },
        {
          scale: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ],
      opacity: animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    }).current;

    const _style = useMemo(
      () => ({ ...style, ...buttonSizeStyle }),
      [style, buttonSizeStyle],
    );

    return (
      <Touchable
        activeOpacity={0.7}
        delayPressIn={100}
        style={_style}
        {...ownProps}
        disabled={ownProps.disabled || loading}
      >
        <Animated.View style={textStyle}>
          <Row alignItems={'center'}>
            {icon ? (
              <Col marginRight={buttonSizeStyle.paddingVertical as number}>
                {icon}
              </Col>
            ) : null}
            {isString(title) ? (
              <Text
                lineBreakMode={'tail'}
                fontSize={buttonSizeStyle.fontSize}
                fontWeight={'bold'}
                color={buttonColor}
                textTransform={'uppercase'}
              >
                {title}
              </Text>
            ) : (
              title
            )}
          </Row>
        </Animated.View>

        <Col width={0}>
          <Animated.View style={loadingStyle}>
            <ActivityIndicator size="small" color={buttonColor || '#1c3e94'} />
          </Animated.View>
        </Col>
      </Touchable>
    );
  },
);
