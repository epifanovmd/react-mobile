import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LabelMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 18H13L11 20H4C3.5 20 2.97 19.79 2.59 19.41C2.21 19.03 2 18.5 2 18V8H4V18ZM17.63 4.84C17.27 4.33 16.67 4 16 4H8C6.9 4 6 4.9 6 6V14C6 15.1 6.9 16 8 16H16C16.67 16 17.27 15.66 17.63 15.15L22 10L17.63 4.84ZM16 14H8V6H16L19.55 10L16 14Z" />
    </Svg>
  );
};
