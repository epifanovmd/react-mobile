import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CheckboxMultipleBlankCircleOutlineIcon: FC<
  FlexSvgProps
> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14 2C11.8783 2 9.84344 2.84285 8.34315 4.34315C6.84285 5.84344 6 7.87827 6 10C6 12.1217 6.84285 14.1566 8.34315 15.6569C9.84344 17.1571 11.8783 18 14 18C16.1217 18 18.1566 17.1571 19.6569 15.6569C21.1571 14.1566 22 12.1217 22 10C22 7.87827 21.1571 5.84344 19.6569 4.34315C18.1566 2.84285 16.1217 2 14 2ZM14 4C17.32 4 20 6.69 20 10C20 13.32 17.32 16 14 16C12.4087 16 10.8826 15.3679 9.75736 14.2426C8.63214 13.1174 8 11.5913 8 10C8 8.4087 8.63214 6.88258 9.75736 5.75736C10.8826 4.63214 12.4087 4 14 4ZM4.93 5.82C3.08 7.34 2 9.61 2 12C2 14.1217 2.84285 16.1566 4.34315 17.6569C5.84344 19.1571 7.87827 20 10 20C10.64 20 11.27 19.92 11.88 19.77C10.12 19.38 8.5 18.5 7.17 17.29C5.22 16.25 4 14.21 4 12C4 11.7 4.03 11.41 4.07 11.11C4.03 10.74 4 10.37 4 10C4 8.56 4.32 7.13 4.93 5.82Z" />
    </Svg>
  );
};
