import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FileCancelIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 9H18.5L13 3.5V9ZM6 2H14L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C4.89 22 4 21.1 4 20V4C4 2.89 4.89 2 6 2ZM10.5 11C8 11 6 13 6 15.5C6 18 8 20 10.5 20C13 20 15 18 15 15.5C15 13 13 11 10.5 11ZM10.5 12.5C11.2956 12.5 12.0587 12.8161 12.6213 13.3787C13.1839 13.9413 13.5 14.7044 13.5 15.5C13.5 16.06 13.35 16.58 13.08 17L9 12.92C9.42 12.65 9.94 12.5 10.5 12.5ZM7.5 15.5C7.5 14.94 7.65 14.42 7.92 14L12 18.08C11.58 18.35 11.06 18.5 10.5 18.5C9.70435 18.5 8.94129 18.1839 8.37868 17.6213C7.81607 17.0587 7.5 16.2956 7.5 15.5Z" />
    </Svg>
  );
};
