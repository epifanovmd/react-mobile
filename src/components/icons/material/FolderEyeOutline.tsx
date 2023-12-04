import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FolderEyeOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.3 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4H10L12 6H20C21.1 6 22 6.9 22 8V14.6C21.4 14.2 20.7 13.8 20 13.5V8H4V18H9.3C9.3 18.1 9.2 18.2 9.2 18.3L8.8 19L9.1 19.7C9.2 19.8 9.2 19.9 9.3 20ZM23 19C22.1 21.3 19.7 23 17 23C14.3 23 11.9 21.3 11 19C11.9 16.7 14.3 15 17 15C19.7 15 22.1 16.7 23 19ZM19.5 19C19.5 17.6 18.4 16.5 17 16.5C15.6 16.5 14.5 17.6 14.5 19C14.5 20.4 15.6 21.5 17 21.5C18.4 21.5 19.5 20.4 19.5 19ZM17 18C16.4 18 16 18.4 16 19C16 19.6 16.4 20 17 20C17.6 20 18 19.6 18 19C18 18.4 17.6 18 17 18Z" />
    </Svg>
  );
};
