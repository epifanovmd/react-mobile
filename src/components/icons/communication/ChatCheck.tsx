import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChatCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M15 9L11 13L9 11M7.12357 18.7012L5.59961 19.9203C4.76744 20.5861 4.35115 20.9191 4.00098 20.9195C3.69644 20.9198 3.40845 20.7813 3.21846 20.5433C3 20.2696 3 19.7369 3 18.6712V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4801 4 19.9079 4.21799C20.2842 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V14.8036C21 15.9215 21 16.4805 20.7822 16.9079C20.5905 17.2842 20.2843 17.5905 19.908 17.7822C19.4806 18 18.9215 18 17.8036 18H9.12256C8.70652 18 8.49829 18 8.29932 18.0408C8.12279 18.0771 7.95216 18.1368 7.79168 18.2188C7.61149 18.3108 7.44964 18.4403 7.12722 18.6982L7.12357 18.7012Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
