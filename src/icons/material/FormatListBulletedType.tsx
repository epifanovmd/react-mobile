import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatListBulletedTypeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 9.5L7.5 14H2.5L5 9.5ZM3 4H7V8H3V4ZM5 20C5.53043 20 6.03914 19.7893 6.41421 19.4142C6.78929 19.0391 7 18.5304 7 18C7 17.4696 6.78929 16.9609 6.41421 16.5858C6.03914 16.2107 5.53043 16 5 16C4.46957 16 3.96086 16.2107 3.58579 16.5858C3.21071 16.9609 3 17.4696 3 18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20ZM9 5V7H21V5H9ZM9 19H21V17H9V19ZM9 13H21V11H9V13Z" />
    </Svg>
  );
};
