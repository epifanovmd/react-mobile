import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 17V19H14V17H22ZM8 14C8 12.23 10 8.96 12 6.39C13.5 8.33 15 10.67 15.67 12.47C16.27 12.21 16.93 12.06 17.62 12C16.31 8.1 12 3.25 12 3.25C12 3.25 6 10 6 14C6 17.31 8.69 20 12 20C12.12 20 12.23 20 12.34 20C12.12 19.36 12 18.7 12 18C9.79 18 8 16.21 8 14Z" />
    </Svg>
  );
};
