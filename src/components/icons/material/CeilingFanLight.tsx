import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CeilingFanLightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 3V5H11V10.27C10.38 10.63 10 11.29 10 12V13H14V12C14 11.29 13.62 10.63 13 10.27V5H16V3H8ZM6 12C3.79 12 2 12.67 2 13.5C2 14.33 3.79 15 6 15C8.21 15 10 14.33 10 13.5C10 12.67 8.21 12 6 12ZM18 12C15.79 12 14 12.67 14 13.5C14 14.33 15.79 15 18 15C20.21 15 22 14.33 22 13.5C22 12.67 20.21 12 18 12ZM10 14V15C10 15.72 10.38 16.38 11 16.73C11.62 17.09 12.38 17.09 13 16.73C13.62 16.38 14 15.71 14 15V14H10ZM13 19V22H11V19H13ZM15.88 16.46L18 18.59L16.59 20L14.47 17.88L15.88 16.46ZM9.54 17.88L7.41 20L6 18.59L8.12 16.47L9.54 17.88Z" />
    </Svg>
  );
};
