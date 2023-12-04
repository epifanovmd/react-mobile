import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FerryIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 6H18V9.96L12 8L6 9.96V6ZM3.94 19H4C5.6 19 7 18.12 8 17C9 18.12 10.4 19 12 19C13.6 19 15 18.12 16 17C17 18.12 18.4 19 20 19H20.05L21.95 12.31C22.03 12.06 22 11.78 21.89 11.54C21.76 11.3 21.55 11.12 21.29 11.04L20 10.62V6C20 4.89 19.1 4 18 4H15V1H9V4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V10.62L2.71 11.04C2.45 11.12 2.24 11.3 2.11 11.54C2 11.78 1.97 12.06 2.05 12.31L3.94 19ZM20 21C18.61 21 17.22 20.53 16 19.67C13.56 21.38 10.44 21.38 8 19.67C6.78 20.53 5.39 21 4 21H2V23H4C5.37 23 6.74 22.65 8 22C10.5 23.3 13.5 23.3 16 22C17.26 22.65 18.62 23 20 23H22V21H20Z" />
    </Svg>
  );
};