import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ElectricSwitchClosedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.83 11.0001C20.6218 10.4176 20.2386 9.91363 19.7329 9.55733C19.2271 9.20102 18.6236 9.00977 18.005 9.00977C17.3864 9.00977 16.7829 9.20102 16.2771 9.55733C15.7714 9.91363 15.3882 10.4176 15.18 11.0001H8.82C8.6118 10.4176 8.22859 9.91363 7.72287 9.55733C7.21715 9.20102 6.61364 9.00977 5.995 9.00977C5.37636 9.00977 4.77285 9.20102 4.26713 9.55733C3.76141 9.91363 3.3782 10.4176 3.17 11.0001H1V13.0001H3.17C3.3782 13.5827 3.76141 14.0866 4.26713 14.4429C4.77285 14.7992 5.37636 14.9905 5.995 14.9905C6.61364 14.9905 7.21715 14.7992 7.72287 14.4429C8.22859 14.0866 8.6118 13.5827 8.82 13.0001H15.18C15.3882 13.5827 15.7714 14.0866 16.2771 14.4429C16.7829 14.7992 17.3864 14.9905 18.005 14.9905C18.6236 14.9905 19.2271 14.7992 19.7329 14.4429C20.2386 14.0866 20.6218 13.5827 20.83 13.0001H23V11.0001H20.83ZM6 13.0001C5.80222 13.0001 5.60888 12.9415 5.44443 12.8316C5.27998 12.7217 5.15181 12.5655 5.07612 12.3828C5.00043 12.2001 4.98063 11.999 5.01921 11.805C5.0578 11.6111 5.15304 11.4329 5.29289 11.293C5.43275 11.1532 5.61093 11.0579 5.80491 11.0193C5.99889 10.9808 6.19996 11.0006 6.38268 11.0762C6.56541 11.1519 6.72159 11.2801 6.83147 11.4446C6.94135 11.609 7 11.8023 7 12.0001C7 12.2653 6.89464 12.5197 6.70711 12.7072C6.51957 12.8948 6.26522 13.0001 6 13.0001ZM18 13.0001C17.8022 13.0001 17.6089 12.9415 17.4444 12.8316C17.28 12.7217 17.1518 12.5655 17.0761 12.3828C17.0004 12.2001 16.9806 11.999 17.0192 11.805C17.0578 11.6111 17.153 11.4329 17.2929 11.293C17.4327 11.1532 17.6109 11.0579 17.8049 11.0193C17.9989 10.9808 18.2 11.0006 18.3827 11.0762C18.5654 11.1519 18.7216 11.2801 18.8315 11.4446C18.9414 11.609 19 11.8023 19 12.0001C19 12.2653 18.8946 12.5197 18.7071 12.7072C18.5196 12.8948 18.2652 13.0001 18 13.0001Z" />
    </Svg>
  );
};