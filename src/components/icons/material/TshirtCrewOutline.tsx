import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TshirtCrewOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 21H7.99998C7.73476 21 7.48041 20.8946 7.29287 20.7071C7.10534 20.5196 6.99998 20.2652 6.99998 20V12.07L5.69998 13.12C5.30998 13.5 4.67998 13.5 4.28998 13.12L1.45998 10.29C1.06998 9.9 1.06998 9.27 1.45998 8.88L7.33998 3H8.99998C8.99998 4.1 10.34 5 12 5C13.66 5 15 4.1 15 3H16.66L22.54 8.88C22.93 9.27 22.93 9.9 22.54 10.29L19.71 13.12C19.32 13.5 18.69 13.5 18.3 13.12L17 12.07V20C17 20.2652 16.8946 20.5196 16.7071 20.7071C16.5196 20.8946 16.2652 21 16 21ZM20.42 9.58L16.11 5.28C15.8 5.63 15.43 5.94 15 6.2C14.16 6.7 13.13 7 12 7C10.3 7 8.78998 6.32 7.88998 5.28L3.57998 9.58L4.99998 11L7.99998 9H8.99998V19H15V9H16L19 11L20.42 9.58Z" />
    </Svg>
  );
};
