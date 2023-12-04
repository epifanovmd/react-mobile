import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MaceIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.92 9.27C19.97 9 20 8.76 20 8.5C20 8.24 19.97 8 19.92 7.73L23 8.5L19.92 9.27ZM14.69 12.92L15.5 16.16L16.31 12.92C16.05 12.97 15.78 13 15.5 13C15.22 13 14.95 12.97 14.69 12.92ZM11.7 10.89L6.79 15.79L6.09 15.09L1 20.17L3.83 23L8.91 17.91L8.21 17.21L13.11 12.3C12.54 11.94 12.06 11.46 11.7 10.89ZM16.27 4.08L15.5 1L14.73 4.08C15 4.03 15.24 4 15.5 4C15.76 4 16 4.03 16.27 4.08ZM8 8.5L11.08 9.27C11.03 9 11 8.76 11 8.5C11 8.24 11.03 8 11.08 7.73L8 8.5ZM18.63 10.04C18.86 9.58 19 9.06 19 8.5C19 7.94 18.86 7.42 18.63 6.96L21 3L17.04 5.37C16.58 5.14 16.06 5 15.5 5C14.94 5 14.42 5.14 13.96 5.37L10 3L12.37 6.96C12.14 7.42 12 7.94 12 8.5C12 10.43 13.57 12 15.5 12C16.06 12 16.58 11.86 17.04 11.63L21 14L18.63 10.04Z" />
    </Svg>
  );
};
