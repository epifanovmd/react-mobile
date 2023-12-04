import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const VacuumIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M23 20V22H16V20H18.46L12 4.61C11.81 4.14 11.5 3.76 11.06 3.46C10.62 3.16 10.14 3 9.61 3C8.9 3 8.28 3.27 7.76 3.79C7.24 4.31 7 4.92 7 5.64V9H8C10.21 9 12 10.79 12 13V22H8C8.61 21.16 9 20.13 9 19C9 16.24 6.76 14 4 14C3.29 14 2.61 14.15 2 14.42V9H5V5.64C5 4.8 5.23 4 5.63 3.32C6.04 2.62 6.59 2.06 7.3 1.63C8 1.21 8.77 1 9.61 1C10.55 1 11.4 1.26 12.16 1.77C12.92 2.28 13.5 2.97 13.87 3.81L20.66 20H23ZM7 19C7 20.66 5.66 22 4 22C2.34 22 1 20.66 1 19C1 17.34 2.34 16 4 16C5.66 16 7 17.34 7 19ZM5 19C5 18.45 4.55 18 4 18C3.45 18 3 18.45 3 19C3 19.55 3.45 20 4 20C4.55 20 5 19.55 5 19Z" />
    </Svg>
  );
};
