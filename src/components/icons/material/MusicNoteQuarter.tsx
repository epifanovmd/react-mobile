import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MusicNoteQuarterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 3V13.56C13.41 13.21 12.73 13 12 13C9.79 13 8 14.79 8 17C8 19.21 9.79 21 12 21C14.21 21 16 19.21 16 17V3H14Z" />
    </Svg>
  );
};
