import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TangramIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2ZM18.59 4L12 10.59L5.41 4H18.59ZM13.41 12L16.5 8.91L19.59 12L16.5 15.09L13.41 12ZM14.59 16H9.41L12 13.41L14.59 16ZM4 5.41L10.59 12L4 18.59V5.41ZM11.59 20H5.41L7.41 18H13.59L11.59 20ZM20 20H14.41L20 14.41V20ZM20 9.59L17.91 7.5L20 5.41V9.59Z" />
    </Svg>
  );
};
