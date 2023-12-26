import React, {
  JSX,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  FlatListProps,
  ListRenderItemInfo,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { isArray } from '@force-dev/utils';
import { Touchable, TouchableProps } from '../touchable';
import { Modal, ModalProps, useModal } from '../modal';
import { SafeArea } from '../safeArea';

const getSelected = <T extends any>(
  selected: T,
): (T extends Array<infer R> ? R : T)[] => {
  return isArray(selected) ? selected : ([selected] as any);
};

export interface SelectProps<T extends any = any, M extends boolean = false>
  extends Omit<TouchableProps, 'onPress'> {
  selected?: M extends true ? number[] : number | undefined;
  data: T[];
  renderItem: (
    item: T,
    active: boolean,
    index: number,
  ) => React.JSX.Element | null;
  onPress?: (item: T, active: boolean, index: number) => void;
  onChange?: (selected: M extends true ? number[] : number | undefined) => void;

  multiply?: M;

  contentStyle?: StyleProp<ViewStyle>;
  touchableItemProps?: Omit<TouchableOpacityProps, 'onPress'>;
  listProps?: Omit<FlatListProps<T>, 'data' | 'renderItem'>;
  modalProps?: ModalProps;

  renderHeader?: (onClose: () => void) => JSX.Element | null;
  renderFooter?: (params: {
    onReset: () => void;
    onApply: () => void;
  }) => JSX.Element | null;
}

interface Select {
  <T extends any = any, M extends boolean = false>(
    props: PropsWithChildren<SelectProps<T, M>>,
  ): React.JSX.Element | null;
}

export const Select: Select = memo(
  ({
    selected: _selected,
    data,
    renderItem: _renderItem,
    onPress: _onPress,
    onChange,
    multiply = false,
    contentStyle,
    touchableItemProps,
    listProps,
    modalProps,
    renderHeader,
    renderFooter,
    children,
    ...rest
  }) => {
    const { ref: modalRef } = useModal();
    const allowRest = useRef(true);

    const [selected, setSelected] = useState<{
      [key: number]: boolean | undefined;
    }>({});

    useEffect(() => {
      if (allowRest.current) {
        setSelected(
          getSelected(_selected ?? []).reduce<{
            [key: number]: boolean | undefined;
          }>((acc, key) => {
            acc[key] = true;

            return acc;
          }, {}),
        );
      }

      allowRest.current = true;
    }, [_selected]);

    const onReset = useCallback(() => {
      setSelected({});
    }, []);

    const handleChange = useCallback(() => {
      allowRest.current = false;
      const items = Object.keys(selected)
        .map(key => Number(key))
        .filter(key => selected[key]);
      onChange?.((multiply ? items : items[0]) as any);
    }, [multiply, onChange, selected]);

    const toggleSelect = useCallback(
      (active: boolean, index: number) => {
        if (multiply) {
          setSelected({ ...selected, [index]: active });
        } else {
          setSelected({ [index]: active });
        }
      },
      [multiply, selected],
    );

    const onPress = useCallback(() => {
      modalRef.current?.open();
    }, [modalRef]);

    const renderItem = useCallback(
      ({ item, index }: ListRenderItemInfo<any>) => {
        const onPressItem = () => {
          toggleSelect(!selected[index], index);
          _onPress?.(item, !!selected[index], index);
        };

        return (
          <TouchableOpacity
            delayPressIn={200}
            {...touchableItemProps}
            onPress={onPressItem}
          >
            {_renderItem(
              item,
              selected[index] !== undefined && !!selected[index],
              index,
            )}
          </TouchableOpacity>
        );
      },
      [_renderItem, selected, toggleSelect, _onPress, touchableItemProps],
    );

    const handleClose = useCallback(() => {
      modalProps?.onClose?.();
      handleChange();
    }, [handleChange, modalProps]);

    const onClose = useCallback(() => {
      modalRef.current?.close();
    }, [modalRef]);

    const onApply = useCallback(() => {
      onClose();
    }, [onClose]);

    return (
      <Touchable onPress={onPress} {...rest}>
        {children}

        <Modal
          ref={modalRef}
          adjustToContentHeight={true}
          childrenPanGestureEnabled={false}
          {...modalProps}
          onClose={handleClose}
        >
          {renderHeader?.(onClose)}

          <View style={[s.contentStyle, contentStyle]}>
            <FlatList
              {...listProps}
              style={[s.flatList, listProps?.style]}
              data={data}
              renderItem={renderItem}
            />
          </View>

          {renderFooter?.({ onReset, onApply })}
          <SafeArea bottom={true} />
        </Modal>
      </Touchable>
    );
  },
);

const s = StyleSheet.create({
  contentStyle: {
    flexShrink: 1,
  },
  flatList: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 8,
    marginTop: 8,
  },
});
