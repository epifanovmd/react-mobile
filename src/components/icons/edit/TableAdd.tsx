import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TableAddIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M11 4H15.8002C16.9203 4 17.4801 4 17.9079 4.21799C18.2842 4.40973 18.5905 4.71547 18.7822 5.0918C19 5.5192 19 6.07899 19 7.19691V9.0002L11.0001 9.0001M11 4H6.2002C5.08009 4 4.51962 4 4.0918 4.21799C3.71547 4.40973 3.40973 4.71547 3.21799 5.0918C3 5.51962 3 6.08009 3 7.2002V9M11 4L11.0001 9.0001M3 9V15M3 9L11.0001 9.0001M3 15V16.8002C3 17.9203 3 18.4801 3.21799 18.9079C3.40973 19.2842 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H11.0002L11.0001 9.0001M3 15H11M15 16H18M18 16H21M18 16V19M18 16V13"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
