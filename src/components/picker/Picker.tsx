import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  FlatList,
  FlatListProps,
  LayoutChangeEvent,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { isString } from '@force-dev/utils';
import { Col, FlexProps, FlexView } from '../flexView';
import { Bounceable } from '../bounceable';
import { mergeRefs } from '../../helpers';
import { Text } from '../text';

type OmitKeys =
  | 'pagingEnabled'
  | 'showsVerticalScrollIndicator'
  | 'showsHorizontalScrollIndicator'
  | 'snapToInterval'
  | 'snapToOffsets'
  | 'horizontal'
  | 'data'
  | 'getItemLayout'
  | 'onScroll'
  | 'ListFooterComponent'
  | 'ListHeaderComponent'
  | 'ListEmptyComponent'
  | 'ListFooterComponentStyle'
  | 'ListHeaderComponentStyle'
  | 'renderItem';

export interface PickerProps<T> extends FlexProps {
  prefix?: string | React.JSX.Element;
  suffix?: string | React.JSX.Element;

  currentIndex?: number;
  data: T[];
  onChange: (item: T, index: number) => void;
  renderItem: (item: T, index: number) => React.JSX.Element;

  direction?: 'vertical' | 'horizontal';
  itemSize?: number;
  visibleItems?: number;
  height?: number;

  flatListProps?: Omit<FlatListProps<T>, OmitKeys>;
  prefixContainerProps?: FlexProps;
  suffixContainerProps?: FlexProps;
}

export interface Picker {
  <T extends any>(
    props: PickerProps<T> & { ref?: React.Ref<FlatList> },
  ): React.JSX.Element | null;
}

