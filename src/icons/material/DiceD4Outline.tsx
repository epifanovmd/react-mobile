import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DiceD4OutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.43 15.1502H14.29V16.3602H13.43V18.0002H11.92V16.3602H8.81995L8.74995 15.4102L11.91 10.4202H13.43V15.1502ZM10.25 15.1502H11.92V12.4702L10.25 15.1502ZM22 21.0002H1.99995C1.63995 21.0002 1.30995 20.8102 1.12995 20.5002C0.949955 20.1802 0.959955 19.7902 1.14995 19.5002L11.15 3.00016C11.5 2.38016 12.5 2.38016 12.86 3.00016L22.86 19.5002C23.04 19.7902 23.05 20.1802 22.87 20.5002C22.69 20.8102 22.36 21.0002 22 21.0002ZM3.77995 19.0002H20.23L12 5.43016L3.77995 19.0002Z" />
    </Svg>
  );
};
