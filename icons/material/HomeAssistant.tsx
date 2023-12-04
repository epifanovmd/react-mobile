import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeAssistantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.8 13.0001H20V21.0001H13V17.6701L15.79 14.8801L16.5 15.0001C17.66 15.0001 18.6 14.0601 18.6 12.9001C18.6 11.7401 17.66 10.8001 16.5 10.8001C15.9431 10.8001 15.4089 11.0213 15.0151 11.4152C14.6213 11.809 14.4 12.3431 14.4 12.9001L14.5 13.6101L13 15.1301V9.65008C13.66 9.29008 14.1 8.60008 14.1 7.80008C14.1 7.24312 13.8788 6.70898 13.485 6.31515C13.0911 5.92133 12.557 5.70008 12 5.70008C11.4431 5.70008 10.9089 5.92133 10.5151 6.31515C10.1213 6.70898 9.90004 7.24312 9.90004 7.80008C9.90004 8.60008 10.34 9.29008 11 9.65008V15.1301L9.50004 13.6101L9.60004 12.9001C9.60004 12.3431 9.37879 11.809 8.98497 11.4152C8.59114 11.0213 8.057 10.8001 7.50004 10.8001C6.94309 10.8001 6.40895 11.0213 6.01512 11.4152C5.62129 11.809 5.40004 12.3431 5.40004 12.9001C5.40004 13.457 5.62129 13.9912 6.01512 14.385C6.40895 14.7788 6.94309 15.0001 7.50004 15.0001L8.21004 14.8801L11 17.6701V21.0001H4.00004V13.0001H2.25004C1.83004 13.0001 1.42004 13.0001 1.42004 12.7901C1.43004 12.5701 1.85004 12.1501 2.28004 11.7201L11 3.00008C11.33 2.67008 11.67 2.33008 12 2.33008C12.33 2.33008 12.67 2.67008 13 3.00008L17 7.00008V6.00008H19V9.00008L21.78 11.7801C22.18 12.1801 22.59 12.5901 22.6 12.8001C22.6 13.0001 22.2 13.0001 21.8 13.0001ZM7.50004 12.0001C7.73874 12.0001 7.96766 12.0949 8.13644 12.2637C8.30522 12.4325 8.40004 12.6614 8.40004 12.9001C8.40004 13.1388 8.30522 13.3677 8.13644 13.5365C7.96766 13.7053 7.73874 13.8001 7.50004 13.8001C7.26135 13.8001 7.03243 13.7053 6.86365 13.5365C6.69487 13.3677 6.60004 13.1388 6.60004 12.9001C6.60004 12.6614 6.69487 12.4325 6.86365 12.2637C7.03243 12.0949 7.26135 12.0001 7.50004 12.0001ZM16.5 12.0001C17 12.0001 17.4 12.4001 17.4 12.9001C17.4 13.4001 17 13.8001 16.5 13.8001C16.2613 13.8001 16.0324 13.7053 15.8636 13.5365C15.6949 13.3677 15.6 13.1388 15.6 12.9001C15.6 12.6614 15.6949 12.4325 15.8636 12.2637C16.0324 12.0949 16.2613 12.0001 16.5 12.0001ZM12 6.90008C12.5 6.90008 12.9 7.30008 12.9 7.80008C12.9 8.30008 12.5 8.70008 12 8.70008C11.5 8.70008 11.1 8.30008 11.1 7.80008C11.1 7.30008 11.5 6.90008 12 6.90008Z" />
    </Svg>
  );
};