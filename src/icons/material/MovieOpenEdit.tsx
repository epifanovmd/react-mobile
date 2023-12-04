import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MovieOpenEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.65 6.49969L16.91 2.95969L20.84 2.17969L21.62 6.09969L19.65 6.49969ZM16.71 7.06969L13.97 3.53969L12 3.92969L14.75 7.45969L16.71 7.06969ZM1.99996 9.99969V19.9997C1.99996 21.1097 2.89996 21.9997 3.99996 21.9997H11V19.1297L20.13 9.99969H1.99996ZM11.81 8.04969L9.06996 4.49969L7.09996 4.90969L9.84996 8.43969L11.81 8.04969ZM4.15996 5.49969L3.17996 5.68969C2.09996 5.90969 1.39996 6.95969 1.60996 8.03969L1.99996 9.99969L6.89996 9.02969L4.15996 5.49969ZM13 19.9597V21.9997H15.04L21.17 15.8797L19.13 13.8297L13 19.9597ZM22.85 13.4697L21.53 12.1497C21.33 11.9497 21 11.9497 20.81 12.1497L19.83 13.1297L21.87 15.1697L22.85 14.1897C23.05 13.9997 23.05 13.6697 22.85 13.4697Z" />
    </Svg>
  );
};
