import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RelationZeroOrManyToZeroOrManyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 13L19 15H18.79C18.5951 14.5549 18.2747 14.1763 17.868 13.9104C17.4613 13.6445 16.9859 13.5029 16.5 13.5029C16.0141 13.5029 15.5387 13.6445 15.132 13.9104C14.7253 14.1763 14.4049 14.5549 14.21 15H13V7H9.79C9.59507 6.55492 9.27466 6.17629 8.86796 5.91042C8.46126 5.64454 7.9859 5.50295 7.5 5.50295C7.0141 5.50295 6.53874 5.64454 6.13204 5.91042C5.72534 6.17629 5.40493 6.55492 5.21 7H5L3 5H2V11H3L5 9H5.21C5.40493 9.44508 5.72534 9.82371 6.13204 10.0896C6.53874 10.3555 7.0141 10.4971 7.5 10.4971C7.9859 10.4971 8.46126 10.3555 8.86796 10.0896C9.27466 9.82371 9.59507 9.44508 9.79 9H11V17H14.21C14.4049 17.4451 14.7253 17.8237 15.132 18.0896C15.5387 18.3555 16.0141 18.4971 16.5 18.4971C16.9859 18.4971 17.4613 18.3555 17.868 18.0896C18.2747 17.8237 18.5951 17.4451 18.79 17H19L21 19H22V13H21ZM7.5 9C7.30222 9 7.10888 8.94135 6.94443 8.83147C6.77998 8.72159 6.65181 8.56541 6.57612 8.38268C6.50043 8.19996 6.48063 7.99889 6.51921 7.80491C6.5578 7.61093 6.65304 7.43275 6.79289 7.29289C6.93275 7.15304 7.11093 7.0578 7.30491 7.01921C7.49889 6.98063 7.69996 7.00043 7.88268 7.07612C8.06541 7.15181 8.22159 7.27998 8.33147 7.44443C8.44135 7.60888 8.5 7.80222 8.5 8C8.5 8.26522 8.39464 8.51957 8.20711 8.70711C8.01957 8.89464 7.76522 9 7.5 9ZM16.5 17C16.3022 17 16.1089 16.9414 15.9444 16.8315C15.78 16.7216 15.6518 16.5654 15.5761 16.3827C15.5004 16.2 15.4806 15.9989 15.5192 15.8049C15.5578 15.6109 15.653 15.4327 15.7929 15.2929C15.9327 15.153 16.1109 15.0578 16.3049 15.0192C16.4989 14.9806 16.7 15.0004 16.8827 15.0761C17.0654 15.1518 17.2216 15.28 17.3315 15.4444C17.4414 15.6089 17.5 15.8022 17.5 16C17.5 16.2652 17.3946 16.5196 17.2071 16.7071C17.0196 16.8946 16.7652 17 16.5 17Z" />
    </Svg>
  );
};
