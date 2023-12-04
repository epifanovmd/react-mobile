import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DatabaseAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 3C5.58 3 2 4.79 2 7V17C2 19.21 5.59 21 10 21C14.41 21 18 19.21 18 17V7C18 4.79 14.42 3 10 3ZM16 17C16 17.5 13.87 19 10 19C6.13 19 4 17.5 4 17V14.77C5.61 15.55 7.72 16 10 16C12.28 16 14.39 15.55 16 14.77V17ZM16 12.45C14.7 13.4 12.42 14 10 14C7.58 14 5.3 13.4 4 12.45V9.64C5.47 10.47 7.61 11 10 11C12.39 11 14.53 10.47 16 9.64V12.45ZM10 9C6.13 9 4 7.5 4 7C4 6.5 6.13 5 10 5C13.87 5 16 6.5 16 7C16 7.5 13.87 9 10 9ZM22 7V13H20V7H22ZM20 15H22V17H20V15Z" />
    </Svg>
  );
};
