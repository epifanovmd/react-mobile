import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LitecoinIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.55 15.92L13.16 13.78L14.81 13.19L16.25 7.63L14.56 8.31L16.25 2H7.99997L5.37997 11.77L3.71997 12.34L2.21997 17.91L3.99997 17.27L2.65997 22H20.16L21.78 15.92H12.55ZM19.39 21H3.99997L5.45997 15.65L3.71997 16.3L4.57997 13.11L6.23997 12.54L8.73997 3H15L13.13 10L14.83 9.3L14 12.42L12.33 13L11.22 16.91H20.5L19.39 21Z" />
    </Svg>
  );
};
