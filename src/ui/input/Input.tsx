import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Touchable } from '../touchable';
import { Col, FlexProps, Row, useFlexProps } from '../flexView';
import Svg, { Path } from 'react-native-svg';
import { TextStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import { mergeRefs } from '../../helpers';

export interface InputProps
  extends Omit<
    TextInputProps,
    | 'style'
    | 'value'
    | 'placeholder'
    | 'onChangeText'
    | 'editable'
    | 'textContentType'
    | 'secureTextEntry'
  > {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  inputStyle?: TextStyle;

  type?: 'password' | 'text' | 'number';
  clearableIcon?: React.JSX.Element | null;
  clearable?: boolean;
  disabled?: boolean;
  editable?: boolean;
  prefix?: string;

  leftSlot?: JSX.Element;
  rightSlot?: JSX.Element;
}

export const Input = memo(
  forwardRef<TextInput, InputProps & FlexProps>(
    (
      {
        value,
        onChangeText,
        placeholder,
        inputStyle,
        type = 'text',
        clearableIcon,
        clearable,
        disabled,
        editable,
        prefix,
        leftSlot,
        rightSlot,
        ...rest
      },
      ref,
    ) => {
      const { ownProps, flexProps } = useFlexProps(rest);

      const textInputRef = useRef<TextInput>(null);

      const [visiblePassword, setVisiblePassword] = useState(false);
      const [hasValue, setHasValue] = useState(!!value);

      useEffect(() => {
        if (value !== undefined && hasValue !== !!value) {
          setHasValue(!!value);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [value]);

      const toggleVisiblePassword = useCallback(() => {
        setVisiblePassword(state => !state);
      }, []);

      const handleChange = useCallback(
        (text: string) => {
          let _value: string;
          if (prefix && type === 'text') {
            if (text.trim() === prefix) {
              _value = '';
            } else {
              const needPrefix =
                prefix && text.slice(0, prefix?.length) !== prefix && text;
              _value = needPrefix ? `${prefix} ${text}` : text;
            }
          } else {
            if (type === 'number') {
              _value = text
                .replace(/,/g, '.')
                .replace(/[^0-9.]/g, '')
                .replace(/^([^\\.]*\.)|\./g, '$1');

              if (_value[0] === '.') {
                _value = `0${_value}`;
              }
              if (_value.length > 1 && _value[0] === '0' && _value[1] !== '.') {
                _value = _value.slice(1, _value.length);
              }
            } else {
              _value = text;
            }
          }

          setHasValue(!!_value);
          textInputRef.current?.setNativeProps({ text: _value });
          onChangeText && onChangeText(_value);
        },
        [onChangeText, prefix, type],
      );

      const clear = useCallback(() => {
        setHasValue(false);
        textInputRef.current?.clear();

        onChangeText && onChangeText('');
      }, [onChangeText]);

      const icon = useMemo(
        () => (
          <Svg
            height={18}
            width={18}
            style={s.icon}
            fill={s.input.color}
            viewBox="0 0 24 24"
          >
            <Path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" />
          </Svg>
        ),
        [],
      );

      const securityIcon = useMemo(
        () =>
          visiblePassword ? (
            <Svg
              height={18}
              width={18}
              style={s.icon}
              viewBox="0 0 24 24"
              fill={s.input.color}
            >
              <Path d="M0 0h24v24H0V0z" fill="none" />
              <Path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
            </Svg>
          ) : (
            <Svg
              height={18}
              width={18}
              style={s.icon}
              viewBox="0 0 24 24"
              fill={s.input.color}
            >
              <Path
                d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                fill="none"
              />
              <Path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
            </Svg>
          ),
        [visiblePassword],
      );

      const _inputStyle = useMemo(() => [s.input, inputStyle], [inputStyle]);

      return (
        <Row alignItems={'center'} {...flexProps}>
          {!!leftSlot && (
            <Col alignItems={'center'} justifyContent={'center'}>
              {leftSlot}
            </Col>
          )}
          <TextInput
            ref={mergeRefs([ref, textInputRef])}
            {...ownProps}
            style={_inputStyle}
            value={value}
            placeholder={prefix ?? placeholder}
            onChangeText={handleChange}
            editable={editable && !disabled}
            keyboardType={
              ownProps.keyboardType ??
              (type === 'number' ? 'decimal-pad' : undefined)
            }
            textContentType={type === 'password' ? 'password' : 'none'}
            secureTextEntry={type === 'password' && !visiblePassword}
          />

          {clearable && hasValue && !disabled && (
            <Touchable disabled={disabled} onPress={clear}>
              {clearableIcon ?? icon}
            </Touchable>
          )}

          {type === 'password' && (
            <Touchable disabled={disabled} onPress={toggleVisiblePassword}>
              {securityIcon}
            </Touchable>
          )}

          {!!rightSlot && (
            <Col alignItems={'center'} justifyContent={'center'}>
              {rightSlot}
            </Col>
          )}
        </Row>
      );
    },
  ),
);

const s = StyleSheet.create({
  input: {
    color: '#ffffff',
    flexGrow: 1,
    padding: 0,
    flexShrink: 1,
    fontSize: 14,
    marginVertical: 4,
  },
  icon: { marginHorizontal: 4 },
});
