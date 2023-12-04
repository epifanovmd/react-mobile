import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableFurnitureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 7H22V10H20L21 19H18.5L17.94 14H6.06L5.5 19H3L4 10H2V7ZM17.5 10H6.5L6.29 12H17.71L17.5 10Z" />
    </Svg>
  );
};
