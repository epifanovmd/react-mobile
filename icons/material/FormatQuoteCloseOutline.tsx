import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FormatQuoteCloseOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.9999 6V14H14.8799L12.8799 18H18.6199L20.9999 13.24V6H12.9999ZM14.9999 8H18.9999V12.76L17.3799 16H16.1199L18.1199 12H14.9999V8ZM2.99988 6V14H4.87988L2.87988 18H8.61988L10.9999 13.24V6H2.99988ZM4.99988 8H8.99988V12.76L7.37988 16H6.11988L8.11988 12H4.99988V8Z" />
    </Svg>
  );
};
