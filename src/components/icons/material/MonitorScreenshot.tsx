import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MonitorScreenshotIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 6H5V10H7V8H9V6ZM19 10H17V12H15V14H19V10ZM21 16H3V4H21V16ZM21 2H3C1.89 2 1 2.89 1 4V16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H10V20H8V22H16V20H14V18H21C21.5304 18 22.0391 17.7893 22.4142 17.4142C22.7893 17.0391 23 16.5304 23 16V4C23 2.89 22.1 2 21 2Z" />
    </Svg>
  );
};
