import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrength3Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11.9999 3C7.78988 3 3.69988 4.41 0.379883 7C4.40988 12.06 7.88988 16.37 11.9999 21.5C16.0799 16.42 20.2399 11.24 23.6499 7C20.3199 4.41 16.2199 3 11.9999 3ZM11.9999 5C15.0699 5 18.0899 5.86 20.7099 7.45L18.7699 9.88C17.2599 9 14.8799 8 11.9999 8C8.99988 8 6.67988 9 5.20988 9.84L3.26988 7.44C5.90988 5.85 8.92988 5 11.9999 5Z" />
    </Svg>
  );
};
