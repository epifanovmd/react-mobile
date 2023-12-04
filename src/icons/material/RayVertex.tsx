import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RayVertexIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 11H9.17C9.58 9.83 10.69 9 12 9C13.31 9 14.42 9.83 14.83 11H22V13H14.83C14.42 14.17 13.31 15 12 15C10.69 15 9.58 14.17 9.17 13H2V11Z" />
    </Svg>
  );
};
