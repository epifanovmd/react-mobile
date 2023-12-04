import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerLeftIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 11.5C13.62 11.5 12.5 10.38 12.5 9C12.5 7.62 13.62 6.5 15 6.5C16.38 6.5 17.5 7.62 17.5 9C17.5 10.38 16.38 11.5 15 11.5ZM8 9C8 14.25 15 22 15 22C15 22 22 14.25 22 9C22 5.13 18.87 2 15 2C11.13 2 8 5.13 8 9ZM6 7L1 12L6 17V7Z" />
    </Svg>
  );
};
