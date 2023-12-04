import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const GolfIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19.5 18C19.8978 18 20.2794 18.158 20.5607 18.4393C20.842 18.7206 21 19.1022 21 19.5C21 19.8978 20.842 20.2794 20.5607 20.5607C20.2794 20.842 19.8978 21 19.5 21C19.1022 21 18.7206 20.842 18.4393 20.5607C18.158 20.2794 18 19.8978 18 19.5C18 19.1022 18.158 18.7206 18.4393 18.4393C18.7206 18.158 19.1022 18 19.5 18ZM17 5.92L11 9V18.03C13.84 18.19 16 19 16 20C16 21.1 13.31 22 10 22C6.69 22 4 21.1 4 20C4 19.26 5.21 18.62 7 18.27V20H9V2L17 5.92Z" />
    </Svg>
  );
};
