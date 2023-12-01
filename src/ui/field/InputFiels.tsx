import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { Field, FieldProps } from './Field';
import { Input as InputComponent, InputProps } from '../input';
import { TextInput } from 'react-native';
import { createSlot, mergeRefs, useSlotProps } from '../../helpers';

interface InputFieldProps extends FieldProps {
  value?: string;
  label?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;

  alwaysShowLabel?: boolean;
}

const Input =
  createSlot<
    Omit<InputProps, 'value' | 'placeholder' | 'disabled' | 'onChangeText'>
  >('Input');

interface InputSlots {
  Input: typeof Input;
}

export const InputField = memo<InputFieldProps, InputSlots>(
  (
    {
      value,
      error,
      disabled,
      label,
      placeholder,
      onChangeText,
      alwaysShowLabel,
      children,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useRef<TextInput>(null);
    const [showLabel, setShowLabel] = useState<boolean>(false);

    const { input } = useSlotProps(InputField, children);

    const handlePress = useCallback(() => {
      inputRef.current?.focus();
    }, []);

    const _onChangeText = useCallback(
      (text: string) => {
        setShowLabel(!!text);
        onChangeText?.(text);
      },
      [onChangeText],
    );

    const mergedRef = useMemo(() => mergeRefs([ref, inputRef]), [ref]);

    return (
      <Field error={error} disabled={disabled} {...rest} onPress={handlePress}>
        <Field.Label
          radius={4}
          text={value || showLabel || alwaysShowLabel ? label : ''}
        />

        <Field.Content>
          <InputComponent
            ref={mergedRef}
            {...input}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChangeText={_onChangeText}
          />
        </Field.Content>
      </Field>
    );
  },
);

InputField.Input = Input;
