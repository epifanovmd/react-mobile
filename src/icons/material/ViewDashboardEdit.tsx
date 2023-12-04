import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewDashboardEditIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1ZM19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9ZM21 9H13V3H21V9ZM13 18.06V11H21V11.1C20.24 11.1 19.57 11.5 19.19 11.89L13 18.06ZM11 13H3V3H11V13ZM11 21H3V15H11V21Z" />
    </Svg>
  );
};
