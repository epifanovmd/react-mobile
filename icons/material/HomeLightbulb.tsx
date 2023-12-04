import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HomeLightbulbIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L2 12H5V20H19V12H22L12 3ZM13 18H11V17H13V18ZM13.5 14.58V16H10.5V14.58C9.92807 14.2498 9.48109 13.7401 9.22836 13.13C8.97564 12.5198 8.9313 11.8434 9.10222 11.2055C9.27315 10.5676 9.64978 10.0039 10.1737 9.60186C10.6976 9.19984 11.3396 8.98192 12 8.98192C12.6604 8.98192 13.3024 9.19984 13.8263 9.60186C14.3502 10.0039 14.7269 10.5676 14.8978 11.2055C15.0687 11.8434 15.0244 12.5198 14.7716 13.13C14.5189 13.7401 14.0719 14.2498 13.5 14.58Z" />
    </Svg>
  );
};
