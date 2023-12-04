import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableClockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.5 15.82L18.94 17.23L18.19 18.53L15 16.69V13H16.5V15.82ZM20 10.26V5C20 3.9 19.11 3 18 3H4C2.9 3 2 3.9 2 5V17C2 18.11 2.9 19 4 19H9.68C10.81 21.36 13.21 23 16 23C19.87 23 23 19.87 23 16C23 13.62 21.81 11.53 20 10.26ZM18 7V9.29C17.37 9.11 16.7 9 16 9C14.5 9 13.13 9.47 12 10.26V7H18ZM4 7H10V11H4V7ZM4 17V13H9.68C9.25 13.91 9 14.93 9 16C9 16.34 9.03 16.67 9.08 17H4ZM16 21C13.24 21 11 18.76 11 16C11 13.24 13.24 11 16 11C18.76 11 21 13.24 21 16C21 18.76 18.76 21 16 21Z" />
    </Svg>
  );
};
