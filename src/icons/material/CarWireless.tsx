import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarWirelessIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 5C10.9 5 10 5.9 10 7V8H6.5C5.84 8 5.28 8.42 5.08 9L3 15V23C3 23.55 3.45 24 4 24H5C5.55 24 6 23.55 6 23V22H18V23C18 23.55 18.45 24 19 24H20C20.55 24 21 23.55 21 23V15L18.92 9C18.72 8.42 18.16 8 17.5 8H14V7C14 5.9 13.11 5 12 5ZM6.5 9.5H17.5L19 14H5L6.5 9.5ZM6.5 16C7.33 16 8 16.67 8 17.5C8 18.33 7.33 19 6.5 19C5.67 19 5 18.33 5 17.5C5 16.67 5.67 16 6.5 16ZM17.5 16C18.33 16 19 16.67 19 17.5C19 18.33 18.33 19 17.5 19C16.67 19 16 18.33 16 17.5C16 16.67 16.67 16 17.5 16ZM16.2 3.4C15 2.3 13.5 1.7 12 1.7C10.5 1.7 9 2.3 7.8 3.4L7 2.6C8.4 1.2 10.2 0.5 12 0.5C13.8 0.5 15.6 1.2 17 2.6L16.2 3.4ZM15.3 4.2L14.5 5C13.8 4.3 12.9 4 12 4C11.1 4 10.2 4.3 9.5 5L8.7 4.2C9.6 3.3 10.8 2.8 12 2.8C13.2 2.8 14.4 3.3 15.3 4.2Z" />
    </Svg>
  );
};
