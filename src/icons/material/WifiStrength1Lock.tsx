import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrength1LockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 13C12.8 13 13.61 13.13 14.38 13.36C14.28 13.73 14.2 14.11 14.2 14.5V14.74C13.5 15.34 13 16.24 13 17.2V20.24L12 21.5C7.87999 16.37 4.38999 12.06 0.36499 7C3.68999 4.41 7.77999 3 12 3C16.2 3 20.31 4.41 23.64 7L20.91 10.39C20.32 10.14 19.68 10 19 10C18.87 10 18.75 10.03 18.62 10.04L20.7 7.45C18.08 5.86 15.06 5 12 5C8.93999 5 5.89999 5.85 3.25999 7.44L8.37999 13.8C9.49999 13.28 10.74 13 12 13ZM23 17.3V20.8C23 21.4 22.4 22 21.7 22H16.2C15.6 22 15 21.4 15 20.7V17.2C15 16.6 15.6 16 16.2 16V14.5C16.2 13.1 17.6 12 19 12C20.4 12 21.8 13.1 21.8 14.5V16C22.4 16 23 16.6 23 17.3ZM20.5 14.5C20.5 13.7 19.8 13.2 19 13.2C18.2 13.2 17.5 13.7 17.5 14.5V16H20.5V14.5Z" />
    </Svg>
  );
};
