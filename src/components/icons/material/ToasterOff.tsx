import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ToasterOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8001 22.6992L18.1001 19.9992H3.0001V12.9992H2.0001V10.9992H3.0001C3.0001 9.89922 3.9001 8.99922 5.0001 8.99922H7.1001L1.1001 2.99922L2.4001 1.69922L22.1001 21.3992L20.8001 22.6992ZM15.3001 12.0992C15.6001 11.4992 16.3001 10.9992 17.0001 10.9992C18.1001 10.9992 19.0001 11.8992 19.0001 12.9992C19.0001 13.7992 18.6001 14.3992 17.9001 14.6992L21.0001 17.7992V12.9992H22.0001V10.9992H21.0001C21.0001 9.89922 20.1001 8.99922 19.0001 8.99922H12.2001L15.3001 12.0992ZM18.0001 7.99922C17.6001 5.79922 15.1001 3.99922 12.0001 3.99922C10.6001 3.99922 9.2001 4.39922 8.2001 4.99922L11.2001 7.99922H18.0001Z" />
    </Svg>
  );
};
