import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LayersPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 14H19V17H22V19H19V22H17V19H14V17H17V14ZM11 16L2 9L11 2L20 9L11 16ZM11 18.54L12 17.75V18C12 18.71 12.12 19.39 12.35 20L11 21.07L2 14.07L3.62 12.81L11 18.54Z" />
    </Svg>
  );
};
