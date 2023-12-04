import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Brightness2Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10 2C8.18 2 6.47 2.5 5 3.35C8 5.08 10 8.3 10 12C10 15.7 8 18.92 5 20.65C6.47 21.5 8.18 22 10 22C12.6522 22 15.1957 20.9464 17.0711 19.0711C18.9464 17.1957 20 14.6522 20 12C20 10.6868 19.7413 9.38642 19.2388 8.17317C18.7362 6.95991 17.9997 5.85752 17.0711 4.92893C16.1425 4.00035 15.0401 3.26375 13.8268 2.7612C12.6136 2.25866 11.3132 2 10 2Z" />
    </Svg>
  );
};
