import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacPiscesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 10.9986H18C18.11 8.18859 18.73 5.41859 19.81 2.81859L18 2.05859C16.81 4.89859 16.13 7.91859 16 10.9986H8C7.87 7.91859 7.19 4.89859 6 2.05859L4.14 2.81859C5.24 5.40859 5.87 8.17859 6 10.9986H4V12.9986H6C5.89 15.8086 5.27 18.5786 4.19 21.1786L6 21.9386C7.19 19.0986 7.87 16.0786 8 12.9986H16C16.13 16.0786 16.81 19.0986 18 21.9386L19.86 21.1786C18.76 18.5886 18.13 15.8186 18 12.9986H20V10.9986Z" />
    </Svg>
  );
};
