import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatAnnotationMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.5 7H8.5L3 21H5.2L6.3 18H12.5L13.6 21H16L10.5 7ZM7.1 16L9.5 9.7L11.9 16H7.1ZM22 7H14V5H22V7Z" />
    </Svg>
  );
};
