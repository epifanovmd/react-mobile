import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallSconceRoundVariantOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M11 5V8H13V5H11ZM4.91 7.5L3.5 8.91L5.27 10.68L6.68 9.27L4.91 7.5ZM19.09 7.5L17.32 9.27L18.73 10.68L20.5 8.91L19.09 7.5ZM17.66 14C17.19 15.33 16.26 16.5 15 17.19C14.08 17.72 13.04 18 12 18C10.96 18 9.92 17.72 9 17.19C7.74 16.5 6.81 15.33 6.34 14H17.66ZM20 12H4C4 14.86 5.5 17.5 8 18.93C9.25 19.65 10.63 20 12 20C13.37 20 14.75 19.65 16 18.93C18.5 17.5 20 14.86 20 12Z" />
    </Svg>
  );
};
