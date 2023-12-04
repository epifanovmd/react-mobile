import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NuxtIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.8001 18.36L16.0301 8.08C15.9301 8 15.6301 7.43 15.0301 7.43C14.7801 7.43 14.4301 7.53 14.0701 8.08L13.3301 9.26L11.3101 5.65C11.2601 5.55 10.9101 5 10.3101 5C10.0601 5 9.66009 5.1 9.36009 5.65L2.18009 18.31C2.13009 18.41 1.83009 19 2.13009 19.5C2.23009 19.75 2.53009 20 3.19009 20H20.8501C20.9501 20 21.6001 20 21.9001 19.5C22.0001 19.26 22.1001 18.86 21.8001 18.36ZM8.10009 18.31L7.95009 18.86H3.24009L10.3601 6.34L12.6601 10.47L8.10009 18.31ZM9.21009 18.86L13.3201 11.66L17.5001 18.86H9.21009ZM18.7401 18.86L18.5401 18.31L14.0001 10.46L15.0301 8.73L20.7501 18.86H18.7401Z" />
    </Svg>
  );
};
