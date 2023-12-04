import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PrescriptionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 4V10V14H6V10H8L13.41 15.41L9.83 19L11.24 20.41L14.83 16.83L18.41 20.41L19.82 19L16.24 15.41L19.82 11.83L18.41 10.41L14.83 14L10.83 10H11C11.7956 10 12.5587 9.68393 13.1213 9.12132C13.6839 8.55871 14 7.79565 14 7C14 6.20435 13.6839 5.44129 13.1213 4.87868C12.5587 4.31607 11.7956 4 11 4H4ZM6 6H11C11.2652 6 11.5196 6.10536 11.7071 6.29289C11.8946 6.48043 12 6.73478 12 7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8H6V6Z" />
    </Svg>
  );
};
