import * as React from 'react';
import {
  forwardRef,
  memo,
  PropsWithChildren,
  useCallback,
  useRef,
} from 'react';
import { Animated, Pressable, PressableProps, View } from 'react-native';
import { FlexProps, useFlexProps } from '../flexView';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type PressableOmittedProps = Omit<PressableProps, 'style'>;

export interface BounceableProps extends FlexProps, PressableOmittedProps {
  useNativeDriver?: boolean;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
}

export const Bounceable = memo(
  forwardRef<View, PropsWithChildren<BounceableProps>>(
    (
      {
        useNativeDriver = true,
        bounceEffectIn = 0.93,
        bounceEffectOut = 1,
        bounceVelocityIn = 0.1,
        bounceVelocityOut = 0.4,
        bouncinessIn = 0,
        bouncinessOut = 0,
        children,
        onPress,
        ...rest
      },
      ref,
    ) => {
      const { style, ownProps } = useFlexProps(rest);
      const bounceValue = useRef(new Animated.Value(1)).current;

      const bounceAnimation = useCallback(
        (value: number, velocity: number, bounciness: number) => {
          Animated.spring(bounceValue, {
            toValue: value,
            velocity,
            bounciness,
            useNativeDriver,
          }).start();
        },
        [bounceValue, useNativeDriver],
      );

      const onPressIn = useCallback(() => {
        bounceAnimation(bounceEffectIn, bounceVelocityIn, bouncinessIn);
      }, [bounceAnimation, bounceEffectIn, bounceVelocityIn, bouncinessIn]);
      const onPressOut = useCallback(() => {
        bounceAnimation(bounceEffectOut, bounceVelocityOut, bouncinessOut);
      }, [bounceAnimation, bounceEffectOut, bounceVelocityOut, bouncinessOut]);

      return (
        <AnimatedPressable
          ref={ref}
          {...ownProps}
          style={[{ transform: [{ scale: bounceValue }] }, style]}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={onPress}
        >
          {children}
        </AnimatedPressable>
      );
    },
  ),
);
