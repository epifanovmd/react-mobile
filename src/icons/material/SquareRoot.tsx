import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SquareRootIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.76 16.83L14.59 14L11.76 11.17L13.17 9.76L16 12.59L18.83 9.76L20.24 11.17L17.41 14L20.24 16.83L18.83 18.24L16 15.41L13.17 18.24L11.76 16.83ZM2 11H5L7.29 16.4L10 6H22V8H11.55L8.68 19H6.22L3.68 13H2V11Z" />
    </Svg>
  );
};
