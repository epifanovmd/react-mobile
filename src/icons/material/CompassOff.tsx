import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CompassOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 3.5L2.28 2.25L21.75 21.72L20.5 23L17.7 20.22C16.08 21.34 14.12 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.88 2.66 7.92 3.78 6.3L1 3.5ZM6 18L12.47 15L9 11.53L6 18ZM18 6L11.56 9L6.33 3.76C7.94 2.65 9.9 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.1 21.35 16.06 20.24 17.67L15 12.44L18 6Z" />
    </Svg>
  );
};
