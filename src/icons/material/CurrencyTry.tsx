import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyTryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 12C19 14.3869 18.0518 16.6761 16.364 18.364C14.6761 20.0518 12.3869 21 10 21H8V12.77L5 13.87V11.74L8 10.64V8.87L5 9.96V7.84L8 6.74V3H10V6L15 4.2V6.32L10 8.14V9.92L15 8.1V10.23L10 12.05V19C11.8565 19 13.637 18.2625 14.9497 16.9497C16.2625 15.637 17 13.8565 17 12H19Z" />
    </Svg>
  );
};
