import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CandycaneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10 10C10 10.5304 9.78929 11.0391 9.41421 11.4142C9.03914 11.7893 8.53043 12 8 12C7.46957 12 6.96086 11.7893 6.58579 11.4142C6.21071 11.0391 6 10.5304 6 10V8C6 7.37 6.1 6.77 6.27 6.2L10 9.93V10ZM12 2C12.74 2 13.44 2.13 14.09 2.38L11.97 6C11.14 6 10.44 6.5 10.15 7.25L7.24 4.34C8.34 2.92 10.06 2 12 2ZM17.76 6.31L14 10.07V8C14 7.62 13.9 7.27 13.72 6.97L15.83 3.38C16.74 4.13 17.42 5.15 17.76 6.31ZM18 13.09L14 17.09V12.9L18 8.9V13.09ZM18 20C18 20.5304 17.7893 21.0391 17.4142 21.4142C17.0391 21.7893 16.5304 22 16 22C15.4696 22 14.9609 21.7893 14.5858 21.4142C14.2107 21.0391 14 20.5304 14 20V19.91L18 15.91V20Z" />
    </Svg>
  );
};
