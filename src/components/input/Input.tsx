import { replaceInputString } from "@force-dev/utils";
import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import { mergeRefs } from "../../helpers";
import { RenderConditional } from "../renderer";

type OmittedTextProps = Omit<
  TextInputProps,
  "editable" | "textContentType" | "secureTextEntry" | "cursorColor" | "style"
>;

export interface InputProps extends OmittedTextProps {
  containerStyle?: StyleProp<ViewStyle>;

  inputStyle?: StyleProp<TextStyle>;
  inputTextColor?: ColorValue;

  type?: "password" | "text" | "number" | "floating";
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
        type = "text",
        clearable,
        disabled,
        keyboardType,

        inputTextColor = "#ffffff",
        placeholderTextColor = "#ffffff90",

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
            type === "text" || type === "number" || type === "floating";

          const _value: string = replaceInputString(text, {
            type: supportType ? type : "text",
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

        onChangeText && onChangeText("");
      }, [onChangeText]);

      const style = useMemo(
        () => [s.input, { color: inputTextColor }, rest.inputStyle],
        [inputTextColor, rest.inputStyle],
      );

      const numberType = type === "number" || type === "floating";
      const _keyboardType =
        keyboardType ?? (numberType ? "decimal-pad" : undefined);

      const editable = !disabled;
      const textContentType = type === "password" ? "password" : "none";
      const secureTextEntry = type === "password" && !visiblePassword;

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

          <RenderConditional if={type === "password" && !disabled}>
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
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    flexDirection: "row",
  },
  input: {
    flexGrow: 1,
    padding: 0,
    flexShrink: 1,
    fontSize: 16,
    marginVertical: 2,
    width: "100%",
  },
});

const _renderClearableIcon = (
  onClear: () => void,
  disabled?: boolean,
  fill?: ColorValue,
) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onClear}
    style={{ paddingHorizontal: 4 }}
  >
    <Svg viewBox="0 0 24 24" height={18} width={18} fill={fill}>
      <Path d="M12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12C2 6.47 6.47 2 12 2ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" />
    </Svg>
  </TouchableOpacity>
);

const _renderSecurityIcon = (
  onToggle: () => void,
  visible: boolean,
  disabled?: boolean,
  fill?: ColorValue,
) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onToggle}
    style={{ paddingHorizontal: 4 }}
  >
    {visible ? (
      <Svg viewBox="0 0 24 24" height={18} width={18} fill={fill}>
        <Path d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z" />
      </Svg>
    ) : (
      <Svg viewBox="0 0 24 24" height={18} width={18} fill={fill}>
        <Path d="M11.83 9L15 12.16C15 12.11 15 12.05 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.94 9 11.89 9 11.83 9ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.77 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 11.21 7.2 10.47 7.53 9.8ZM2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.81 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 12.64 16.87 13.26 16.64 13.82L19.57 16.75C21.07 15.5 22.27 13.86 23 12C21.27 7.61 17 4.5 12 4.5C10.6 4.5 9.26 4.75 8 5.2L10.17 7.35C10.74 7.13 11.35 7 12 7Z" />
      </Svg>
    )}
  </TouchableOpacity>
);
