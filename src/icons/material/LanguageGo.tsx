import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageGoIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2.64 10.3309L2.62 10.2709L2.84 10.0009L2.96 9.92088H6.8L6.83 10.0009L6.65 10.2609L6.54 10.3209L2.64 10.3309ZM1.03 11.3109L1 11.2609L1.22 10.9709L1.34 10.9109H6.24L6.29 11.0009L6.21 11.2409L6.11 11.3109H1.03ZM3.63 12.3009L3.59 12.2409L3.75 11.9609L3.85 11.9009H6L6.07 11.9709L6.05 12.2209L5.97 12.3009H3.63ZM14.78 10.1409L13 10.6109C12.81 10.6509 12.8 10.6609 12.66 10.5009C12.5 10.3209 12.39 10.2109 12.16 10.1009C11.5 9.76088 10.83 9.86088 10.22 10.2509C9.5 10.7309 9.11 11.4209 9.12 12.3009C9.13 13.1609 9.72 13.8709 10.57 14.0009C11.3 14.0909 11.91 13.8309 12.4 13.2809L12.69 12.8909H10.62C10.4 12.8909 10.35 12.7509 10.42 12.5709L10.97 11.3909C11 11.3309 11.08 11.2209 11.24 11.2209H14.68C14.83 10.7209 15.09 10.2609 15.43 9.81088C16.21 8.78088 17.16 8.24088 18.43 8.00088C19.5 7.82088 20.56 7.93088 21.5 8.57088C22.34 9.15088 22.87 9.93088 23 10.9609C23.19 12.4109 22.76 13.5909 21.76 14.6109C21.05 15.3309 20.18 15.7809 19.19 16.0009L18.33 16.0809C17.35 16.0609 16.46 15.7809 15.71 15.1309C15.19 14.6809 14.83 14.1409 14.65 13.5009C14.5 13.7409 14.38 13.9709 14.21 14.2009C13.44 15.2209 12.43 15.8509 11.15 16.0009C10.1 16.1609 9.12 15.9509 8.26 15.3109C7.47 14.7109 7 13.9109 6.9 12.9209C6.76 11.7509 7.1 10.7009 7.81 9.78088C8.57 8.78088 9.58 8.15088 10.82 7.92088C11.82 7.74088 12.79 7.86088 13.66 8.44088C14.23 8.82088 14.63 9.34088 14.9 9.96088C14.94 10.0509 14.9 10.1109 14.78 10.1409ZM20.89 11.7409L20.86 11.3809C20.67 10.3209 19.69 9.72088 18.67 9.95088C17.66 10.1709 17 10.8009 16.79 11.8109C16.6 12.6509 17 13.5009 17.77 13.8409C18.36 14.1009 18.96 14.0609 19.53 13.7809C20.37 13.3509 20.84 12.6609 20.89 11.7409Z" />
    </Svg>
  );
};
