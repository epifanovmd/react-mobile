import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FruitPineappleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.4 7.7C16.4 6.4 19 7 19 7C17.2 4.6 15.1 4.7 13.6 5.2V5C14.7 3.4 16.9 3.5 16.9 3.5C15.3 2.1 13.9 2.5 13 3C12.5 1.8 12 1 12 1C11.6 1.7 11.3 2.4 11 3.1C10.1 2.5 8.6 2.1 7 3.5C7 3.5 9.3 3.5 10.4 5.2C8.9 4.7 6.8 4.6 5 7C5 7 7.6 6.4 9.6 7.7C7.5 8.9 6 11.7 6 15C6 19.4 8.7 23 12 23C15.3 23 18 19.4 18 15C18 11.7 16.5 8.9 14.4 7.7ZM15.8 16.8C15.7 17.2 15.6 17.6 15.4 18L14 16L12.5 18L14.1 20.1C13.8 20.3 13.6 20.5 13.3 20.7L12 19L10.7 20.7C10.4 20.6 10.1 20.4 9.9 20.1L11.5 18L10 16L8.5 17.9C8.4 17.5 8.2 17.1 8.1 16.7L9.5 15L8.2 13.2C8.3 12.8 8.4 12.4 8.6 12L10 14L11.5 12L9.9 9.9C10.2 9.7 10.4 9.5 10.7 9.3L12 11L13.3 9.3C13.6 9.4 13.9 9.6 14.1 9.9L12.5 12L14 14L15.5 12.1C15.6 12.5 15.8 12.9 15.9 13.3L14.5 15L15.8 16.8ZM12 13L13.5 15L12 17L10.5 15L12 13Z" />
    </Svg>
  );
};
