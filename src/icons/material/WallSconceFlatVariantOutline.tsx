import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WallSconceFlatVariantOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 13V19H19V13H5ZM17 17H7V15H17V17ZM18.73 10.68L20.5 8.91L19.09 7.5L17.32 9.27L18.73 10.68ZM5.27 10.68L6.68 9.27L4.91 7.5L3.5 8.91L5.27 10.68ZM13 8V5H11V8H13Z" />
    </Svg>
  );
};
