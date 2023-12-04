import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveArrowUpOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 21H4V10H6V19H18V10H20V21ZM3 3H21V9H3V3ZM5 5V7H19V5H5ZM10.5 17V14H8L12 10L16 14H13.5V17" />
    </Svg>
  );
};
