import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowCollapseVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 12H20V14H4V12ZM4 9H20V11H4V9ZM16 4L12 8L8 4H11V1H13V4H16ZM8 19L12 15L16 19H13V22H11V19H8Z" />
    </Svg>
  );
};
