import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CricketIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.34 17.77L15.75 16.36L20 20.58L18.56 22L14.34 17.77ZM18.5 2C19.4283 2 20.3185 2.36875 20.9749 3.02513C21.6313 3.6815 22 4.57174 22 5.5C22 6.42826 21.6313 7.3185 20.9749 7.97487C20.3185 8.63125 19.4283 9 18.5 9C17.5718 9 16.6815 8.63125 16.0251 7.97487C15.3688 7.3185 15 6.42826 15 5.5C15 4.57174 15.3688 3.6815 16.0251 3.02513C16.6815 2.36875 17.5718 2 18.5 2ZM2.24001 7.11L5.07001 4.28C5.46001 3.89 6.09001 3.89 6.50001 4.28L14.97 12.77C15.36 13.16 15.36 13.79 14.97 14.18L12.14 17C11.75 17.4 11.12 17.4 10.72 17L2.24001 8.53C1.85001 8.13 1.85001 7.5 2.24001 7.11Z" />
    </Svg>
  );
};
