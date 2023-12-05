import { replaceInputString } from '@force-dev/utils';
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
  ColorValue,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
} from 'react-native';
import { FlexProps, Row } from '../flexView';
import { mergeRefs } from '../../helpers';
import { Touchable } from '../touchable';
import { EyeIcon } from '../../icons/material/Eye';
import { EyeOffIcon } from '../../icons/material/EyeOff';
import { CloseCircleIcon } from '../../icons/material/CloseCircle';

type OmittedTextProps = Omit<
  TextInputProps,
  'editable' | 'textContentType' | 'secureTextEntry' | 'cursorColor'
>;

export interface InputProps extends OmittedTextProps {
  flexProps?: FlexProps;

  inputStyle?: TextStyle;
  inputTextColor?: ColorValue;

  type?: 'password' | 'text' | 'number' | 'floating';
  clearable?: boolean;
  disabled?: boolean;

  leftSlot?: React.JSX.Element;
  rightSlot?: React.JSX.Element;

  renderClearableIcon?: (fill?: ColorValue) => React.JSX.Element | null;
  renderSecurityIcon?: (
    visible: boolean,
    fill?: ColorValue,
  ) => React.JSX.Element | null;
}

export const Input = memo(
  forwardRef<TextInput, InputProps>(
    (
      {
        flexProps,
        value,
        onChangeText,
        type = 'text',
        clearable,
        disabled,
        keyboardType,

        inputTextColor = '#ffffff',
        placeholderTextColor = '#ffffff90',

        leftSlot,
        rightSlot,

        renderClearableIcon = _renderClearableIcon,
        renderSecurityIcon = _renderSecurityIcon,
        ...rest
      },
      ref,
    ) => {
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

      const _onChangeText = useCallback(
        (text: string) => {
          const supportType =
            type === 'text' || type === 'number' || type === 'floating';

          const _value: string = replaceInputString(text, {
            type: supportType ? type : 'text',
          });

          setHasValue(!!_value);
          textInputRef.current?.setNativeProps({ text: _value });
          onChangeText && onChangeText(_value);
        },
        [onChangeText, type],
      );

      const clear = useCallback(() => {
        setHasValue(false);
        textInputRef.current?.clear();

        onChangeText && onChangeText('');
      }, [onChangeText]);

      const style = useMemo(
        () => [s.input, { color: inputTextColor }, rest.inputStyle],
        [inputTextColor, rest.inputStyle],
      );

      const numberType = type === 'number' || type === 'floating';
      const _keyboardType =
        keyboardType ?? (numberType ? 'decimal-pad' : undefined);

      const editable = !disabled;
      const textContentType = type === 'password' ? 'password' : 'none';
      const secureTextEntry = type === 'password' && !visiblePassword;

      return (
        <Row alignItems={'center'} pv={6} {...flexProps}>
          {leftSlot}

          <TextInput
            ref={mergeRefs([ref, textInputRef])}
            {...rest}
            style={style}
            value={value}
            cursorColor={inputTextColor}
            placeholderTextColor={placeholderTextColor}
            onChangeText={_onChangeText}
            editable={editable}
            keyboardType={_keyboardType}
            textContentType={textContentType}
            secureTextEntry={secureTextEntry}
          />

          {clearable && hasValue && !disabled && (
            <Touchable disabled={disabled} onPress={clear}>
              {renderClearableIcon(inputTextColor)}
            </Touchable>
          )}

          {type === 'password' && (
            <Touchable disabled={disabled} onPress={toggleVisiblePassword}>
              {renderSecurityIcon(visiblePassword, inputTextColor)}
            </Touchable>
          )}

          {rightSlot}
        </Row>
      );
    },
  ),
);

const s = StyleSheet.create({
  input: {
    flexGrow: 1,
    padding: 0,
    flexShrink: 1,
    fontSize: 16,
    marginVertical: 2,
  },
});

const _renderClearableIcon = (fill?: ColorValue) => (
  <CloseCircleIcon height={18} width={18} mh={4} fill={fill} />
);

const _renderSecurityIcon = (visible: boolean, fill?: ColorValue) =>
  visible ? (
    <EyeIcon height={18} width={18} mh={4} fill={fill} />
  ) : (
    <EyeOffIcon height={18} width={18} mh={4} fill={fill} />
  );
