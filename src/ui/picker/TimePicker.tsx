import React, {
  FC,
  memo,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Col, Row } from '../flexView';
import { Button, ButtonProps } from '../button';
import { Picker, PickerProps } from './Picker';
import { SafeAreaBottom } from '../safeArea';
import { Touchable, TouchableProps } from '../touchable';
import { Modal, useModal, ModalProps } from '../modal';
import { StyleSheet, ViewProps, ViewStyle } from 'react-native';

export interface TimePickerProps extends TouchableProps {
  time?: string;
  onChange?: (time: string) => void;
  renderItem: (
    item: string,
    active: boolean,
    index: number,
  ) => React.JSX.Element;

  pickerProps?: Omit<
    PickerProps<string>,
    'index' | 'items' | 'renderItem' | 'onIndexChange' | 'lineStyle'
  >;

  leftPickerLineStyle?: ViewStyle;
  rightPickerLineStyle?: ViewStyle;

  modalProps?: ModalProps;
  containerProps?: ViewProps;

  actionsContainerProps?: ViewProps;
  resetButtonProps?: ButtonProps;
  acceptButtonProps?: ButtonProps;
}

const toTwoChars = (string: string) => {
  if (string.length === 1) {
    return `0${string}`;
  }

  return string;
};

const hours = new Array(24)
  .fill(0)
  .map((_item, index) => toTwoChars(`${index}`));
const minutes = new Array(60)
  .fill(0)
  .map((_item, index) => toTwoChars(`${index}`));

const getHourIndex = (hour?: string) => {
  const index = hours.findIndex(item => item === hour);

  return index === -1 ? 0 : index;
};

const getMinuteIndex = (minute?: string) => {
  const index = minutes.findIndex(item => item === minute);

  return index === -1 ? 0 : index;
};

export const TimePicker: FC<PropsWithChildren<TimePickerProps>> = memo(
  ({
    time,
    onChange,
    renderItem,
    children,
    pickerProps,
    leftPickerLineStyle,
    rightPickerLineStyle,
    modalProps,
    containerProps,
    actionsContainerProps,
    resetButtonProps,
    acceptButtonProps,
    ...rest
  }) => {
    const { ref: modalRef } = useModal();

    const [hour, minute] = useMemo(() => {
      const _time = new Date().toTimeString().split(':');

      return time ? time.split(':') : [_time[0], _time[1]];
    }, [time]);

    const [currentFirstIndex, setCurrentFirstIndex] = useState<number>(
      getHourIndex(hour),
    );

    const [currentSecondIndex, setCurrentSecondIndex] = useState<number>(
      getMinuteIndex(minute),
    );

    const reset = useCallback(() => {
      const _time = new Date().toTimeString().split(':');
      const [_hour, _minute] = time ? time.split(':') : [_time[0], _time[1]];

      setCurrentFirstIndex(getHourIndex(_hour));
      setCurrentSecondIndex(getMinuteIndex(_minute));
    }, [time]);

    useEffect(() => {
      reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [time]);

    const handleApply = useCallback(() => {
      if (onChange) {
        onChange(`${hours[currentFirstIndex]}:${minutes[currentSecondIndex]}`);
      }
      modalRef.current?.close();
    }, [currentFirstIndex, currentSecondIndex, modalRef, onChange]);

    const handleOpen = useCallback(() => {
      reset();
      modalRef.current?.open();
    }, [modalRef, reset]);

    const handleFirst = useCallback((_item: any, index: number) => {
      setCurrentFirstIndex(index);
    }, []);

    const handleSecond = useCallback((_item: any, index: number) => {
      setCurrentSecondIndex(index);
    }, []);

    const _leftPickerLineStyle = useMemo(
      () => ({
        ...s.leftLineStyle,
        ...leftPickerLineStyle,
      }),
      [leftPickerLineStyle],
    );
    const _rightPickerLineStyle = useMemo(
      () => ({
        ...s.rightLineStyle,
        ...rightPickerLineStyle,
      }),
      [rightPickerLineStyle],
    );

    return (
      <Touchable {...rest} onPress={handleOpen}>
        {children}

        <Modal
          ref={modalRef}
          adjustToContentHeight={true}
          childrenPanGestureEnabled={false}
          {...modalProps}
        >
          <Col pa={16} {...containerProps}>
            <Row>
              <Picker
                style={s.pickerStyle}
                lineStyle={_leftPickerLineStyle}
                itemHeight={27}
                {...pickerProps}
                index={currentFirstIndex}
                items={hours}
                renderItem={renderItem}
                onIndexChange={handleFirst}
              />
              <Picker
                style={s.pickerStyle}
                lineStyle={_rightPickerLineStyle}
                itemHeight={27}
                {...pickerProps}
                index={currentSecondIndex}
                items={minutes}
                renderItem={renderItem}
                onIndexChange={handleSecond}
              />
            </Row>

            <Row
              pt={16}
              justifyContent={'space-between'}
              {...actionsContainerProps}
            >
              <Button
                title={'Сбросить'}
                {...resetButtonProps}
                onPress={reset}
              />
              <Button
                title={'Применить'}
                {...acceptButtonProps}
                onPress={handleApply}
              />
            </Row>

            <SafeAreaBottom />
          </Col>
        </Modal>
      </Touchable>
    );
  },
);

const s = StyleSheet.create({
  leftLineStyle: {
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    marginLeft: 10,
    paddingRight: 10,
  },

  rightLineStyle: {
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    marginRight: 10,
    paddingLeft: 10,
  },
  pickerStyle: { flex: 1 },
});
