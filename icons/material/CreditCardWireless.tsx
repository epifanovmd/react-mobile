import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CreditCardWirelessIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.93 4.92047L6.34 6.33047C9.46 3.20047 14.53 3.20047 17.66 6.33047L19.07 4.92047C15.17 1.00047 8.84 1.00047 4.93 4.92047ZM7.76 7.75047L9.17 9.16047C10.73 7.60047 13.26 7.60047 14.83 9.16047L16.24 7.75047C13.9 5.41047 10.1 5.41047 7.76 7.75047ZM18 11.0005H6C4.89 11.0005 4 11.9005 4 13.0005V21.0005C4 22.1105 4.89 23.0005 6 23.0005H18C19.11 23.0005 20 22.1105 20 21.0005V13.0005C20 11.9005 19.11 11.0005 18 11.0005ZM18 17.0005H6V14.0005H18V17.0005Z" />
    </Svg>
  );
};
