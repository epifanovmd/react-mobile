import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatTextRotationDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 19.7295L3 16.7295H5V4.26953H7V16.7295H9L6 19.7295ZM14 9.37953V13.1295L19.03 11.2495L14 9.37953ZM21 11.9995L10 16.7295V14.6695L12.19 13.7295V8.76953L10 7.82953V5.76953L21 10.4995V11.9995Z" />
    </Svg>
  );
};
