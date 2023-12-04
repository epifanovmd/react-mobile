import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const KeyboardIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M18 15H19M9 15H15M6 15H5M5 12H19M5 9H19M2 14.8002V9.2002C2 8.08009 2 7.51962 2.21799 7.0918C2.40973 6.71547 2.71547 6.40973 3.0918 6.21799C3.51962 6 4.08009 6 5.2002 6H18.8002C19.9203 6 20.4796 6 20.9074 6.21799C21.2837 6.40973 21.5905 6.71547 21.7822 7.0918C22 7.5192 22 8.07899 22 9.19691V14.8031C22 15.921 22 16.48 21.7822 16.9074C21.5905 17.2837 21.2837 17.5905 20.9074 17.7822C20.48 18 19.921 18 18.8031 18H5.19691C4.07899 18 3.5192 18 3.0918 17.7822C2.71547 17.5905 2.40973 17.2837 2.21799 16.9074C2 16.4796 2 15.9203 2 14.8002Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
