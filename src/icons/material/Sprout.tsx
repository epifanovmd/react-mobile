import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SproutIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 22.0004V20.0004C2 20.0004 7 18.0004 12 18.0004C17 18.0004 22 20.0004 22 20.0004V22.0004H2ZM11.3 9.10042C10.1 5.20042 4 6.10042 4 6.10042C4 6.10042 4.2 13.9004 9.9 12.7004C9.5 9.80042 8 9.00042 8 9.00042C10.8 9.00042 11 12.4004 11 12.4004V17.0004C11.3 17.0004 11.7 17.0004 12 17.0004C12.3 17.0004 12.7 17.0004 13 17.0004V12.8004C13 12.8004 13 8.90042 16 7.90042C16 7.90042 14 10.9004 14 12.9004C21 13.6004 21 4.00042 21 4.00042C21 4.00042 12.1 3.00042 11.3 9.10042Z" />
    </Svg>
  );
};
