import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ShovelOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15.1 1.81055L12.27 4.65055C11.5 5.43055 11.5 6.69055 12.27 7.47055L13.68 8.89055L13 9.62055L14.44 11.0605L15.17 10.3305L16.56 11.7205C17.34 12.5005 18.61 12.5005 19.39 11.7205L22.22 8.88055L15.1 1.81055ZM17.93 10.2805L13.7 6.06055L15.11 4.65055L19.34 8.88055L17.93 10.2805ZM20.7 20.2405L19.29 21.6505L11.5 13.8805L10.5 14.8805L13.33 17.6905L12 19.0905C7.00001 24.0005 3.50001 20.5005 3.50001 20.5005C3.50001 20.5005 -0.0599859 17.0005 4.89001 12.0005L6.31001 10.6005L9.13001 13.4305L10.13 12.4305L2.35001 4.68055L3.77001 3.26055L20.7 20.2405Z" />
    </Svg>
  );
};
