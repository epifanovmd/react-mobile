import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LatitudeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 4C15 4 17.5 5.6 18.9 8H5.1C6.5 5.6 9 4 12 4ZM12 20C9 20 6.5 18.4 5.1 16H18.9C17.5 18.4 15 20 12 20ZM4.3 14C4.1 13.4 4 12.7 4 12C4 11.3 4.1 10.6 4.3 10H19.8C20 10.6 20.1 11.3 20.1 12C20.1 12.7 20 13.4 19.8 14H4.3Z" />
    </Svg>
  );
};
