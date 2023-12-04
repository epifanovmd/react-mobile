import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const Brightness3Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 2C7.95 2 6.95 2.16 6 2.46C10.06 3.73 13 7.5 13 12C13 16.5 10.06 20.27 6 21.54C6.95 21.84 7.95 22 9 22C10.3132 22 11.6136 21.7413 12.8268 21.2388C14.0401 20.7362 15.1425 19.9997 16.0711 19.0711C16.9997 18.1425 17.7362 17.0401 18.2388 15.8268C18.7413 14.6136 19 13.3132 19 12C19 10.6868 18.7413 9.38642 18.2388 8.17317C17.7362 6.95991 16.9997 5.85752 16.0711 4.92893C15.1425 4.00035 14.0401 3.26375 12.8268 2.7612C11.6136 2.25866 10.3132 2 9 2Z" />
    </Svg>
  );
};
