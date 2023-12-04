import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FuseBladeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 21H8L6 19V16H10V21ZM18 16H14V21H16L18 19V16ZM3 3V4C3 4.26522 3.10536 4.51957 3.29289 4.70711C3.48043 4.89464 3.73478 5 4 5V14C4 14.2652 4.10536 14.5196 4.29289 14.7071C4.48043 14.8946 4.73478 15 5 15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V5C20.2652 5 20.5196 4.89464 20.7071 4.70711C20.8946 4.51957 21 4.26522 21 4V3H3ZM11.83 13V9.73H10L12.61 4.66V7.93H14.36L11.83 13Z" />
    </Svg>
  );
};
