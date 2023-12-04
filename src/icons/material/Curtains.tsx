import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurtainsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 3H1V1H23V3ZM2 22H6C6 19 4 17 4 17C10 13 11 4 11 4H2V22ZM22 4H13C13 4 14 13 20 17C20 17 18 19 18 22H22V4Z" />
    </Svg>
  );
};
