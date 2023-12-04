import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FormatColorHighlightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 16.9996L6.75 14.2496L6.72 14.2296C6.14 13.6396 6.14 12.6896 6.72 12.1096L11.46 7.36961L15.7 11.6096L10.96 16.3496C10.39 16.9296 9.46 16.9296 8.87 16.3696L8.24 16.9996H4ZM15.91 2.90961C16.5 2.32961 17.45 2.32961 18.03 2.90961L20.16 5.02961C20.74 5.61961 20.74 6.56961 20.16 7.15961L16.86 10.4496L12.62 6.20961L15.91 2.90961Z" />
    </Svg>
  );
};
