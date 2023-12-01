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
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeScrollPoint,
  NativeSyntheticEvent,
  ScrollView,
  ScrollViewProps,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

const DEBOUNCE_CHANGE = 50; // ms

export interface PickerRef {
  scrollToIndex(index: number, animated?: boolean): void;
}

export interface PickerProps<T> extends ViewProps {
  items: T[];
  index?: number;
  visibleItems?: number;
  itemHeight?: number;
  renderItem: (item: T, active: boolean, index: number) => React.JSX.Element;
  onIndexChange?: (item: T, index: number) => void;
  lineStyle?: ViewStyle;
  scrollViewProps?: Omit<
    ScrollViewProps,
    | 'decelerationRate'
    | 'onLayout'
    | 'onScroll'
    | 'scrollEventThrottle'
    | 'onScrollBeginDrag'
    | 'onScrollEndDrag'
    | 'snapToInterval'
    | 'nestedScrollEnabled'
    | 'snapToAlignment'
    | 'snapToOffsets'
  >;
}

export interface Picker {
  <T extends any>(
    props: PickerProps<T> & { ref?: React.Ref<PickerRef> },
  ): React.JSX.Element | null;
}

export const Picker: Picker = memo(
  forwardRef(
    (
      {
        items,
        index,
        visibleItems = 3,
        itemHeight = 0,
        renderItem,
        onIndexChange,
        lineStyle,
        scrollViewProps,
        ...rest
      },
      ref,
    ) => {
      const [selectHeight, setSelectHeight] = useState(itemHeight);

      const intervalFix = useRef<number>();
      const isDrag = useRef<boolean>(false);
      const isPressedValue = useRef<boolean>(false);
      const currentIndexRef = useRef(0);

      const primaryScrollRef = useRef<ScrollView>(null);
      const secondaryScrollRef = useRef<ScrollView>(null);

      const containerHeight = selectHeight * (visibleItems * 2 + 1);
      const auxContainerHeight = (containerHeight - selectHeight) / 2;

      useEffect(() => {
        if (index !== undefined && index !== currentIndexRef.current) {
          isPressedValue.current = true;
          selectTo(index);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [index]);

      const selectTo = useCallback(
        (i: number, animated: boolean = true) => {
          const y = i * selectHeight;

          if (primaryScrollRef && primaryScrollRef.current) {
            primaryScrollRef.current.scrollTo({ y, animated });
          }
        },
        [selectHeight],
      );

      const onLayoutScrollView = useCallback(() => {
        if (index !== undefined && index !== currentIndexRef.current) {
          isPressedValue.current = true;
          selectTo(index, false);
        }
      }, [index, selectTo]);

      const triggerHapticFeedback = useCallback(() => {
        RNReactNativeHapticFeedback.trigger('effectClick', {
          enableVibrateFallback: true,
          ignoreAndroidSystemSettings: true,
        });
      }, []);

      const onPressValue = useCallback(
        (i: number) => () => {
          if (i !== index) {
            if (onIndexChange && index !== i) {
              onIndexChange(items[i], i);
            }
            isPressedValue.current = true;
            selectTo(i);
            triggerHapticFeedback();
          }
        },
        [index, items, onIndexChange, selectTo, triggerHapticFeedback],
      );

      const itemContainerStyle: ViewStyle = useMemo(
        () => ({
          justifyContent: 'center',
          alignItems: 'center',
          height: selectHeight ? selectHeight : undefined,
        }),
        [selectHeight],
      );

      const onLayoutItem = useCallback(
        (event: LayoutChangeEvent) => {
          const height = event.nativeEvent.layout.height;

          if ((!selectHeight || height > selectHeight) && !itemHeight) {
            setSelectHeight(height);
          }
        },
        [itemHeight, selectHeight],
      );

      const getItem = useCallback(
        (active: boolean) => {
          if (items.length === 0) {
            return null;
          }

          return items.map((item, i) => (
            <View
              key={`${active}-${i}`}
              onLayout={i === 0 ? onLayoutItem : undefined}
              style={itemContainerStyle}
            >
              <TouchableWithoutFeedback
                onLayout={i === 0 ? onLayoutItem : undefined}
                onPress={onPressValue(i)}
              >
                {renderItem(item, active, i)}
              </TouchableWithoutFeedback>
            </View>
          ));
        },
        [itemContainerStyle, items, onLayoutItem, onPressValue, renderItem],
      );

      const getScrollIndex = useCallback(
        (scrollY: NativeScrollPoint['y']) => {
          const y = Math.round(scrollY);

          return Math.round(y / selectHeight);
        },
        [selectHeight],
      );

      const checkIntervalFix = useCallback(() => {
        if (intervalFix && intervalFix.current) {
          clearInterval(intervalFix.current);
        }
      }, []);

      const hapticScrollFeedback = useCallback(() => {
        if (!isPressedValue.current || isDrag.current) {
          triggerHapticFeedback();
        }
      }, [triggerHapticFeedback]);

      const debounceIndexChange = useCallback(
        (currentIndex: number) => {
          checkIntervalFix();
          intervalFix.current = setTimeout(() => {
            if (isPressedValue.current) {
              isPressedValue.current = false;
            } else if (onIndexChange && index !== currentIndex) {
              onIndexChange(items[currentIndex], currentIndex);
            }
          }, DEBOUNCE_CHANGE);
        },
        [checkIntervalFix, index, items, onIndexChange],
      );

      const onScroll = useCallback(
        (e: NativeSyntheticEvent<NativeScrollEvent>) => {
          const y = e.nativeEvent.contentOffset.y;

          if (secondaryScrollRef && secondaryScrollRef.current) {
            secondaryScrollRef.current.scrollTo({
              y,
              animated: false,
            });
          }
        },
        [],
      );

      const onScrollSecond = useCallback(
        (e: NativeSyntheticEvent<NativeScrollEvent>) => {
          const y = e.nativeEvent.contentOffset.y;
          const currentIndex = getScrollIndex(y);

          if (!isDrag.current) {
            debounceIndexChange(currentIndex);
          }

          if (currentIndex !== currentIndexRef.current) {
            hapticScrollFeedback();
          }

          currentIndexRef.current = currentIndex;
        },
        [debounceIndexChange, getScrollIndex, hapticScrollFeedback],
      );

      const snapToOffsets = useMemo(
        () => items.map((_item, i) => selectHeight * i),
        [items, selectHeight],
      );

      const containerStyle = useMemo(
        () => [rest.style, { height: containerHeight }],
        [containerHeight, rest.style],
      );

      const primaryPosition: ViewStyle = useMemo(
        () => ({
          width: '100%',
          height: containerHeight,
        }),
        [containerHeight],
      );

      const secondaryPosition: ViewStyle = useMemo(
        () => ({
          backgroundColor: 'gray',
          ...lineStyle,
          height: selectHeight,
          marginTop: -(containerHeight / 2 + selectHeight / 2),
        }),
        [containerHeight, selectHeight, lineStyle],
      );

      const onScrollBeginDrag = useCallback(() => {
        isDrag.current = true;
      }, []);

      const onScrollEndDrag = useCallback(() => {
        isDrag.current = false;
        isPressedValue.current = false;

        debounceIndexChange(currentIndexRef.current);
      }, [debounceIndexChange]);

      React.useImperativeHandle(ref, () => ({
        scrollToIndex: (y: number, animated?: boolean) => {
          isPressedValue.current = true;
          selectTo(y, animated);
        },
      }));

      return (
        <View style={containerStyle}>
          <View style={primaryPosition}>
            <ScrollView
              ref={primaryScrollRef}
              bounces={false}
              showsVerticalScrollIndicator={false}
              {...scrollViewProps}
              decelerationRate={'fast'}
              onLayout={onLayoutScrollView}
              onScroll={onScroll}
              scrollEventThrottle={1}
              onScrollBeginDrag={onScrollBeginDrag}
              onScrollEndDrag={onScrollEndDrag}
              snapToInterval={selectHeight}
              nestedScrollEnabled={false}
              snapToAlignment={'center'}
              snapToOffsets={snapToOffsets}
            >
              <View style={{ height: auxContainerHeight }} />
              {getItem(false)}
              <View style={{ height: auxContainerHeight }} />
            </ScrollView>
          </View>
          <View style={secondaryPosition} pointerEvents="none">
            <ScrollView
              ref={secondaryScrollRef}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              onScroll={onScrollSecond}
              scrollEventThrottle={100}
            >
              {getItem(true)}
            </ScrollView>
          </View>
        </View>
      );
    },
  ),
);
