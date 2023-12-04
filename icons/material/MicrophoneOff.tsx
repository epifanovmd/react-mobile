import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MicrophoneOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 11C19 12.19 18.66 13.3 18.1 14.28L16.87 13.05C17.14 12.43 17.3 11.74 17.3 11H19ZM15 11.16L9 5.18V5C9 4.20435 9.31607 3.44129 9.87868 2.87868C10.4413 2.31607 11.2044 2 12 2C12.7956 2 13.5587 2.31607 14.1213 2.87868C14.6839 3.44129 15 4.20435 15 5V11V11.16ZM4.27 3L21 19.73L19.73 21L15.54 16.81C14.77 17.27 13.91 17.58 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1C12.81 16.1 13.6 15.91 14.31 15.58L12.65 13.92L12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11V10.28L3 4.27L4.27 3Z" />
    </Svg>
  );
};
