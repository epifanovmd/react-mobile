import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DesktopTowerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M10 20H7M18 17H16M13.0002 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V13.8002C3 14.9203 3 15.4796 3.21799 15.9074C3.40973 16.2837 3.71547 16.5905 4.0918 16.7822C4.5192 17 5.07899 17 6.19691 17H13.0001M13.0002 9L13 16.8002C13 16.8689 13 16.9354 13.0001 17M13.0002 9L13 7.2002C13 6.08009 13 5.51962 13.218 5.0918C13.4097 4.71547 13.7155 4.40973 14.0918 4.21799C14.5196 4 15.0801 4 16.2002 4H17.8002C18.9203 4 19.4796 4 19.9074 4.21799C20.2837 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.921 21 18.48 20.7822 18.9074C20.5905 19.2837 20.2837 19.5905 19.9074 19.7822C19.48 20 18.921 20 17.8031 20H16.1969C15.079 20 14.5192 20 14.0918 19.7822C13.7155 19.5905 13.4097 19.2837 13.218 18.9074C13.0134 18.5058 13.0008 17.9884 13.0001 17M17.002 7V7.002L17 7.00195V7H17.002Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
