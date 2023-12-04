import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PandoraIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 20C10 20.2652 9.89464 20.5196 9.70711 20.7071C9.51957 20.8946 9.26522 21 9 21H4V3H13.71C15.5002 3 17.2171 3.71116 18.483 4.97703C19.7488 6.2429 20.46 7.95979 20.46 9.75C20.46 13.5 17.44 16.5 13.71 16.5H10V20Z" />
    </Svg>
  );
};
