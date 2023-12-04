import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SemanticWebIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12.9001 4.22C18.7301 6.84 20.0001 2 20.0001 2C20.0001 2 18.8901 8.07 13.7901 10.55C12.7501 11.06 12.1001 11.33 12.1001 11.33L3.73008 7.25L12.1001 3.82C12.1001 3.82 11.9001 3.76 12.9001 4.22ZM11.1201 22L3.33008 17.78V9.07L11.1201 13.04V22ZM12.8801 22L20.6801 17.78V9.07L12.8801 13.04V22Z" />
    </Svg>
  );
};
