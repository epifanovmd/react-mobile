import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChartTreeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 6H22V22H14V6ZM2 4H22V2H2V4ZM2 8H12V6H2V8ZM9 22H12V10H9V22ZM2 22H7V10H2V22Z" />
    </Svg>
  );
};
