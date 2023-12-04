import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const RobotAngryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 14H21C21 10.13 17.87 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2C10.89 2 10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14ZM7.5 18C6.12 18 5 16.88 5 15.5C5 14.68 5.4 13.96 6 13.5L9.83 16.38C9.5 17.32 8.57 18 7.5 18ZM16.5 18C15.43 18 14.5 17.32 14.17 16.38L18 13.5C18.6 13.96 19 14.68 19 15.5C19 16.88 17.88 18 16.5 18Z" />
    </Svg>
  );
};