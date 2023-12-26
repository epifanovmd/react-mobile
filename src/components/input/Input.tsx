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
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { mergeRefs } from '../../helpers';
import { Touchable } from '../touchable';
import { EyeIcon } from '../../icons/material/Eye';
import { EyeOffIcon } from '../../icons/material/EyeOff';
import { CloseCircleIcon } from '../../icons/material/CloseCircle';
import { RenderConditional } from '../renderer';

type OmittedTextProps = Omit<
  TextInputProps,
  'editable' | 'textContentType' | 'secureTextEntry' | 'cursorColor' | 'style'
>;

export interface InputProps extends OmittedTextProps {
  containerStyle?: StyleProp<ViewStyle>;

  inputStyle?: StyleProp<TextStyle>;
  inputTextColor?: ColorValue;

  type?: 'password' | 'text' | 'number' | 'floating';
  clearable?: boolean;
  disabled?: boolean;

  leftSlot?: React.JSX.Element;
  rightSlot?: React.JSX.Element;

  renderClearableIcon?: (
    onClear: () => void,
    disable?: boolean,
    fill?: ColorValue,
  ) => React.JSX.Element | null;
  renderSecurityIcon?: (
    onToggle: () => void,
    visible: boolean,
    disabled?: boolean,
    fill?: ColorValue,
  ) => React.JSX.Element | null;
}

export const Input = memo(
  forwardRef<TextInput, InputProps>(
    (
      {
        containerStyle,
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

      const onClear = useCallback(() => {
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
        <View style={[s.containerStyle, containerStyle]}>
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

          <RenderConditional if={clearable && hasValue && !disabled}>
            {renderClearableIcon(onClear, disabled, inputTextColor)}
          </RenderConditional>

          <RenderConditional if={type === 'password' && !disabled}>
            {renderSecurityIcon(
              toggleVisiblePassword,
              visiblePassword,
              disabled,
              inputTextColor,
            )}
          </RenderConditional>

          {rightSlot}
        </View>
      );
    },
  ),
);

const s = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: 'row',
  },
  input: {
    flexGrow: 1,
    padding: 0,
    flexShrink: 1,
    fontSize: 16,
    marginVertical: 2,
  },
});

const _renderClearableIcon = (
  onClear: () => void,
  disabled?: boolean,
  fill?: ColorValue,
) => (
  <Touchable disabled={disabled} onPress={onClear}>
    <CloseCircleIcon height={18} width={18} mh={4} fill={fill} />
  </Touchable>
);

const _renderSecurityIcon = (
  onToggle: () => void,
  visible: boolean,
  disabled?: boolean,
  fill?: ColorValue,
) => (
  <Touchable disabled={disabled} onPress={onToggle}>
    {visible ? (
      <EyeIcon height={18} width={18} mh={4} fill={fill} />
    ) : (
      <EyeOffIcon height={18} width={18} mh={4} fill={fill} />
    )}
  </Touchable>
);
