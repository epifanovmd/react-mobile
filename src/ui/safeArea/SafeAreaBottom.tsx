import React, { FC, memo, PropsWithChildren, useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useFlexProps } from '../flexView';
import { View } from 'react-native';
import { SafeAreaProps } from './SafeArea';

export const SafeAreaBottom: FC<PropsWithChildren<SafeAreaProps>> = memo(
  ({ children, ...rest }) => {
    const { style, ownProps } = useFlexProps(rest, {
      flexGrow: 1,
    });

    const { ...insets } = useSafeAreaInsets();

    const _style = useMemo(
      () => ({
        ...style,
        paddingBottom: insets.bottom,
      }),
      [insets.bottom, style],
    );

    return (
      <View style={_style} {...ownProps}>
        {children}
      </View>
    );
  },
);
