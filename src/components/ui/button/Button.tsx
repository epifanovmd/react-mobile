import React, { FC, memo } from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  ColorValue,
} from 'react-native';
import {
  RenderConditional,
  RenderIfNotEmpty,
  RenderTextOrElement,
} from '../../renderer';
import { FlexProps, Row, useFlexProps } from '../flexView';
import { TextProps } from '../text';
import { Touchable, TouchableProps } from '../touchable';

export interface ButtonProps extends TouchableProps {
  loading?: boolean;
  leftIcon?: React.JSX.Element;
  title: React.JSX.Element | string;
  rightIcon?: React.JSX.Element;
  color?: ColorValue;
  contentProps?: FlexProps;
  textProps?: TextProps;
  indicatorProps?: ActivityIndicatorProps;
}

export const Button: FC<ButtonProps> = memo(
  ({
    loading,
    leftIcon,
    title,
    rightIcon,
    color = '#fff',
    contentProps,
    textProps,
    indicatorProps,
    ...rest
  }) => {
    const { style, ownProps } = useFlexProps(rest, {
      radius: 4,
      row: true,
      bg: '#1c3e94',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    });

    return (
      <Touchable
        activeOpacity={0.7}
        delayPressIn={100}
        style={style}
        {...ownProps}
        disabled={ownProps.disabled || loading}
      >
        <RenderConditional if={!!loading}>
          <ActivityIndicator size="small" color={color} {...indicatorProps} />
        </RenderConditional>

        <RenderConditional if={!loading}>
          <Row alignItems={'center'} {...contentProps}>
            <RenderIfNotEmpty element={leftIcon} />
            <RenderTextOrElement
              text={title}
              lineBreakMode={'tail'}
              color={color}
              {...textProps}
            />
            <RenderIfNotEmpty element={rightIcon} />
          </Row>
        </RenderConditional>
      </Touchable>
    );
  },
);
