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
import Svg, { Path, SvgProps } from 'react-native-svg';
import { FlexProps, Row } from '../flexView';
import { mergeRefs } from '../../helpers';
import { Touchable } from '../touchable';

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

  renderClearableIcon?: () => React.JSX.Element | null;
  renderSecurityIcon?: (visible: boolean) => React.JSX.Element | null;
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
              {renderClearableIcon({ fill: inputTextColor })}
            </Touchable>
          )}

          {type === 'password' && (
            <Touchable disabled={disabled} onPress={toggleVisiblePassword}>
              {renderSecurityIcon(visiblePassword, { fill: inputTextColor })}
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
  icon: { marginHorizontal: 4 },
});

const _renderSecurityIcon = (visible: boolean, svgProps?: SvgProps) =>
  visible ? (
    <Svg
      height={18}
      width={18}
      style={s.icon}
      viewBox="0 0 24 24"
      {...svgProps}
    >
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
    </Svg>
  ) : (
    <Svg height={18} width={18} viewBox="0 0 24 24" {...svgProps}>
      <Path
        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
        fill="none"
      />
      <Path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
    </Svg>
  );

const _renderClearableIcon = (svgProps?: SvgProps) => (
  <Svg
    height={18}
    width={18}
    style={[s.icon]}
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z" />
  </Svg>
);
