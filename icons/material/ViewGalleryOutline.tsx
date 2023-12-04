import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ViewGalleryOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 3V21H23V3H1ZM21 5V14H3V5H21ZM11 16V19H8V16H11ZM3 16H6V19H3V16ZM13 19V16H16V19H13ZM18 19V16H21V19H18Z" />
    </Svg>
  );
};
