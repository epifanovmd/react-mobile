import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanMaleChildIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 2C5.9 2 5 2.9 5 4C5 5.1 5.9 6 7 6C8.1 6 9 5.11 9 4C9 2.89 8.11 2 7 2ZM5 7C3.89 7 3 7.89 3 9V15H5V22H10V11.6L12.53 16H14.97L16 14.66V22H20V17H21V14C21 12.89 20.11 12 19 12H16.5C15.9 12 15.37 12.26 15 12.68C14.67 13.1 14.32 13.56 14 14H13.69L10 7.66C9.84 7.38 9.22 7 8.5 7H5ZM18 8C17.17 8 16.5 8.67 16.5 9.5C16.5 10.33 17.17 11 18 11C18.83 11 19.5 10.33 19.5 9.5C19.5 8.67 18.83 8 18 8Z" />
    </Svg>
  );
};
