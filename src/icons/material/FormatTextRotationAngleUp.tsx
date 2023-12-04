import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatTextRotationAngleUpIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.5799 9.32973V13.5497L19.1699 12.1397L10.3099 20.9997L8.90992 19.5897L17.7199 10.7297L16.3099 9.32973H20.5799ZM7.58992 10.9997L10.2199 8.38973L5.33992 6.13973L7.58992 10.9997ZM4.49992 4.21973L15.6099 8.62973L14.1599 10.1297L11.9599 9.18973L8.38992 12.7497L9.32992 14.9097L7.82992 16.4097L3.41992 5.24973L4.49992 4.21973Z" />
    </Svg>
  );
};
