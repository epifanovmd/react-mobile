import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DesktopIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M15 20H9M7.19691 17C6.07899 17 5.5192 17 5.0918 16.7822C4.71547 16.5905 4.40973 16.2837 4.21799 15.9074C4.09698 15.6699 4.04315 15.3919 4.0192 15M7.19691 17H16.8031M7.19691 17H5.59961C5.03956 17 4.75981 16.9996 4.5459 16.8906C4.35774 16.7948 4.20487 16.6429 4.10899 16.4548C4 16.2409 4 15.9601 4 15.4V15H4.0192M4.0192 15C4 14.6859 4 14.2985 4 13.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V13.8031C20 14.3 20 14.6864 19.9809 15M4.0192 15H19.9809M19.9809 15C19.957 15.3919 19.9032 15.67 19.7822 15.9074C19.5905 16.2837 19.2837 16.5905 18.9074 16.7822C18.48 17 17.921 17 16.8031 17M19.9809 15H20V15.4C20 15.9601 19.9996 16.2409 19.8906 16.4548C19.7948 16.6429 19.6423 16.7948 19.4542 16.8906C19.2403 16.9996 18.9597 17 18.3996 17H16.8031"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
