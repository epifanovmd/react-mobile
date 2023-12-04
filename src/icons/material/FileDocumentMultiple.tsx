import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileDocumentMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 4V22H20V24H4C2.9 24 2 23.1 2 22V4H4ZM15 7H20.5L15 1.5V7ZM8 0H16L22 6V18C22 19.11 21.11 20 20 20H8C6.89 20 6 19.1 6 18V2C6 0.89 6.89 0 8 0ZM17 16V14H8V16H17ZM20 12V10H8V12H20Z" />
    </Svg>
  );
};
