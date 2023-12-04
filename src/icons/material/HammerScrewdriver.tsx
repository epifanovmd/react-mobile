import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HammerScrewdriverIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.06 13.09L21.6901 18.68L18.3701 21.96L12.78 16.37V15.45L15.14 13.09H16.06ZM16.97 10.56L16 9.6L11.21 14.4V16.37L5.58005 22L2.30005 18.68L7.89005 13.09H9.86005L10.64 12.31L6.80005 8.46H5.50005L2.69005 5.62L5.31005 3L8.11005 5.8V7.11L12 10.95L14.66 8.29L13.7 7.28L15 5.97H12.34L11.69 5.32L15 2L15.66 2.66V5.32L16.97 4L20.25 7.28C21.34 8.38 21.34 10.17 20.25 11.26L18.28 9.25L16.97 10.56Z" />
    </Svg>
  );
};
