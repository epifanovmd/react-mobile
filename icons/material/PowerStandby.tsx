import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PowerStandbyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 3H11V13H13V3ZM17.83 5.17L16.41 6.59C18.05 7.91 19 9.9 19 12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C8.13997 19 4.99997 15.88 4.99997 12C4.99997 9.91 5.94997 7.91 7.57997 6.58L6.16997 5.17C2.37997 8.39 1.91997 14.07 5.13997 17.86C8.35997 21.64 14.04 22.1 17.83 18.88C19.85 17.17 21 14.65 21 12C21 9.37 19.84 6.87 17.83 5.17Z" />
    </Svg>
  );
};
