import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BullhornVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 2V4L4 8V6H2V18H4V16L6 16.5V18.5C6 20.4 7.6 22 9.5 22C11.4 22 13 20.4 13 18.5V18.3L20 20V22H22V2H20ZM11 18.5C11 19.3 10.3 20 9.5 20C8.7 20 8 19.3 8 18.5V17L11 17.8V18.5Z" />
    </Svg>
  );
};
