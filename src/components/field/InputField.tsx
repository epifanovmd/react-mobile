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
import {
  ColorValue,
  GestureResponderEvent,
  ScrollView,
  ScrollViewProps,
  TextInput,
} from 'react-native';
import { TextProps } from '../text';
import { Modal, ModalHeaderProps, ModalProps, useModal } from '../modal';
import { Input, InputProps } from '../input';
import {
  createSlot,
  mergeRefs,
  resolveStyleProp,
  useSlotProps,
} from '../../helpers';
import { SafeArea } from '../safeArea';
import { CloseIcon } from '../../icons/material/Close';
import { NativeSyntheticEvent } from 'react-native/Libraries/Types/CoreEventTypes';
import { TextInputFocusEventData } from 'react-native/Libraries/Components/TextInput/TextInput';

interface InputFieldProps extends FieldProps {}

type ModalPropsWithRenderClose = ModalProps & {
  renderCloseIcon?: (fill?: ColorValue) => React.JSX.Element;
};

const InputSlot = createSlot<InputProps>('Input');
const ModalSlot = createSlot<ModalPropsWithRenderClose>('Modal');
const ModalScrollView = createSlot<ScrollViewProps>('ModalScrollView');
const ModalHeader = createSlot<ModalHeaderProps>('ModalHeader');
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
      modalHeader?.onClose?.();
      modalRef.current?.close();
    }, [modalHeader, modalRef]);

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

    const closeIcon = useCallback(
      (fill?: ColorValue) =>
        (
          modalHeader?.renderCloseIcon ??
          modal?.renderCloseIcon ??
          _renderCloseIcon
        )(fill ?? resolveStyleProp([modalLabel?.style]).color ?? '#fff'),
      [modal?.renderCloseIcon, modalHeader?.renderCloseIcon, modalLabel?.style],
    );

    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        input?.onBlur?.(e);
        modalRef.current?.close();
      },
      [input, modalRef],
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
              <ModalHeader
                {...modalHeader}
                label={modalHeader?.label || label?.text}
                textStyle={[modalLabelStyle, modalHeader?.textStyle]}
                renderCloseIcon={closeIcon}
                onClose={onRequestClose}
              >
                {modalHeader?.children}
              </ModalHeader>

              <InputField ref={mergedRef} onPress={handlePress}>
                <InputField.Content {...content} />
                <InputField.Input
                  {...input}
                  onBlur={handleBlur}
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

const _renderCloseIcon = (fill?: ColorValue) => <CloseIcon fill={fill} />;
