import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HeadCheckOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3C16.88 3 20 6.14 20 10C20 12.8 18.37 15.19 16 16.31V21H9.00003V18H8.00003C6.89003 18 6.00003 17.11 6.00003 16V13H4.50003C4.08003 13 3.84003 12.5 4.08003 12.19L6.00003 9.66C6.19003 5.95 9.23003 3 13 3ZM13 1C8.42003 1 4.61003 4.43 4.06003 8.91L2.50003 11C1.92003 11.72 1.82003 12.72 2.24003 13.59C2.60003 14.31 3.24003 14.8 4.00003 14.95V16C4.00003 17.86 5.28003 19.43 7.00003 19.87V23H18V17.47C20.5 15.83 22 13.06 22 10C22 5.04 17.96 1 13 1ZM12.47 13L9.00003 9.5L10.4 8.09L12.47 10.17L16.6 6L18 7.41L12.47 13Z" />
    </Svg>
  );
};
