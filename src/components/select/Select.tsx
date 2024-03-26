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
import { isEqual } from 'lodash';
import { Modal, ModalProps, useModal } from '../modal';
import { SafeArea } from '../safeArea';

const toArraySelected = <T extends any>(
  selected: T,
): (T extends Array<infer R> ? R : T)[] => {
  return isArray(selected) ? selected : ([selected] as any);
};

export interface SelectProps<D extends any = any, M extends boolean = false>
  extends Omit<TouchableOpacityProps, 'onPress'> {
  selected?: M extends true ? D[] : D | undefined;
  data: D[];
  renderItem: (
    item: D,
    active: boolean,
    index: number,
  ) => React.JSX.Element | null;
  onPress?: (item: D, active: boolean, index: number) => void;
  onChange?: (selected: M extends true ? D[] : D) => void;

  onOpen?: () => void;

  multiply?: M;
  closeOnChange?: boolean;

  contentStyle?: StyleProp<ViewStyle>;
  touchableItemProps?: Omit<TouchableOpacityProps, 'onPress'>;
  listProps?: Omit<FlatListProps<D>, 'data' | 'renderItem'>;
  modalProps?: ModalProps;

  renderHeader?: (onClose: () => void) => JSX.Element | null;
  renderFooter?: (params: {
    onReset: () => void;
    onApply: () => void;
  }) => JSX.Element | null;
}

const _Select = <D extends any = any, M extends boolean = false>({
  selected: _selected,
  data,
  renderItem: _renderItem,
  onPress: _onPress,
  onChange,
  onOpen,
  multiply,
  closeOnChange = false,
  contentStyle,
  touchableItemProps,
  listProps,
  modalProps,
  renderHeader,
  renderFooter,
  children,
  ...rest
}: PropsWithChildren<SelectProps<D, M>>) => {
  const { ref: modalRef } = useModal();
  const allowUpdateSelected = useRef(true);

  const [selected, setSelected] = useState<{ [key in number]: D }>({});

  useEffect(() => {
    if (allowUpdateSelected.current && _selected) {
      const s = toArraySelected(_selected);

      setSelected(
        s.reduce<{ [key in number]: D }>((acc, item) => {
          const index = data.findIndex(value => isEqual(item as D, value));

          if (index !== -1) {
            acc[index] = item as D;
          }

          return acc;
        }, {}),
      );
    }

    allowUpdateSelected.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_selected]);

  const onReset = useCallback(() => {
    setSelected({});
  }, []);

  const handleChange = useCallback(() => {
    allowUpdateSelected.current = false;

    const values = Object.values(selected);
    const value = (multiply ? values : values[0]) as M extends true ? D[] : D;

    onChange?.(value);
  }, [multiply, onChange, selected]);

  const toggleSelect = useCallback(
    (item: D, active: boolean, index: number) => {
      if (multiply) {
        if (active) {
          setSelected({ ...selected, [index]: item });
        } else {
          const newValue = { ...selected };
          delete newValue[index];

          setSelected(newValue);
        }
      } else {
        setSelected({ [index]: item });
      }
    },
    [multiply, selected],
  );

  const onPress = useCallback(() => {
    onOpen?.();
    modalRef.current?.open();
  }, [onOpen, modalRef]);

  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<D>) => {
      const onPressItem = () => {
        toggleSelect(item, !selected[index], index);
        _onPress?.(item, !!selected[index], index);

        if (closeOnChange && !selected[index] && !multiply) {
          onChange?.(item as any);
          modalRef.current?.close();
        }
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
    [
      touchableItemProps,
      _renderItem,
      selected,
      toggleSelect,
      _onPress,
      closeOnChange,
      multiply,
      onChange,
      modalRef,
    ],
  );

  const handleClose = useCallback(() => {
    modalProps?.onClose?.();
    if (!closeOnChange || multiply) {
      handleChange();
    }
  }, [closeOnChange, handleChange, modalProps, multiply]);

  const onClose = useCallback(() => {
    modalRef.current?.close();
  }, [modalRef]);

  const onApply = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <TouchableOpacity onPress={onPress} {...rest}>
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
    </TouchableOpacity>
  );
};

export const Select = memo(_Select) as typeof _Select;

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
