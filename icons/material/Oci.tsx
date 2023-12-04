import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const OciIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2V22H22V2H2ZM19.12 19.03H4.87V5H19.13V19.03H19.12ZM14.83 10.71H17.69V17.59H14.83V10.71ZM14.83 6.41H17.69V9.27H14.83V6.41ZM6.3 6.41V17.59H13.4V14.72H9.17V9.28H13.4V6.41H6.3Z" />
    </Svg>
  );
};
