import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HorizontalRotateClockwiseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 14L8 10L4 14H7.1C7.56 18.56 9.58 22 12 22C14.42 22 16.44 18.56 16.9 14H14.91C14.57 17.45 13.4 20 12 20C10.6 20 9.43 17.45 9.09 14H12ZM12 4C13.4 4 14.57 6.55 14.91 10H16.9C16.44 5.44 14.42 2 12 2C9.84 2 8 4.74 7.3 8.58L8 7.88L9.21 9.08C9.64 6.11 10.73 4 12 4ZM22 13V11H11L13 13H22ZM2 13H3L5 11H2V13Z" />
    </Svg>
  );
};
