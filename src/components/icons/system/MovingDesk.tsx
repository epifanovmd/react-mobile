import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MovingDeskIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M16 12V15M16 12H17.8031C18.921 12 19.48 12 19.9074 11.7822C20.2837 11.5905 20.5905 11.2837 20.7822 10.9074C21 10.48 21 9.921 21 8.80309V8.19691C21 7.07899 21 6.5192 20.7822 6.0918C20.5905 5.71547 20.2837 5.40973 19.9074 5.21799C19.4796 5 18.9203 5 17.8002 5H14.2002C13.0801 5 12.5196 5 12.0918 5.21799C11.7155 5.40973 11.4097 5.71547 11.218 6.0918C11 6.51962 11 7.08009 11 8.2002V8.80019C11 9.9203 11 10.4796 11.218 10.9074C11.4097 11.2837 11.7155 11.5905 12.0918 11.7822C12.5192 12 13.079 12 14.1969 12H16ZM7 10L5 12L3 10M3 7L5 5L7 7M3 21.0002V19.2002C3 18.0801 3 17.5196 3.21799 17.0918C3.40973 16.7155 3.71547 16.4097 4.0918 16.218C4.51962 16 5.08009 16 6.2002 16H17.8002C18.9203 16 19.4796 16 19.9074 16.218C20.2837 16.4097 20.5905 16.7155 20.7822 17.0918C21 17.5192 21 18.079 21 19.1969V21.0002"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
