import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PlaylistMusicOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 6V8H3V6H15ZM15 10V12H3V10H15ZM3 16V14H11V16H3ZM17 6H22V8H19V17C19 17.7956 18.6839 18.5587 18.1213 19.1213C17.5587 19.6839 16.7956 20 16 20C15.2044 20 14.4413 19.6839 13.8787 19.1213C13.3161 18.5587 13 17.7956 13 17C13 16.2044 13.3161 15.4413 13.8787 14.8787C14.4413 14.3161 15.2044 14 16 14C16.35 14 16.69 14.07 17 14.18V6ZM16 16C15.7348 16 15.4804 16.1054 15.2929 16.2929C15.1054 16.4804 15 16.7348 15 17C15 17.2652 15.1054 17.5196 15.2929 17.7071C15.4804 17.8946 15.7348 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17C17 16.7348 16.8946 16.4804 16.7071 16.2929C16.5196 16.1054 16.2652 16 16 16Z" />
    </Svg>
  );
};
