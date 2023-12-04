import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CogStopOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13.5401 22H10.0001C9.75008 22 9.54008 21.82 9.50008 21.58L9.13008 18.93C8.50008 18.68 7.96008 18.34 7.44008 17.94L4.95008 18.95C4.73008 19.03 4.46008 18.95 4.34008 18.73L2.34008 15.27C2.21008 15.05 2.27008 14.78 2.46008 14.63L4.57008 12.97L4.50008 12L4.57008 11L2.46008 9.37C2.27008 9.22 2.21008 8.95 2.34008 8.73L4.34008 5.27C4.46008 5.05 4.73008 4.96 4.95008 5.05L7.44008 6.05C7.96008 5.66 8.50008 5.32 9.13008 5.07L9.50008 2.42C9.54008 2.18 9.75008 2 10.0001 2H14.0001C14.2501 2 14.4601 2.18 14.5001 2.42L14.8701 5.07C15.5001 5.32 16.0401 5.66 16.5601 6.05L19.0501 5.05C19.2701 4.96 19.5401 5.05 19.6601 5.27L21.6601 8.73C21.7901 8.95 21.7301 9.22 21.5401 9.37L19.4301 11L19.5001 12V12.19C19.0001 12.07 18.5001 12 18.0001 12C17.8301 12 17.6601 12 17.5001 12.03C17.5001 11.41 17.4001 10.79 17.2001 10.2L19.3101 8.65L18.5601 7.35L16.1501 8.39C15.3801 7.5 14.3201 6.86 13.1201 6.62L12.7501 4H11.2501L10.8801 6.61C9.68008 6.86 8.62008 7.5 7.85008 8.39L5.44008 7.35L4.69008 8.65L6.80008 10.2C6.40008 11.37 6.40008 12.64 6.80008 13.8L4.68008 15.36L5.43008 16.66L7.86008 15.62C8.63008 16.5 9.68008 17.14 10.8701 17.38L11.2401 20H12.3501C12.6101 20.75 13.0001 21.42 13.5401 22ZM12.3601 15.96C12.2401 16 12.1201 16 12.0001 16C9.79008 16 8.00008 14.21 8.00008 12C8.00008 9.79 9.79008 8 12.0001 8C14.2101 8 16.0001 9.79 16.0001 12C16.0001 12.12 16.0001 12.24 15.9601 12.36C14.2901 12.97 12.9701 14.29 12.3601 15.96ZM14.0001 12C14.0001 10.9 13.1101 10 12.0001 10C10.8901 10 10.0001 10.9 10.0001 12C10.0001 13.1 10.9001 14 12.0001 14C13.1001 14 14.0001 13.11 14.0001 12ZM15.0001 15H21.0001V21H15.0001V15Z" />
    </Svg>
  );
};
