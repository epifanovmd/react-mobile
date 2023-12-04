import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileKeyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 16C11 16.6 10.6 17 10 17C9.4 17 9 16.6 9 16C9 15.4 9.4 15 10 15C10.6 15 11 15.4 11 16ZM20 8V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4C4 2.9 4.9 2 6 2H14L20 8ZM18 15H12.8C12.2 13.4 10.5 12.6 9 13.2C7.4 13.8 6.6 15.5 7.2 17C7.8 18.5 9.5 19.4 11 18.8C11.9 18.5 12.5 17.8 12.8 17H14V19H16V17H18V15ZM18.5 9L13 3.5V9H18.5Z" />
    </Svg>
  );
};
