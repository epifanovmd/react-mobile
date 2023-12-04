import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BookmarkMusicIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 3C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21L12 18L5 21V5C5 3.89 5.9 3 7 3H17ZM11 11C10.4696 11 9.96086 11.2107 9.58579 11.5858C9.21071 11.9609 9 12.4696 9 13C9 13.5304 9.21071 14.0391 9.58579 14.4142C9.96086 14.7893 10.4696 15 11 15C11.5304 15 12.0391 14.7893 12.4142 14.4142C12.7893 14.0391 13 13.5304 13 13V8H16V6H12V11.27C11.71 11.1 11.36 11 11 11Z" />
    </Svg>
  );
};
