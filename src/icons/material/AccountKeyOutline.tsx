import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountKeyOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.8 10C5.4 8.8 4.3 8 3 8C1.3 8 0 9.3 0 11C0 12.7 1.3 14 3 14C4.3 14 5.4 13.2 5.8 12H7V14H9V12H11V10H5.8ZM3 12C2.4 12 2 11.6 2 11C2 10.4 2.4 10 3 10C3.6 10 4 10.4 4 11C4 11.6 3.6 12 3 12ZM16 4C13.8 4 12 5.8 12 8C12 10.2 13.8 12 16 12C18.2 12 20 10.2 20 8C20 5.8 18.2 4 16 4ZM16 10.1C14.8 10.1 13.9 9.2 13.9 8C13.9 6.8 14.8 5.9 16 5.9C17.2 5.9 18.1 6.8 18.1 8C18.1 9.2 17.2 10.1 16 10.1ZM16 13C13.3 13 8 14.3 8 17V20H24V17C24 14.3 18.7 13 16 13ZM22.1 18.1H9.9V17C9.9 16.4 13 14.9 16 14.9C19 14.9 22.1 16.4 22.1 17V18.1Z" />
    </Svg>
  );
};
