import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MonitorPlayIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M15 20H9M4 13.8002V8.2002C4 7.08009 4 6.51962 4.21799 6.0918C4.40973 5.71547 4.71547 5.40973 5.0918 5.21799C5.51962 5 6.08009 5 7.2002 5H16.8002C17.9203 5 18.4796 5 18.9074 5.21799C19.2837 5.40973 19.5905 5.71547 19.7822 6.0918C20 6.5192 20 7.07899 20 8.19691V13.8031C20 14.921 20 15.48 19.7822 15.9074C19.5905 16.2837 19.2837 16.5905 18.9074 16.7822C18.48 17 17.921 17 16.8031 17H7.19691C6.07899 17 5.5192 17 5.0918 16.7822C4.71547 16.5905 4.40973 16.2837 4.21799 15.9074C4 15.4796 4 14.9203 4 13.8002ZM14.5 11L10 8V14L14.5 11Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
