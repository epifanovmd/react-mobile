import React, { memo, useCallback, useMemo } from 'react';
import { Animated } from 'react-native';
import { PickerAnimations } from './Picker';
import { Col } from '../flexView';
import { Bounceable } from '../bounceable';

export interface PickerItemProps<T> {
  data: T[];
  index: number;
  item: T;
  onPress?: (index: number) => void;
  renderItem: (item: T, index: number) => React.JSX.Element;
  itemSize: number;
  visibleItems: number;
  isHorizontal?: boolean;
  scrollAnimatedValue: Animated.Value;
  animations?: PickerAnimations;
}

interface PickerItem {
  <T>(props: PickerItemProps<T>): React.JSX.Element | null;
}

export const PickerItem: PickerItem = memo(
  ({
    data,
    index,
    item,
    onPress: _onPress,
    renderItem,
    itemSize,
    visibleItems,
    isHorizontal = false,
    scrollAnimatedValue,
    animations,
  }) => {
    const animated = useCallback(
      (
        animationValues: string[] | number[],
      ): Animated.InterpolationConfigType => {
        return {
          inputRange: [...data.map((_: any, i: number) => i * itemSize)],
          outputRange: [
            ...data.map((_: any, i: number) => {
              const center = i + visibleItems;
              const offset = Math.abs(center - index);

              if (animationValues[offset] !== undefined) {
                return animationValues[offset];
              }

              return animationValues[animationValues.length] ?? 1;
            }),
          ] as string[] | number[],
        };
      },
      [data, index, itemSize, visibleItems],
    );

    const onPress = useCallback(() => {
      _onPress?.(index);
    }, [_onPress, index]);

    const { scale, ...animatedProps } = useMemo(() => {
      const o = scrollAnimatedValue.interpolate(animated([1, 0.6, 0.4, 0.2]));
      const s = scrollAnimatedValue.interpolate(animated([1.8, 0.9, 0.8, 0.5]));
      const tx = scrollAnimatedValue.interpolate(animated([1, 3, 9, 12]));

      const map: PickerAnimations = { ...animations };

      const rest = Object.keys(map).reduce<any>((acc, key) => {
        const values = map[key as keyof PickerAnimations];

        if (values) {
          acc[key] = scrollAnimatedValue.interpolate(animated(values));
        }

        return acc;
      }, {});

      return {
        scale: s,
        translateX: tx,
        opacity: o,
        ...rest,
      };
    }, [animated, animations, scrollAnimatedValue]);

    if (item === null) {
      return (
        <Col
          height={isHorizontal ? undefined : itemSize}
          width={isHorizontal ? itemSize : undefined}
        />
      );
    }

    return (
      <Bounceable onPress={onPress}>
        <Col
          animated={true}
          alignItems={'center'}
          justifyContent={'center'}
          height={isHorizontal ? undefined : itemSize}
          width={isHorizontal ? itemSize : undefined}
          {...animatedProps}
        >
          <Col
            pa={4}
            animated={true}
            scale={scale}
            height={itemSize ? undefined : 0}
          >
            {renderItem(item, index)}
          </Col>
        </Col>
      </Bounceable>
    );
  },
);
