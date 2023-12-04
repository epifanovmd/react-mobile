import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WifiStrength1AlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3C7.80002 3 3.70002 4.4 0.400024 7C4.40002 12.1 7.90002 16.4 12 21.5C14.4 18.5 16.7 15.7 19 12.8V9.6L15.6 13.8C14.5 13.3 13.2 13 12 13C10.8 13 9.50002 13.3 8.40002 13.8L3.30002 7.4C5.90002 5.8 8.90002 5 12 5C15.1 5 18.1 5.9 20.7 7.4L20.3 8H22.9C23.1 7.7 23.5 7.3 23.7 7C20.3 4.4 16.2 3 12 3ZM21 10V16H23V10H21ZM21 18V20H23V18" />
    </Svg>
  );
};
