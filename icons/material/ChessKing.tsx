import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const ChessKingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 22H4.99999V20H19V22ZM17 10C15.58 10 14.26 10.77 13.55 12H13V7H16V5H13V2H11V5H7.99999V7H11V12H10.45C9.34999 10.09 6.89999 9.43 4.99999 10.54C3.06999 11.64 2.41999 14.09 3.49999 16C4.23999 17.24 5.56999 18 6.99999 18H17C18.0609 18 19.0783 17.5786 19.8284 16.8284C20.5786 16.0783 21 15.0609 21 14C21 12.9391 20.5786 11.9217 19.8284 11.1716C19.0783 10.4214 18.0609 10 17 10Z" />
    </Svg>
  );
};
