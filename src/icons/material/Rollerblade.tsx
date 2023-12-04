import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RollerbladeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.5 18C3.12 18 2 19.12 2 20.5C2 21.88 3.12 23 4.5 23C5.88 23 7 21.88 7 20.5C7 19.12 5.88 18 4.5 18ZM18.5 18C17.12 18 16 19.12 16 20.5C16 21.88 17.12 23 18.5 23C19.88 23 21 21.88 21 20.5C21 19.12 19.88 18 18.5 18ZM20 17C20 15.63 20.09 13.81 19.5 12.95C18.55 10.9 15.82 10.56 13.91 10.05C13 10 12 9 11.82 8H9C8.71 8 8.5 7.78 8.5 7.5C8.5 7.22 8.71 7 9 7H11.5V6H9C8.71 6 8.5 5.78 8.5 5.5C8.5 5.22 8.71 5 9 5H11.5V2H3V17H20ZM11.5 18C10.12 18 9 19.12 9 20.5C9 21.88 10.12 23 11.5 23C12.88 23 14 21.88 14 20.5C14 19.12 12.88 18 11.5 18Z" />
    </Svg>
  );
};
