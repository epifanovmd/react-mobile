import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatListBulletedTriangleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 15.5L7.5 20H2.5L5 15.5ZM9 19H21V17H9V19ZM5 9.5L7.5 14H2.5L5 9.5ZM9 13H21V11H9V13ZM5 3.5L7.5 8H2.5L5 3.5ZM9 7H21V5H9V7Z" />
    </Svg>
  );
};
