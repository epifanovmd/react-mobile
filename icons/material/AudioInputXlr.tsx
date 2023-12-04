import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const AudioInputXlrIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM13.5 16.5C13.5 15.67 12.83 15 12 15C11.17 15 10.5 15.67 10.5 16.5C10.5 17.33 11.17 18 12 18C12.83 18 13.5 17.33 13.5 16.5ZM9 12C9 11.17 8.33 10.5 7.5 10.5C6.67 10.5 6 11.17 6 12C6 12.83 6.67 13.5 7.5 13.5C8.33 13.5 9 12.83 9 12ZM18 12C18 11.17 17.33 10.5 16.5 10.5C15.67 10.5 15 11.17 15 12C15 12.83 15.67 13.5 16.5 13.5C17.33 13.5 18 12.83 18 12Z" />
    </Svg>
  );
};
