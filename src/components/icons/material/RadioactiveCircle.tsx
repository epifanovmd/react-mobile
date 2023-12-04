import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RadioactiveCircleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 10C13.11 10 14 10.9 14 12C14 13.1 13.11 14 12 14C10.89 14 10 13.11 10 12C10 10.89 10.9 10 12 10ZM4 12C4 8.7 6 5.87 8.86 4.64L10.34 8.36C8.96 9 8 10.38 8 12H4ZM12 20C10.46 20 9 19.56 7.8 18.8L10 15.47C10.6 15.81 11.28 16 12 16C12.72 16 13.4 15.81 14 15.47L16.2 18.8C15 19.56 13.54 20 12 20ZM16 12C16 10.38 15.04 9 13.66 8.36L15.15 4.64C18 5.87 20 8.7 20 12H16Z" />
    </Svg>
  );
};
