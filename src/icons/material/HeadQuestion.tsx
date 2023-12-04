import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadQuestionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 3C9.22996 3 6.18996 5.95 5.99996 9.66L4.07996 12.19C3.83996 12.5 4.07996 13 4.49996 13H5.99996V16C5.99996 17.11 6.88996 18 7.99996 18H8.99996V21H16V16.31C18.37 15.19 20 12.8 20 10C20 6.14 16.88 3 13 3ZM14 14H12V12H14V14ZM15.75 8.81C15.46 9.21 15.09 9.5 14.64 9.74C14.39 9.9 14.22 10.07 14.13 10.26C14.04 10.44 14 10.69 14 11H12C12 10.5 12.11 10.08 12.31 9.82C12.5 9.55 12.85 9.25 13.36 8.91C13.62 8.75 13.83 8.55 13.97 8.32C14.13 8.09 14.2 7.82 14.2 7.5C14.2 7.2 14.12 6.94 13.94 6.75C13.76 6.57 13.5 6.47 13.19 6.47C12.93 6.47 12.71 6.55 12.53 6.7C12.35 6.86 12.26 7.09 12.25 7.39H10.32L10.31 7.36C10.3 6.57 10.56 6 11.08 5.59C11.62 5.2 12.32 5 13.19 5C14.12 5 14.85 5.23 15.38 5.68C15.92 6.13 16.19 6.74 16.19 7.5C16.19 8 16.04 8.41 15.75 8.81Z" />
    </Svg>
  );
};
