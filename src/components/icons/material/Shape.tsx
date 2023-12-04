import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ShapeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 13.5V21.5H3V13.5H11ZM12 2L17.5 11H6.5L12 2ZM17.5 13C20 13 22 15 22 17.5C22 20 20 22 17.5 22C15 22 13 20 13 17.5C13 15 15 13 17.5 13Z" />
    </Svg>
  );
};
