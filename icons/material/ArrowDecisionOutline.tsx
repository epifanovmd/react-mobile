import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ArrowDecisionOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.64 13.4C8.63 12.5 7.34 12.03 6 12V15L2 11L6 7V10C7.67 10 9.3 10.57 10.63 11.59C10.22 12.15 9.89 12.76 9.64 13.4ZM18 15V12C17.5 12 13.5 12.16 13.05 16.2C14.61 16.75 15.43 18.47 14.88 20.03C14.33 21.59 12.61 22.41 11.05 21.86C9.5 21.3 8.67 19.59 9.22 18.03C9.5 17.17 10.2 16.5 11.05 16.2C11.34 12.61 14.4 9.88 18 10V7L22 11L18 15ZM13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19ZM11 11.12C11.58 10.46 12.25 9.89 13 9.43V5H16L12 1L8 5H11V11.12Z" />
    </Svg>
  );
};
