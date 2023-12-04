import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TransferRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 8H5V16H3V8ZM7 8H9V16H7V8ZM11 8H13V16H11V8ZM15 19.25V4.75L22.25 12L15 19.25Z" />
    </Svg>
  );
};
