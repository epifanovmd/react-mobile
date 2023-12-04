import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MovieOpenOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.84 2.17969L16.91 2.95969L19.65 6.49969L21.62 6.09969L20.84 2.17969ZM13.97 3.53969L12 3.92969L14.75 7.45969L16.71 7.06969L13.97 3.53969ZM9.06996 4.49969L7.09996 4.90969L9.84996 8.43969L11.81 8.04969L9.06996 4.49969ZM4.15996 5.49969L3.17996 5.68969C2.09996 5.89969 1.38996 6.95969 1.60996 8.03969L1.99996 9.99969L6.89996 9.02969L4.15996 5.49969ZM20 11.9997V19.9997H3.99996V11.9997H20ZM22 9.99969H1.99996V19.9997C1.99996 21.1097 2.89996 21.9997 3.99996 21.9997H20C21.11 21.9997 22 21.1097 22 19.9997V9.99969Z" />
    </Svg>
  );
};
