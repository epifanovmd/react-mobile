import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerMinusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 17H23V19H15V17ZM9 6.5C10.4 6.5 11.5 7.6 11.5 9C11.5 10.4 10.4 11.5 9 11.5C7.6 11.5 6.5 10.4 6.5 9C6.5 7.6 7.6 6.5 9 6.5ZM9 2C12.9 2 16 5.1 16 9C16 14.2 9 22 9 22C9 22 2 14.2 2 9C2 5.1 5.1 2 9 2ZM9 4C6.2 4 4 6.2 4 9C4 10 4 12 9 18.7C14 12 14 10 14 9C14 6.2 11.8 4 9 4Z" />
    </Svg>
  );
};
