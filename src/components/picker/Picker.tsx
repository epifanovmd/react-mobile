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
  FlatListProps,
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
  VirtualizedList,
} from 'react-native';
import { PickerItem } from './PickerItem';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { mergeRefs } from '../../helpers';
import createAnimatedComponent = Animated.createAnimatedComponent;

const AnimatedList = createAnimatedComponent(VirtualizedList<any>);

const getItem = (d: any[], i: number) => d[i];
const getItemCount = (d: any[]) => d?.length;

const triggerHapticFeedback = () => {
  RNReactNativeHapticFeedback.trigger('effectClick', {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  });
};

type OmitKeys =
  | 'pagingEnabled'
  | 'initialScrollIndex'
  | 'showsVerticalScrollIndicator'
  | 'showsHorizontalScrollIndicator'
  | 'snapToInterval'
  | 'snapToOffsets'
  | 'getItemLayout'
  | 'horizontal'
  | 'getItemCount'
  | 'getItem'
  | 'onScroll'
  | 'data'
  // | 'onMomentumScrollEnd'
  | 'renderItem'
  | 'onScrollToIndexFailed'
  | 'ListFooterComponent'
  | 'ListHeaderComponent'
  | 'ListEmptyComponent'
  | 'ListFooterComponentStyle'
  | 'ListHeaderComponentStyle';

export type PickerAnimations = {
  rotate?: string[];
  scale?: number[];
  translateX?: number[];
  translateY?: number[];
};

export interface PickerProps<T> extends ViewProps {
  currentIndex?: number;
  data: T[];
  onChange: (item: T, index: number) => void;
  renderItem: (item: T, index: number) => React.JSX.Element;

  horizontal?: boolean;
  visibleItems?: number;
  height?: number;
  animations?: PickerAnimations;

  listProps?: Omit<FlatListProps<T>, OmitKeys>;
}

export interface Picker {
  <T extends any>(
    props: PickerProps<T> & { ref?: React.Ref<VirtualizedList<T>> },
  ): React.JSX.Element | null;
}

