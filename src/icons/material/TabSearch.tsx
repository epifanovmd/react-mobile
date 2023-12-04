import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TabSearchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7.50011 11C5.00011 11 3.00011 13 3.00011 15.5C3.00011 16.38 3.25011 17.21 3.69011 17.9L0.610107 21L2.00011 22.39L5.12011 19.32C5.81011 19.75 6.63011 20 7.50011 20C10.0001 20 12.0001 18 12.0001 15.5C12.0001 13 10.0001 11 7.50011 11ZM7.50011 18C6.12011 18 5.00011 16.88 5.00011 15.5C5.00011 14.12 6.12011 13 7.50011 13C8.88011 13 10.0001 14.12 10.0001 15.5C10.0001 16.88 8.88011 18 7.50011 18ZM23.0001 5V19C23.0001 20.11 22.1101 21 21.0001 21H10.9501C11.7601 20.5 12.4501 19.81 12.9701 19H21.0001V9H13.0001V5H3.00011V10.82C1.77011 12 1.00011 13.66 1.00011 15.5V5C1.00011 3.9 1.90011 3 3.00011 3H21.0001C22.1101 3 23.0001 3.9 23.0001 5Z" />
    </Svg>
  );
};
