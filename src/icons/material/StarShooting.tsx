import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StarShootingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18.09 11.77L19.56 18.1L14 14.74L8.43997 18.1L9.89997 11.77L4.99997 7.5L11.47 6.96L14 1L16.53 6.96L23 7.5L18.09 11.77ZM1.99997 12.43C2.18997 12.43 2.37997 12.37 2.54997 12.26L5.74997 10.15L4.17997 8.79L1.44997 10.59C0.988972 10.89 0.860972 11.5 1.15997 12C1.35997 12.27 1.67997 12.43 1.99997 12.43ZM1.15997 21.55C1.35997 21.84 1.67997 22 1.99997 22C2.18997 22 2.37997 21.95 2.54997 21.84L6.65997 19.13L6.99997 17.76L7.30997 16.31L1.44997 20.16C0.988972 20.47 0.860972 21.09 1.15997 21.55ZM1.44997 15.38C0.988972 15.68 0.860972 16.3 1.15997 16.76C1.35997 17.06 1.67997 17.21 1.99997 17.21C2.18997 17.21 2.37997 17.16 2.54997 17.05L7.96997 13.5L8.23997 12.31L7.31997 11.5L1.44997 15.38Z" />
    </Svg>
  );
};
