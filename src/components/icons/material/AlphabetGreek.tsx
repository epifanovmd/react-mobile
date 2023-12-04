import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AlphabetGreekIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16 6C14.36 6 13 7.36 13 9V21H15V9C15 8.43 15.43 8 16 8H17C17.57 8 18 8.43 18 9V10C18 10.57 17.57 11 17 11H16V13H17C17.57 13 18 13.43 18 14V15C18 15.57 17.57 16 17 16H16V18H17C18.65 18 20 16.65 20 15V14C20 13.18 19.59 12.46 19 12C19.59 11.54 20 10.82 20 10V9C20 7.36 18.65 6 17 6H16ZM7 9C5.36 9 4 10.36 4 12V15C4 16.65 5.36 18 7 18H7.7C8.2 18 8.65 17.81 9 17.5V18H11V9H9V9.5C8.65 9.19 8.2 9 7.7 9H7ZM7 11H8C8.57 11 9 11.43 9 12V15C9 15.57 8.57 16 8 16H7C6.43 16 6 15.57 6 15V12C6 11.43 6.43 11 7 11Z" />
    </Svg>
  );
};
