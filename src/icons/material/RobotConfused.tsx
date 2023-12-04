import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RobotConfusedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 4H18V3H20.5C20.78 3 21 3.22 21 3.5V5.5C21 5.78 20.78 6 20.5 6H20V7H19V5H20V4ZM19 9H20V8H19V9ZM17 3H16V7H17V3ZM23 15V18C23 18.55 22.55 19 22 19H21V20C21 21.11 20.11 22 19 22H5C3.9 22 3 21.11 3 20V19H2C1.45 19 1 18.55 1 18V15C1 14.45 1.45 14 2 14H3C3 10.13 6.13 7 10 7H11V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7H14C14.34 7 14.67 7.03 15 7.08V10H19.74C20.53 11.13 21 12.5 21 14H22C22.55 14 23 14.45 23 15ZM10 15.5C10 14.12 8.88 13 7.5 13C6.12 13 5 14.12 5 15.5C5 16.88 6.12 18 7.5 18C8.88 18 10 16.88 10 15.5ZM19 15.5C19 14.12 17.88 13 16.5 13C15.12 13 14 14.12 14 15.5C14 16.88 15.12 18 16.5 18C17.88 18 19 16.88 19 15.5ZM17 8H16V9H17V8Z" />
    </Svg>
  );
};
