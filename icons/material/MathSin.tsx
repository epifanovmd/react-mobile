import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const MathSinIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 7C3.46957 7 2.96086 7.21071 2.58579 7.58579C2.21071 7.96086 2 8.46957 2 9V11C2 11.5304 2.21071 12.0391 2.58579 12.4142C2.96086 12.7893 3.46957 13 4 13H6V15H2V17H6C6.53043 17 7.03914 16.7893 7.41421 16.4142C7.78929 16.0391 8 15.5304 8 15V13C8 12.4696 7.78929 11.9609 7.41421 11.5858C7.03914 11.2107 6.53043 11 6 11H4V9H8V7H4ZM14 7V9H13V15H14V17H10V15H11V9H10V7H14ZM16 7V17H18V12L20 17H22V7H20V12L18 7H16Z" />
    </Svg>
  );
};
