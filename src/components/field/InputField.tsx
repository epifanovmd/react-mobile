import React, {
  FC,
  forwardRef,
  memo,
  PropsWithChildren,
  RefAttributes,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Field, FieldProps, FieldSlots } from './Field';
import { GestureResponderEvent, ScrollView, TextInput } from 'react-native';
import { Text, TextProps } from '../text';
import { SvgProps } from 'react-native-svg';
import { Modal, ModalProps, useModal } from '../modal';
import { Input, InputProps } from '../input';
import {
  createSlot,
  mergeRefs,
  resolveStyleProp,
  useSlotProps,
} from '../../helpers';
import { FlexProps, Row } from '../flexView';
import { Touchable } from '../touchable';
import { SafeArea } from '../safeArea';
import { CloseIcon } from '../../icons/material/Close';
import { FlexSvgProps } from '../../icons';

interface InputFieldProps extends FieldProps {}

type ModalPropsWithRenderClose = ModalProps & {
  renderCloseIcon?: FC<SvgProps>;
};

const InputSlot = createSlot<InputProps>('Input');
const ModalSlot = createSlot<ModalPropsWithRenderClose>('Modal');
const ModalScrollView = createSlot<ModalProps>('ModalScrollView');
const ModalHeader = createSlot<PropsWithChildren<FlexProps>>('ModalHeader');
const ModalLabel = createSlot<TextProps>('ModalLabel');

export interface InputFieldSlots extends FieldSlots {
  Input: typeof InputSlot;
  Modal: typeof ModalSlot;
  ModalScrollView: typeof ModalScrollView;
  ModalHeader: typeof ModalHeader;
  ModalLabel: typeof ModalLabel;
}

const _InputField: FC<
  PropsWithChildren<InputFieldProps & RefAttributes<TextInput>>
> = memo(
  forwardRef(({ children, onPress, ...rest }, ref) => {
    const inputRef = useRef<TextInput>(null);

    const {
      input,
      modal,
      modalScrollView,
      modalHeader,
      modalLabel,
      leftIcon,
      label,
      content,
      rightIcon,
      description,
      error,
    } = useSlotProps(InputField, children);

    const { ref: modalRef } = useModal();

    const openModal = useCallback(() => {
      modalRef.current?.open();
    }, [modalRef]);

    const handlePress = useCallback(
      (value: any, e: GestureResponderEvent) => {
        inputRef.current?.focus();
        openModal();
        setModalValue(input?.value || '');
        onPress?.(value, e);
      },
      [input?.value, onPress, openModal],
    );

    const [modalValue, setModalValue] = useState<string>(input?.value || '');

    const onClose = useCallback(() => {
      modal?.onClose?.();
      input?.onChangeText?.(modalValue);

      inputRef.current?.blur();
    }, [input, modal, modalValue]);

    const onClosed = useCallback(() => {
      modal?.onClosed?.();
      setModalValue('');
    }, [modal]);

    const onRequestClose = useCallback(() => {
      modalRef.current?.close();
    }, [modalRef]);

    const mergedRef = useMemo(() => mergeRefs([ref, inputRef]), [ref]);
    const disabled = rest.disabled || input?.disabled;

    const modalStyle = useMemo(
      () => [
        { backgroundColor: 'gray', padding: 8, minHeight: 250 },
        modal?.modalStyle,
      ],
      [modal?.modalStyle],
    );

    const modalLabelStyle = useMemo(
      () => [{ fontSize: 18, color: '#fff' }, modalLabel?.style],
      [modalLabel?.style],
    );

    const closeIcon = useMemo(
      () =>
        (modal?.renderCloseIcon ?? _renderCloseIcon)({
          fill: resolveStyleProp([modalLabel?.style]).color ?? '#fff',
        }),
      [modal?.renderCloseIcon, modalLabel?.style],
    );

    return (
      <>
        <Field {...rest} onPress={handlePress}>
          <Field.Label {...label} />
          <Field.LeftIcon {...leftIcon} />
          <Field.Content {...content}>
            <Input
              ref={mergedRef}
              {...input}
              pointerEvents={disabled || !!modal ? 'none' : undefined}
              disabled={disabled || !!modal}
            />
          </Field.Content>
          <Field.RightIcon {...rightIcon} />
          <Field.Error color={'red'} {...error} />
          <Field.Description {...description} />
        </Field>
        {!!modal && (
          <Modal
            ref={modalRef}
            panGestureEnabled={false}
            adjustToContentHeight={true}
            withHandle={false}
            {...modal}
            modalStyle={modalStyle}
            onClose={onClose}
            onClosed={onClosed}
          >
            <ScrollView
              bounces={false}
              keyboardShouldPersistTaps={'handled'}
              {...modalScrollView}
            >
              <Row
                justifyContent={'space-between'}
                alignItems={'center'}
                mt={8}
                mb={16}
                {...modalHeader}
              >
                {modalHeader?.children ?? (
                  <Text {...modalLabel} style={modalLabelStyle}>
                    {label?.text}
                  </Text>
                )}
                <Touchable onPress={onRequestClose}>{closeIcon}</Touchable>
              </Row>

              <InputField ref={mergedRef} onPress={handlePress}>
                <InputField.Content {...content} />
                <InputField.Input
                  {...input}
                  value={modalValue}
                  onChangeText={setModalValue}
                  autoFocus={true}
                />
              </InputField>

              {modal?.children}
            </ScrollView>
            <SafeArea bottom={true} />
          </Modal>
        )}
      </>
    );
  }),
);

export const InputField = _InputField as typeof _InputField & InputFieldSlots;

InputField.Modal = ModalSlot;
InputField.ModalScrollView = ModalScrollView;
InputField.ModalHeader = ModalHeader;
InputField.ModalLabel = ModalLabel;
InputField.Input = InputSlot;

InputField.Label = Field.Label;
InputField.LeftIcon = Field.LeftIcon;
InputField.RightIcon = Field.RightIcon;
InputField.Content = Field.Content;
InputField.Description = Field.Description;
InputField.Error = Field.Error;

const _renderCloseIcon = (svgProps?: FlexSvgProps) => (
  <CloseIcon {...svgProps} />
);
