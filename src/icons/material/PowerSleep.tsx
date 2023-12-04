import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PowerSleepIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.73 18C15.4 21.69 9.71003 22 6.00003 18.64C2.33003 15.31 2.04003 9.62 5.37003 5.93C6.90003 4.25 9.00003 3.2 11.27 3C7.96003 6.7 8.27003 12.39 12 15.71C13.63 17.19 15.78 18 18 18C18.25 18 18.5 18 18.73 18Z" />
    </Svg>
  );
};
