import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PlaylistMusicIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 6H3V8H15V6ZM15 10H3V12H15V10ZM3 16H11V14H3V16ZM17 6V14.18C16.69 14.07 16.35 14 16 14C15.2044 14 14.4413 14.3161 13.8787 14.8787C13.3161 15.4413 13 16.2044 13 17C13 17.7956 13.3161 18.5587 13.8787 19.1213C14.4413 19.6839 15.2044 20 16 20C16.7956 20 17.5587 19.6839 18.1213 19.1213C18.6839 18.5587 19 17.7956 19 17V8H22V6H17Z" />
    </Svg>
  );
};
