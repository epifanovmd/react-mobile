import { mergeRefs } from "@force-dev/react";
import React, {
  FC,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ListRenderItemInfo, TouchableOpacity, ViewProps } from "react-native";
import { FlatListProps } from "react-native/Libraries/Lists/FlatList";
import { LayoutChangeEvent } from "react-native/Libraries/Types/CoreEventTypes";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

import { Col, FlexProps, Row } from "../flexView";

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
  containerProps?: FlexProps & ViewProps;
}

export interface CarouselFC<P = null> {
  <T>(props: CarouselProps<P extends null ? T : P>): ReturnType<FC>;
}

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
            <TouchableOpacity
              style={{ flexShrink: 1, overflow: "hidden" }}
              onPress={onPress}
            >
              {renderItem?.(item)}
            </TouchableOpacity>
          </Col>
        ),
        [itemLength, separateWidth, onPress, renderItem],
      );

      const onLayout = useCallback(
        (event: LayoutChangeEvent) => {
          containerProps?.onLayout?.(event);

          if (!width) {
            setWidth(event.nativeEvent.layout.width);
          }
        },
        [containerProps, width],
      );

      const EmptyHorizontalItem = useCallback(
        () => <Col style={{ width: emptyItemLength }} />,
        [emptyItemLength],
      );

      const keyExtractor = useCallback(
        (_item: any, index: number) => `${index}`,
        [],
      );

      return (
        <Row {...containerProps} onLayout={onLayout}>
          <GestureHandlerRootView>
            <FlatList
              ref={mergeRefs([ref, flatListRef])}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              bounces={false}
              decelerationRate={0.95}
              renderToHardwareTextureAndroid
              snapToInterval={itemLength}
              snapToAlignment="start"
              keyExtractor={keyExtractor}
              {...rest}
              data={data}
              renderItem={_renderItem}
              ListHeaderComponent={EmptyHorizontalItem}
              ListFooterComponent={EmptyHorizontalItem}
              ListEmptyComponent={_renderItem}
            />
          </GestureHandlerRootView>
        </Row>
      );
    },
  ),
);
