import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RotateRightVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 4V1L14 5L10 9V6C8.4087 6 6.88258 6.63214 5.75736 7.75736C4.63214 8.88258 4 10.4087 4 12L4.08 13H2.06L2 12C2 9.87827 2.84285 7.84344 4.34315 6.34315C5.84344 4.84285 7.87827 4 10 4ZM17 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H17C16.4696 22 15.9609 21.7893 15.5858 21.4142C15.2107 21.0391 15 20.5304 15 20V4C15 3.46957 15.2107 2.96086 15.5858 2.58579C15.9609 2.21071 16.4696 2 17 2ZM4 15H13V22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V17C2 16.4696 2.21071 15.9609 2.58579 15.5858C2.96086 15.2107 3.46957 15 4 15Z" />
    </Svg>
  );
};
