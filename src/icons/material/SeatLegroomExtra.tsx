import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SeatLegroomExtraIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 12V3H2V12C2 13.3261 2.52678 14.5979 3.46447 15.5355C4.40215 16.4732 5.67392 17 7 17H13V15H7C6.20435 15 5.44129 14.6839 4.87868 14.1213C4.31607 13.5587 4 12.7956 4 12ZM22.83 17.24C22.45 16.5 21.54 16.27 20.8 16.61L19.71 17.11L16.3 10.13C15.96 9.45 15.27 9 14.5 9H11V3H5V11C5 11.7956 5.31607 12.5587 5.87868 13.1213C6.44129 13.6839 7.20435 14 8 14H15L18.41 21L22.13 19.3C22.9 18.94 23.23 18 22.83 17.24Z" />
    </Svg>
  );
};
