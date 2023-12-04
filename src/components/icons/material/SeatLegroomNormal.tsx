import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SeatLegroomNormalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 12V3H3V12C3 13.3261 3.52678 14.5979 4.46447 15.5355C5.40215 16.4732 6.67392 17 8 17H14V15H8C7.20435 15 6.44129 14.6839 5.87868 14.1213C5.31607 13.5587 5 12.7956 5 12ZM20.5 18H19V11C19 10.4696 18.7893 9.96086 18.4142 9.58579C18.0391 9.21071 17.5304 9 17 9H12V3H6V11C6 11.7956 6.31607 12.5587 6.87868 13.1213C7.44129 13.6839 8.20435 14 9 14H16V21H20.5C20.8978 21 21.2794 20.842 21.5607 20.5607C21.842 20.2794 22 19.8978 22 19.5C22 19.1022 21.842 18.7206 21.5607 18.4393C21.2794 18.158 20.8978 18 20.5 18Z" />
    </Svg>
  );
};
