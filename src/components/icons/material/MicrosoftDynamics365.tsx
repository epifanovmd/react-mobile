import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MicrosoftDynamics365Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 2L17.25 8.5L13.5 11.5L6 8V2ZM6 9L9.5 11.25L6 22L18 9V15L6 22V9Z" />
    </Svg>
  );
};
