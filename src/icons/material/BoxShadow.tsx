import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoxShadowIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 3H18V18H3V3ZM19 19H21V21H19V19ZM19 16H21V18H19V16ZM19 13H21V15H19V13ZM19 10H21V12H19V10ZM19 7H21V9H19V7ZM16 19H18V21H16V19ZM13 19H15V21H13V19ZM10 19H12V21H10V19ZM7 19H9V21H7V19Z" />
    </Svg>
  );
};
