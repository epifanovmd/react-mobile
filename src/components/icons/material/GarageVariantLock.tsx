import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GarageVariantLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.8 16V14.5C21.8 13.1 20.4 12 19 12C17.6 12 16.2 13.1 16.2 14.5V16C15.6 16 15 16.6 15 17.2V20.7C15 21.4 15.6 22 16.2 22H21.7C22.4 22 23 21.4 23 20.8V17.3C23 16.6 22.4 16 21.8 16ZM20.5 16H17.5V14.5C17.5 13.7 18.2 13.2 19 13.2C19.8 13.2 20.5 13.7 20.5 14.5V16ZM5 12H15.04C14.61 12.59 14.35 13.27 14.26 14H5V12ZM16.06 11H4V20H2V9L12 5L22 9V11.04C21.17 10.4 20.13 10 19 10C17.9 10 16.88 10.39 16.06 11ZM13 20H5V18H13V20ZM5 15H13.95C13.42 15.54 13.08 16.24 13 17H5V15Z" />
    </Svg>
  );
};