export const Picker: Picker = memo(
  forwardRef(
    (
      {
        prefix,
        suffix,
        currentIndex,
        data: _data,
        onChange,
        renderItem: _renderItem,
        direction = 'vertical',
        itemSize: _itemSize,
        visibleItems = 2,
        height: _height = 300,

        flatListProps,
        prefixContainerProps,
        suffixContainerProps,

        ...rest
      },
      ref,
    ) => {
      const [itemSize, setItemSize] = useState(_itemSize || 0);
      const scrollAnimatedValue = useRef(new Animated.Value(0)).current;
      const scrollListener = useRef('0');
      const active = useRef(0);
      const flatListRef = useRef<FlatList>(null);
      const lastChangeIndex = useRef(0);

      const data = useMemo(() => {
        const emptyItems = new Array(visibleItems).fill(null);

        return [...emptyItems, ..._data, ...emptyItems] as any;
      }, [_data, visibleItems]);

      useEffect(() => {
        scrollListener.current &&
          scrollAnimatedValue.removeListener(scrollListener.current);
        scrollListener.current = scrollAnimatedValue.addListener(
          ({ value }) => (active.current = value),
        );

        return () => {
          scrollAnimatedValue.removeListener(scrollListener.current);
        };
      }, [scrollAnimatedValue]);

      useEffect(() => {
        if (currentIndex !== undefined) {
          scrollToIndex(currentIndex);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentIndex, data.length]);

      const scrollToIndex = useCallback(
        (index: number) => {
          if (index <= _data.length) {
            flatListRef.current?.scrollToIndex({
              animated: true,
              index,
            });
          }
        },
        [_data],
      );

      const onLayout = useCallback(
        ({ nativeEvent }: LayoutChangeEvent) => {
          const { height, width } = nativeEvent.layout;

          const size =
            (direction === 'horizontal' ? width : height) /
            (visibleItems * 2 + 1);

          if (currentIndex !== undefined) {
            scrollToIndex(currentIndex);
          }

          if (size) {
            setItemSize(size);
          }
        },
        [currentIndex, direction, scrollToIndex, visibleItems],
      );

      const renderItem = useCallback(
        ({ item, index }: ListRenderItemInfo<any>) => {
          const isHorizontal = direction === 'horizontal';
          const makeAnimated = (a: number, b: number, c: number) => {
            return {
              inputRange: [...data.map((_: any, i: number) => i * itemSize)],
              outputRange: [
                ...data.map((_: any, i: number) => {
                  const center = i + visibleItems;
                  if (center === index) {
                    return a;
                  } else if (center + 1 === index || center - 1 === index) {
                    return b;
                  } else {
                    return c;
                  }
                }),
              ],
            };
          };

          if (item === null) {
            return (
              <Col
                height={isHorizontal ? undefined : itemSize}
                width={isHorizontal ? itemSize : undefined}
              />
            );
          }

          const onPress = () => {
            scrollToIndex(index - visibleItems);
            lastChangeIndex.current = index - visibleItems;
            setTimeout(() => {
              onChange(data[index], index - visibleItems);
            }, 0);
          };

          const opacity = scrollAnimatedValue.interpolate(
            makeAnimated(1, 0.6, 0.2),
          );

          const scale = scrollAnimatedValue.interpolate(
            makeAnimated(1.8, 0.9, 0.8),
          );

          return (
            <Bounceable onPress={onPress}>
              <Col
                animated={true}
                alignItems={'center'}
                justifyContent={'center'}
                height={isHorizontal ? undefined : itemSize}
                width={isHorizontal ? itemSize : undefined}
                opacity={opacity}
              >
                <Col
                  pa={4}
                  animated={true}
                  scale={scale}
                  height={itemSize ? undefined : 0}
                >
                  {_renderItem(item, index)}
                </Col>
              </Col>
            </Bounceable>
          );
        },
        [
          direction,
          scrollAnimatedValue,
          itemSize,
          _renderItem,
          data,
          visibleItems,
          scrollToIndex,
          onChange,
        ],
      );

      const onScroll = useMemo(
        () =>
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset:
                    direction === 'horizontal'
                      ? { x: scrollAnimatedValue }
                      : { y: scrollAnimatedValue },
                },
              },
            ],
            {
              useNativeDriver: true,
            },
          ),
        [direction, scrollAnimatedValue],
      );

      const onMomentumScrollEnd = useCallback(
        (event: NativeSyntheticEvent<NativeScrollEvent>) => {
          const index = Math.round(active.current / itemSize);

          flatListProps?.onMomentumScrollEnd?.(event);

          if (index !== lastChangeIndex.current) {
            lastChangeIndex.current = index;
            onChange(data[index + visibleItems], index);
          }
        },
        [itemSize, flatListProps, onChange, data, visibleItems],
      );

      const keyExtractor = useCallback((_: number, i: number) => String(i), []);

      const snapToOffsets = useMemo(
        () => data.map((_item: any, i: number) => itemSize * i),
        [itemSize, data],
      );

      const getItemLayout = useCallback(
        (_: any, index: number) => ({
          length: data?.length || 0,
          index: index,
          offset: index * itemSize,
        }),
        [itemSize, data?.length],
      );

      const height = _itemSize ? _itemSize * (visibleItems * 2 + 1) : _height;

      return (
        <FlexView
          key={direction + visibleItems}
          row={direction !== 'horizontal' || undefined}
          height={direction === 'vertical' ? height : undefined}
          {...rest}
          onLayout={onLayout}
        >
          <FlexView
            minWidth={40}
            row={direction === 'horizontal' || undefined}
            justifyContent={'center'}
            alignItems={'flex-end'}
            {...prefixContainerProps}
          >
            {isString(prefix) ? <Text fontSize={18}>{prefix}</Text> : prefix}
          </FlexView>
          <FlexView row={direction !== 'horizontal' || undefined}>
            <Animated.FlatList<any>
              ref={mergeRefs([ref, flatListRef])}
              decelerationRate={'fast'}
              keyExtractor={keyExtractor}
              {...flatListProps}
              pagingEnabled
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              snapToInterval={itemSize}
              snapToOffsets={snapToOffsets}
              horizontal={direction === 'horizontal'}
              onScroll={onScroll}
              data={data}
              getItemLayout={getItemLayout}
              onMomentumScrollEnd={onMomentumScrollEnd}
              renderItem={renderItem}
            />
          </FlexView>
          <FlexView
            row={direction === 'horizontal' || undefined}
            justifyContent={'center'}
            alignItems={'flex-start'}
            {...suffixContainerProps}
          >
            {isString(suffix) ? <Text fontSize={18}>{suffix}</Text> : suffix}
          </FlexView>
        </FlexView>
      );
    },
  ),
);
