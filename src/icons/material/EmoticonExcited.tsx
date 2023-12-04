import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonExcitedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2ZM8.88 7.82L11 9.94L9.94 11L8.88 9.94L7.82 11L6.76 9.94L8.88 7.82ZM12 17.5C9.67 17.5 7.69 16.04 6.89 14H17.11C16.31 16.04 14.33 17.5 12 17.5ZM16.18 11L15.12 9.94L14.06 11L13 9.94L15.12 7.82L17.24 9.94L16.18 11Z" />
    </Svg>
  );
};
