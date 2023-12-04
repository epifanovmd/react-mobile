import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const EmoticonExcitedOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM13 9.94L14.06 11L15.12 9.94L16.18 11L17.24 9.94L15.12 7.82L13 9.94ZM8.88 9.94L9.94 11L11 9.94L8.88 7.82L6.76 9.94L7.82 11L8.88 9.94ZM12 17.5C14.33 17.5 16.31 16.04 17.11 14H6.89C7.69 16.04 9.67 17.5 12 17.5Z" />
    </Svg>
  );
};
