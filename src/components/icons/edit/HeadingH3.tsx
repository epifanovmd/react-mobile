import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeadingH3Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M15 9H21L17 13H18C19.6569 13 21 14.3431 21 16C21 17.6569 19.6569 19 18 19C17.3793 19 16.7738 18.8077 16.2671 18.4492C15.7604 18.0907 15.3775 17.5838 15.1709 16.9985M3 5V12M3 12V19M3 12H11M11 5V12M11 12V19"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
