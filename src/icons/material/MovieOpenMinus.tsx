import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MovieOpenMinusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.75 7.45969L12 3.92969L13.97 3.53969L16.71 7.06969L14.75 7.45969ZM21.62 6.09969L20.84 2.17969L16.91 2.95969L19.65 6.49969L21.62 6.09969ZM11.81 8.04969L9.06996 4.49969L7.09996 4.90969L9.84996 8.43969L11.81 8.04969ZM4.15996 5.49969L3.17996 5.68969C2.09996 5.90969 1.39996 6.95969 1.60996 8.03969L1.99996 9.99969L6.89996 9.02969L4.15996 5.49969ZM19 12.9997C20.1 12.9997 21.12 13.2997 22 13.8097V9.99969H1.99996V19.9997C1.99996 21.1097 2.89996 21.9997 3.99996 21.9997H13.81C13.3 21.1197 13 20.0997 13 18.9997C13 15.6897 15.69 12.9997 19 12.9997ZM15 17.9997V19.9997H23V17.9997H15Z" />
    </Svg>
  );
};
