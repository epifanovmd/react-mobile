import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ZodiacSagittariusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 2V12H20V5.41L10.41 15L12.71 17.29L11.29 18.71L9.00004 16.41L3.71004 21.71L2.29004 20.29L7.59004 15L5.29004 12.71L6.71004 11.29L9.00004 13.59L18.59 4H12V2H22Z" />
    </Svg>
  );
};
