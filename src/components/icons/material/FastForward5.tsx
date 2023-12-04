import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FastForward5Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.5 3C14.15 3 16.55 4 18.4 5.6L21 3V10H14L16.62 7.38C15.23 6.22 13.46 5.5 11.5 5.5C7.96003 5.5 4.95003 7.81 3.90003 11L1.53003 10.22C2.92003 6.03 6.85003 3 11.5 3ZM9.00003 12H15V14H11V16H13C14.11 16 15 16.9 15 18V20C15 21.11 14.11 22 13 22H9.00003V20H13V18H9.00003V12Z" />
    </Svg>
  );
};
