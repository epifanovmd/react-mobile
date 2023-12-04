import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MovieOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8401 2.17969L16.9101 2.95969L19.6501 6.49969L21.6201 6.09969L20.8401 2.17969ZM13.9701 3.53969L12.0001 3.92969L14.7501 7.45969L16.7101 7.06969L13.9701 3.53969ZM9.07006 4.49969L7.10006 4.90969L9.85006 8.43969L11.8101 8.04969L9.07006 4.49969ZM4.16006 5.49969L3.18006 5.68969C2.66044 5.79351 2.20326 6.09929 1.9089 6.53989C1.61454 6.9805 1.50706 7.51991 1.61006 8.03969L2.00006 9.99969L6.90006 9.02969L4.16006 5.49969ZM2.00006 9.99969V19.9997C2.00006 21.1097 2.90006 21.9997 4.00006 21.9997H20.0001C21.1101 21.9997 22.0001 21.1097 22.0001 19.9997V9.99969H2.00006Z" />
    </Svg>
  );
};
