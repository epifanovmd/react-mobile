import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileCodeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 9H18.5L13 3.5V9ZM6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2ZM6.12 15.5L9.86 19.24L11.28 17.83L8.95 15.5L11.28 13.17L9.86 11.76L6.12 15.5ZM17.28 15.5L13.54 11.76L12.12 13.17L14.45 15.5L12.12 17.83L13.54 19.24L17.28 15.5Z" />
    </Svg>
  );
};
