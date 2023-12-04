import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const KeyboardIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 10H17V8H19V10ZM19 13H17V11H19V13ZM16 10H14V8H16V10ZM16 13H14V11H16V13ZM16 17H8V15H16V17ZM7 10H5V8H7V10ZM7 13H5V11H7V13ZM8 11H10V13H8V11ZM8 8H10V10H8V8ZM11 11H13V13H11V11ZM11 8H13V10H11V8ZM20 5H4C2.89 5 2 5.89 2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V7C22 5.89 21.1 5 20 5Z" />
    </Svg>
  );
};
