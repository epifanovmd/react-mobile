import React, {
  FC,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ListRenderItemInfo } from "react-native";
import { Col, FlexProps, Row } from "../flexView";
import { LayoutChangeEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { FlatListProps } from "react-native/Libraries/Lists/FlatList";
import { Touchable } from "../touchable";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

export interface CarouselProps<T = any>
  extends Omit<
    FlatListProps<T>,
    | "ListEmptyComponent"
    | "ListFooterComponent"
    | "ListHeaderComponent"
    | "renderItem"
  > {
  renderItem?: (info: ListRenderItemInfo<T>) => React.ReactElement | null;
  width?: number;
  height?: number;
  onPress?: () => void;
  overflowWidth?: number;
  separateWidth?: number;
  containerProps?: FlexProps;
}

export interface CarouselFC<P extends any = null> {
  <T>(props: CarouselProps<P extends null ? T : P>): ReturnType<FC>;
}

const mergeRefs =
  <T = any,>(
    refs: Array<
      React.MutableRefObject<T> | React.LegacyRef<T> | undefined | null
    >,
  ): React.RefCallback<T> =>
  value => {
    refs.forEach(ref => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    });
  };

export const Carousel: CarouselFC = memo(
  forwardRef<FlatList, CarouselProps>(
    (
      {
        renderItem,
        data = [],
        overflowWidth = 16,
        separateWidth = 1,
        onPress,
        containerProps,
        ...rest
      },
      ref,
    ) => {
      const flatListRef = useRef<FlatList>(null);
      const [width, setWidth] = useState(0);

      useEffect(() => {
        if (flatListRef.current && data && data?.length > 0) {
          flatListRef.current.scrollToOffset({ offset: 0 });
        }
      }, [data]);

      const itemLength = width - overflowWidth; // Item is a square. Therefore, its height and width are of the same length.
      const emptyItemLength = (width - itemLength) / 2;

      const _renderItem = useCallback(
        (item: ListRenderItemInfo<any>) => (
          <Col
            mh={separateWidth}
            width={itemLength - separateWidth * 2}
            height={"auto"}
          >
            <Touchable flexShrink={1} overflow={"hidden"} onPress={onPress}>
              {renderItem?.(item)}
            </Touchable>
          </Col>
        ),
        [itemLength, separateWidth, onPress, renderItem],
      );

      const onLayout = useCallback(
        (event: LayoutChangeEvent) => {
          if (!width) {
            setWidth(event.nativeEvent.layout.width);
          }
        },
        [width],
      );

      const EmptyHorizontalItem = useCallback(
        () => <Col style={{ width: emptyItemLength }} />,
        [emptyItemLength],
      );

      return (
        <Row {...containerProps} onLayout={onLayout}>
          <GestureHandlerRootView>
            <FlatList
              ref={mergeRefs([ref, flatListRef])}
              data={data}
              horizontal={true}
              ListHeaderComponent={EmptyHorizontalItem}
              ListFooterComponent={EmptyHorizontalItem}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              decelerationRate={0.95}
              renderToHardwareTextureAndroid
              snapToInterval={itemLength}
              snapToAlignment="start"
              keyExtractor={(_item, index) => `${index}`}
              {...rest}
              renderItem={_renderItem}
              ListEmptyComponent={_renderItem}
            />
          </GestureHandlerRootView>
        </Row>
      );
    },
  ),
);
