import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatListBulletedSquareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 4H7V8H3V4ZM9 5V7H21V5H9ZM3 10H7V14H3V10ZM9 11V13H21V11H9ZM3 16H7V20H3V16ZM9 17V19H21V17H9Z" />
    </Svg>
  );
};
