import React, { FC, memo, PropsWithChildren, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlexProps, useFlexProps } from '../flexView';
import { View, ViewStyle } from 'react-native';

type Keys = 'bottom' | 'left' | 'right' | 'top';

export interface SafeAreaProps extends Omit<FlexProps, Keys> {
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
}

const withCondition = (value: boolean | undefined, style: ViewStyle) =>
  value === true || value === undefined ? style : {};

export const SafeArea: FC<PropsWithChildren<SafeAreaProps>> = memo(
  ({ children, top, bottom, left, right, ...rest }) => {
    const { style, ownProps } = useFlexProps(rest, {
      flexGrow: 1,
    });

    const { ...insets } = useSafeAreaInsets();

    const _style = useMemo(
      () => ({
        ...style,
        ...withCondition(top, { paddingTop: insets.top }),
        ...withCondition(bottom, { paddingBottom: insets.bottom }),
        ...withCondition(left, { paddingLeft: insets.left }),
        ...withCondition(right, { paddingRight: insets.right }),
      }),
      [
        style,
        insets.bottom,
        insets.left,
        insets.right,
        insets.top,
        left,
        right,
        top,
        bottom,
      ],
    );

    return (
      <View style={_style} {...ownProps}>
        {children}
      </View>
    );
  },
);
