import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HorizontalRotateCounterclockwiseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 10H9.09C9.43 6.55 10.6 4 12 4C13.4 4 14.57 6.55 14.91 10H16.9C16.44 5.44 14.42 2 12 2C9.58 2 7.56 5.44 7.1 10H4L8 14L12 10ZM12 20C10.73 20 9.64 17.89 9.21 14.92L8 16.12L7.3 15.42C8 19.26 9.84 22 12 22C14.42 22 16.44 18.56 16.9 14H14.91C14.57 17.45 13.4 20 12 20ZM22 11H13L11 13H22V11ZM2 13H5L3 11H2V13Z" />
    </Svg>
  );
};
