import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GarageLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8 16V14.5C20.8 13.1 19.4 12 18 12C16.6 12 15.2 13.1 15.2 14.5V16C14.6 16 14 16.6 14 17.2V20.7C14 21.4 14.6 22 15.2 22H20.7C21.4 22 22 21.4 22 20.8V17.3C22 16.6 21.4 16 20.8 16ZM19.5 16H16.5V14.5C16.5 13.7 17.2 13.2 18 13.2C18.8 13.2 19.5 13.7 19.5 14.5V16ZM5 12H13V14H5V12ZM5 15H12.95C12.42 15.54 12.08 16.24 12 17H5V15ZM12 20H5V18H12V20ZM14 11H4V20H2V9L9 5L16 9V10.44C15.19 10.8 14.5 11.36 14 12.06V11Z" />
    </Svg>
  );
};
