import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlagPlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 16L12.6 14H7V21H5V4H14L14.4 6H20V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V8H12.76L12.36 6H7V12H14.24L14.64 14H15.69C14.92 14.5 14.27 15.2 13.81 16H13ZM18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" />
    </Svg>
  );
};
