import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SwapVerticalVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 4L14 8H17V16C17 16.5304 16.7893 17.0391 16.4142 17.4142C16.0391 17.7893 15.5304 18 15 18C14.4696 18 13.9609 17.7893 13.5858 17.4142C13.2107 17.0391 13 16.5304 13 16V8C13 6.93913 12.5786 5.92172 11.8284 5.17157C11.0783 4.42143 10.0609 4 9 4C7.93913 4 6.92172 4.42143 6.17157 5.17157C5.42143 5.92172 5 6.93913 5 8V16H2L6 20L10 16H7V8C7 7.46957 7.21071 6.96086 7.58579 6.58579C7.96086 6.21071 8.46957 6 9 6C9.53043 6 10.0391 6.21071 10.4142 6.58579C10.7893 6.96086 11 7.46957 11 8V16C11 17.0609 11.4214 18.0783 12.1716 18.8284C12.9217 19.5786 13.9391 20 15 20C16.0609 20 17.0783 19.5786 17.8284 18.8284C18.5786 18.0783 19 17.0609 19 16V8H22L18 4Z" />
    </Svg>
  );
};
