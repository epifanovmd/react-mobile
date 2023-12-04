import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const NumericIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 17V9H2V7H6V17H4ZM22 15C22 16.11 21.1 17 20 17H16V15H20V13H18V11H20V9H16V7H20C20.5304 7 21.0391 7.21071 21.4142 7.58579C21.7893 7.96086 22 8.46957 22 9V10.5C22 10.8978 21.842 11.2794 21.5607 11.5607C21.2794 11.842 20.8978 12 20.5 12C20.8978 12 21.2794 12.158 21.5607 12.4393C21.842 12.7206 22 13.1022 22 13.5V15ZM14 15V17H8V13C8 11.89 8.9 11 10 11H12V9H8V7H12C12.5304 7 13.0391 7.21071 13.4142 7.58579C13.7893 7.96086 14 8.46957 14 9V11C14 12.11 13.1 13 12 13H10V15H14Z" />
    </Svg>
  );
};
