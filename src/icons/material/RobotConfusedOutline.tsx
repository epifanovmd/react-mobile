import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RobotConfusedOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 8H20V9H19V8ZM20 5H19V7H20V6H20.5C20.78 6 21 5.78 21 5.5V3.5C21 3.22 20.78 3 20.5 3H18V4H20V5ZM17 3H16V7H17V3ZM13.5 15.5C13.5 16.61 14.4 17.5 15.5 17.5C16.6 17.5 17.5 16.61 17.5 15.5C17.5 14.39 16.61 13.5 15.5 13.5C14.39 13.5 13.5 14.4 13.5 15.5ZM17 8H16V9H17V8ZM22 14H21C21 12.5 20.53 11.13 19.74 10H16.97C18.19 10.91 19 12.36 19 14V16H21V17H19V20H5V17H3V16H5V14C5 11.24 7.24 9 10 9H14C14.34 9 14.68 9.04 15 9.1V7.08C14.67 7.03 14.34 7 14 7H13V5.73C13.6 5.39 14 4.74 14 4C14 2.9 13.11 2 12 2C10.89 2 10 2.9 10 4C10 4.74 10.4 5.39 11 5.73V7H10C6.13 7 3 10.13 3 14H2C1.45 14 1 14.45 1 15V18C1 18.55 1.45 19 2 19H3V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V19H22C22.55 19 23 18.55 23 18V15C23 14.45 22.55 14 22 14ZM8.5 13.5C7.4 13.5 6.5 14.4 6.5 15.5C6.5 16.6 7.4 17.5 8.5 17.5C9.6 17.5 10.5 16.61 10.5 15.5C10.5 14.39 9.61 13.5 8.5 13.5Z" />
    </Svg>
  );
};
