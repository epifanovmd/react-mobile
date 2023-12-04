import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TagMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.5 9C5.89782 9 6.27936 8.84196 6.56066 8.56066C6.84196 8.27936 7 7.89782 7 7.5C7 7.10218 6.84196 6.72064 6.56066 6.43934C6.27936 6.15804 5.89782 6 5.5 6C5.10218 6 4.72064 6.15804 4.43934 6.43934C4.15804 6.72064 4 7.10218 4 7.5C4 7.89782 4.15804 8.27936 4.43934 8.56066C4.72064 8.84196 5.10218 9 5.5 9ZM17.41 11.58C17.77 11.94 18 12.44 18 13C18 13.55 17.78 14.05 17.41 14.41L12.41 19.41C12.05 19.77 11.55 20 11 20C10.45 20 9.95 19.78 9.58 19.41L2.59 12.42C2.22 12.05 2 11.55 2 11V6C2 4.89 2.89 4 4 4H9C9.55 4 10.05 4.22 10.41 4.58L17.41 11.58ZM13.54 5.71L14.54 4.71L21.41 11.58C21.78 11.94 22 12.45 22 13C22 13.55 21.78 14.05 21.42 14.41L16.04 19.79L15.04 18.79L20.75 13L13.54 5.71Z" />
    </Svg>
  );
};
