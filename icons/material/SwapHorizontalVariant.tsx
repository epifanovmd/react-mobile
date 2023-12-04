import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SwapHorizontalVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 6L8 10V7H16C16.5304 7 17.0391 7.21071 17.4142 7.58579C17.7893 7.96086 18 8.46957 18 9C18 9.53043 17.7893 10.0391 17.4142 10.4142C17.0391 10.7893 16.5304 11 16 11H8C6.93913 11 5.92172 11.4214 5.17157 12.1716C4.42143 12.9217 4 13.9391 4 15C4 16.0609 4.42143 17.0783 5.17157 17.8284C5.92172 18.5786 6.93913 19 8 19H16V22L20 18L16 14V17H8C7.46957 17 6.96086 16.7893 6.58579 16.4142C6.21071 16.0391 6 15.5304 6 15C6 14.4696 6.21071 13.9609 6.58579 13.5858C6.96086 13.2107 7.46957 13 8 13H16C17.0609 13 18.0783 12.5786 18.8284 11.8284C19.5786 11.0783 20 10.0609 20 9C20 7.93913 19.5786 6.92172 18.8284 6.17157C18.0783 5.42143 17.0609 5 16 5H8V2L4 6Z" />
    </Svg>
  );
};
