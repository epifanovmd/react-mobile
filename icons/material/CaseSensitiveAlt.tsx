import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CaseSensitiveAltIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 14C20 12.5 19.5 12 18 12H16V11C16 10 16 10 14 10V15.4V19H16H18C19.5 19 20 18.47 20 17V14ZM12 12C12 10.5 11.47 10 10 10H6C4.5 10 4 10.5 4 12V19H6V16H10V19H12V12ZM10 7H14V5H10V7ZM22 9V20C22 21.11 21.11 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V9C2 7.89 2.89 7 4 7H8V5L10 3H14L16 5V7H20C20.5304 7 21.0391 7.21071 21.4142 7.58579C21.7893 7.96086 22 8.46957 22 9ZM16 17H18V14H16V17ZM6 12H10V14H6V12Z" />
    </Svg>
  );
};
