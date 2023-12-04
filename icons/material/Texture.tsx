import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const TextureIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.29 21H12.12L21 12.12V9.29L9.29 21ZM19 21C19.55 21 20.05 20.78 20.41 20.41C20.78 20.05 21 19.55 21 19V17L17 21H19ZM5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V7L7 3H5ZM11.88 3L3 11.88V14.71L14.71 3H11.88ZM19.5 3.08L3.08 19.5C3.17 19.85 3.35 20.16 3.59 20.41C3.84 20.65 4.15 20.83 4.5 20.92L20.93 4.5C20.74 3.8 20.2 3.26 19.5 3.08Z" />
    </Svg>
  );
};
