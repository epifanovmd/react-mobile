import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MonitorStarIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 16V4H3V16H21ZM21 2C21.5304 2 22.0391 2.21071 22.4142 2.58579C22.7893 2.96086 23 3.46957 23 4V16C23 16.5304 22.7893 17.0391 22.4142 17.4142C22.0391 17.7893 21.5304 18 21 18H14V20H16V22H8V20H10V18H3C1.89 18 1 17.1 1 16V4C1 2.89 1.89 2 3 2H21ZM12.97 9H16L13.53 10.76L14.47 13.67L12 11.87L9.53 13.67L10.47 10.76L8 9H11.03L12 6L12.97 9Z" />
    </Svg>
  );
};
