import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FountainPenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6.95 14.9297L11.19 9.26973L19.68 2.19973C20.07 1.80973 20.72 1.80973 21.09 2.19973L21.8 2.90973C22.19 3.27973 22.19 3.92973 21.8 4.31973L14.73 12.8097L9.07 17.0497L6.95 14.9297ZM8.36 17.7597L6.24 15.6397L3.41 17.0497L2 21.2897L4.12 19.1697C4.32 18.9997 4.63 18.9997 4.83 19.1697C5 19.3697 5 19.6797 4.83 19.8797L2.71 21.9997L6.95 20.5897L8.36 17.7597Z" />
    </Svg>
  );
};
