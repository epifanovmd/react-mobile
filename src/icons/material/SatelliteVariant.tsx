import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SatelliteVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.62 1L17.28 6.67L15.16 8.79L13.04 6.67L11.62 8.09L13.95 10.41L12.79 11.58L13.24 12.04C14.17 11.61 15.31 11.77 16.07 12.54L12.54 16.07C11.77 15.31 11.61 14.17 12.04 13.24L11.58 12.79L10.41 13.95L8.09 11.62L6.67 13.04L8.79 15.16L6.67 17.28L1 11.62L3.14 9.5L5.26 11.62L6.67 10.21L3.84 7.38C3.06 6.6 3.06 5.33 3.84 4.55L4.55 3.84C5.33 3.06 6.6 3.06 7.38 3.84L10.21 6.67L11.62 5.26L9.5 3.14L11.62 1ZM18 14C18 15.0609 17.5786 16.0783 16.8284 16.8284C16.0783 17.5786 15.0609 18 14 18V16C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14H18ZM22 14C22 16.1217 21.1571 18.1566 19.6569 19.6569C18.1566 21.1571 16.1217 22 14 22V20C15.5913 20 17.1174 19.3679 18.2426 18.2426C19.3679 17.1174 20 15.5913 20 14H22Z" />
    </Svg>
  );
};
