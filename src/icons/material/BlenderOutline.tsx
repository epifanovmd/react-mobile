import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BlenderOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16.13 15.13L18 3H14V2H10V3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11H7.23L7.87 15.13C6.74 16.05 6 17.43 6 19V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V19C18 17.43 17.26 16.05 16.13 15.13ZM5 9V5H6.31L6.93 9H5ZM15.67 5L14.29 14H9.72L8.33 5H15.67ZM16 20H8V19C8 17.35 9.35 16 11 16H13C14.65 16 16 17.35 16 19V20ZM12 17C12.55 17 13 17.45 13 18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18C11 17.45 11.45 17 12 17Z" />
    </Svg>
  );
};
