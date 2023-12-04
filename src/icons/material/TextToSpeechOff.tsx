import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TextToSpeechOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L13.38 16.65C12.55 18.35 10.93 19.59 9 19.92V22H7V19.92C4.16 19.44 2 16.97 2 14H4C4 15.0609 4.42143 16.0783 5.17157 16.8284C5.92172 17.5786 6.93913 18 8 18C9.82 18 11.36 16.78 11.84 15.11L10 13.27V14C10 14.5304 9.78929 15.0391 9.41421 15.4142C9.03914 15.7893 8.53043 16 8 16C7.46957 16 6.96086 15.7893 6.58579 15.4142C6.21071 15.0391 6 14.5304 6 14V9.27L2 5.27ZM21.41 9.41L17.17 13.66L18.18 10H14C13.4696 10 12.9609 9.78929 12.5858 9.41421C12.2107 9.03914 12 8.53043 12 8V4C12 3.46957 12.2107 2.96086 12.5858 2.58579C12.9609 2.21071 13.4696 2 14 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V8C22 8.55 21.78 9.05 21.41 9.41Z" />
    </Svg>
  );
};