export const Picker: Picker = memo(
  forwardRef<any, PickerProps<any>>(
    (
      {
        currentIndex,
        data: _data,
        onChange,
        renderItem: _renderItem,
        horizontal = false,
        visibleItems = 2,
        height: _height = 300,
        animations,

        listProps,

        style: _style,
        onLayout: _onLayout,
        ...rest
      },
      ref,
    ) => {
      const initialized = useRef(false);
      const [itemSize, setItemSize] = useState(0);
      const scrollAnimatedValue = useRef(new Animated.Value(0)).current;
      const scrollListener = useRef('0');
      const active = useRef(0);
      const flatListRef = useRef<VirtualizedList<any>>(null);
      const lastChangeIndex = useRef(0);
      const isDrag = useRef(false);

      const emptyItems = useMemo(
        () => new Array(visibleItems).fill(null),
        [visibleItems],
      );

      const data = useMemo(
        () => [...emptyItems, ..._data, ...emptyItems] as any,
        [_data, emptyItems],
      );

      useEffect(() => {
        scrollListener.current &&
          scrollAnimatedValue.removeListener(scrollListener.current);
        scrollListener.current = scrollAnimatedValue.addListener(
          ({ value }) => {
            const index = Math.round(value / itemSize);
            const savedIndex = Math.round(active.current / itemSize);

            if (!isDrag.current && index !== savedIndex) {
              triggerHapticFeedback();
            }

            return (active.current = value);
          },
        );

        return () => {
          scrollAnimatedValue.removeListener(scrollListener.current);
        };
      }, [itemSize, scrollAnimatedValue]);

      useEffect(() => {
        if (
          currentIndex !== undefined &&
          initialized.current &&
          currentIndex !== lastChangeIndex.current
        ) {
          scrollToIndex(currentIndex);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentIndex, data.length]);

      // methods
      const scrollToIndex = useCallback(
        (index: number, animated: boolean = true) => {
          if (index <= _data.length) {
            flatListRef.current?.scrollToOffset({
              animated,
              offset: index * itemSize,
            });
          }
        },
        [_data.length, itemSize],
      );

      // handlers
      const onLayout = useCallback(
        (event: LayoutChangeEvent) => {
          const { height, width } = event.nativeEvent.layout;

          const size = (horizontal ? width : height) / (visibleItems * 2 + 1);

          if (size) {
            setItemSize(size);
          }

          initialized.current = true;
          _onLayout?.(event);
        },
        [horizontal, _onLayout, visibleItems],
      );

      const onScroll = useMemo(
        () =>
          Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: horizontal
                    ? { x: scrollAnimatedValue }
                    : { y: scrollAnimatedValue },
                },
              },
            ],
            {
              useNativeDriver: true,
            },
          ),
        [horizontal, scrollAnimatedValue],
      );

      const onMomentumScrollEnd = useCallback(
        (event: NativeSyntheticEvent<NativeScrollEvent>) => {
          const index = Math.round(active.current / itemSize);

          listProps?.onMomentumScrollEnd?.(event);

          if (index !== lastChangeIndex.current) {
            lastChangeIndex.current = index;
            onChange(data[index + visibleItems], index);
          }
        },
        [itemSize, listProps, onChange, data, visibleItems],
      );

      const onPress = useCallback(
        (index: number) => {
          scrollToIndex(index - visibleItems);
          lastChangeIndex.current = index - visibleItems;
          onChange(data[index], index - visibleItems);
        },
        [data, onChange, scrollToIndex, visibleItems],
      );

      const onScrollToIndexFailed = useCallback(() => {}, []);
      const onScrollBeginDrag = useCallback(() => {
        isDrag.current = true;
      }, []);
      const onScrollEndDrag = useCallback(() => {
        isDrag.current = false;
      }, []);

      const renderItem = useCallback(
        ({ item, index }: any) => (
          <PickerItem
            itemSize={itemSize}
            visibleItems={visibleItems}
            isHorizontal={horizontal}
            item={item}
            index={index}
            data={data}
            scrollAnimatedValue={scrollAnimatedValue}
            onPress={onPress}
            renderItem={_renderItem}
            animations={animations}
          />
        ),
        [
          itemSize,
          visibleItems,
          horizontal,
          data,
          scrollAnimatedValue,
          onPress,
          _renderItem,
          animations,
        ],
      );

      // performance
      const keyExtractor = useCallback((_: number, i: number) => String(i), []);

      const snapToOffsets = useMemo(
        () => data.map((_item: any, i: number) => itemSize * i),
        [itemSize, data],
      );

      const getItemLayout = useCallback(
        (_: any, index: number) => ({
          length: itemSize,
          offset: itemSize * index,
          index,
        }),
        [itemSize],
      );

      // styles
      const style = useMemo<StyleProp<ViewStyle>>(
        () => [
          {
            height: horizontal ? 'auto' : _height,
            flexDirection: horizontal ? 'column' : 'row',
          },
          _style,
        ],
        [horizontal, _height, _style],
      );

      return (
        <View
          key={String(horizontal) + visibleItems}
          {...rest}
          style={style}
          onLayout={onLayout}
        >
          {!!itemSize && (
            <AnimatedList
              ref={mergeRefs([ref, flatListRef])}
              decelerationRate={'fast'}
              keyExtractor={keyExtractor}
              {...listProps}
              initialScrollIndex={currentIndex}
              data={data}
              renderItem={renderItem}
              snapToInterval={itemSize}
              snapToOffsets={snapToOffsets}
              getItemLayout={getItemLayout}
              horizontal={horizontal}
              getItemCount={getItemCount}
              getItem={getItem}
              onScrollBeginDrag={onScrollBeginDrag}
              onScrollEndDrag={onScrollEndDrag}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              onScroll={onScroll}
              onScrollToIndexFailed={onScrollToIndexFailed}
              onMomentumScrollEnd={onMomentumScrollEnd}
            />
          )}
        </View>
      );
    },
  ),
);
