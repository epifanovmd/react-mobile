import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileUndoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 9H18.5L13 3.5V9ZM6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2ZM12.16 14.31C10.6 14.31 9.19 14.89 8.11 15.83L6 13.72V19H11.28L9.15 16.88C9.97 16.2 11 15.78 12.16 15.78C14.23 15.78 16 17.13 16.61 19L18 18.54C17.19 16.09 14.88 14.31 12.16 14.31Z" />
    </Svg>
  );
};
