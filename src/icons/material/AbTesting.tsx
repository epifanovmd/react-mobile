import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AbTestingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M4 2C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V12H4V8H6V12H8V4C8 3.46957 7.78929 2.96086 7.41421 2.58579C7.03914 2.21071 6.53043 2 6 2H4ZM4 4H6V6H4V4ZM22 15.5V14C22 13.4696 21.7893 12.9609 21.4142 12.5858C21.0391 12.2107 20.5304 12 20 12H16V22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V18.5C21.9899 18.1054 21.8286 17.7297 21.5495 17.4505C21.2703 17.1714 20.8946 17.0101 20.5 17C20.8946 16.9899 21.2703 16.8286 21.5495 16.5495C21.8286 16.2703 21.9899 15.8946 22 15.5ZM20 20H18V18H20V20ZM20 16H18V14H20V16ZM5.79 21.61L4.21 20.39L18.21 2.39L19.79 3.61L5.79 21.61Z" />
    </Svg>
  );
};
