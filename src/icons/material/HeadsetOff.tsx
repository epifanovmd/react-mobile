import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadsetOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M1.5 4.77L3.57 6.84C3.2 7.82 3 8.89 3 10V20C3 20.7956 3.31607 21.5587 3.87868 22.1213C4.44129 22.6839 5.20435 23 6 23H12V21H5V20H9V12.27L15 18.27V20H16.73L19.23 22.5L20.5 21.22L2.78 3.5L1.5 4.77ZM12 1C9.47 1 7.18 2.04 5.55 3.72L6.96 5.14C8.23 3.82 10 3 12 3C13.8565 3 15.637 3.7375 16.9497 5.05025C18.2625 6.36301 19 8.14348 19 10V12H15V13.18L20.5 18.67C20.81 18.19 21 17.62 21 17V10C21 7.61305 20.0518 5.32387 18.364 3.63604C16.6761 1.94821 14.3869 1 12 1ZM5 12V10C5 9.46 5.06 8.94 5.17 8.44L8.73 12H5Z" />
    </Svg>
  );
};
