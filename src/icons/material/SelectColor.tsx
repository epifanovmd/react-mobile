import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SelectColorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3.88 3C3.38 3.06 3 3.5 3 4V5H4H5V4V3H4H3.88ZM7 3V5H9V3H7ZM11 3V5H13V3H11ZM15 3V5H17V3H15ZM19 3V4V5H20H21V4V3.88C20.94 3.38 20.5 3 20 3H19ZM3 7V9H5V7H3ZM19 7V9H21V7H19ZM3 11V13H5V11H3ZM19.31 12C19.18 12 19.05 12.05 18.95 12.14L17.39 13.71L16.43 12.75L15.72 13.46L16.43 14.17L11.97 18.63V21H14.35L18.8 16.54L19.5 17.25L20.22 16.54L19.26 15.58L20.82 14.03C21 13.83 21 13.5 20.82 13.31L19.65 12.14C19.56 12.05 19.44 12 19.31 12ZM3 15V17H5V15H3ZM17 15L17.97 15.97L13.93 20L12.97 19.04L17 15ZM3 19V20V20.12C3.06 20.62 3.5 21 4 21H5V20V19H4H3ZM7 19V21H9V19H7Z" />
    </Svg>
  );
};
