import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ProjectorScreenVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 18V9H20C20.55 9 21 8.55 21 8V7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7V8C3 8.55 3.45 9 4 9H5V18H19Z" />
    </Svg>
  );
};
