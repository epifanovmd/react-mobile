import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DummySquareIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M6 9.2002V14.8002C6 15.9203 6 16.4801 6.21799 16.9079C6.40973 17.2842 6.71547 17.5905 7.0918 17.7822C7.5192 18 8.07899 18 9.19691 18H14.8031C15.921 18 16.48 18 16.9074 17.7822C17.2837 17.5905 17.5905 17.2842 17.7822 16.9079C18 16.4805 18 15.9215 18 14.8036V9.19691C18 8.07899 18 7.5192 17.7822 7.0918C17.5905 6.71547 17.2837 6.40973 16.9074 6.21799C16.4796 6 15.9203 6 14.8002 6H9.2002C8.08009 6 7.51962 6 7.0918 6.21799C6.71547 6.40973 6.40973 6.71547 6.21799 7.0918C6 7.51962 6 8.08009 6 9.2002Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
