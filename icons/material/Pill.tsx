import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PillIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.22009 11.2898L11.2901 4.21984C13.6401 1.87984 17.4301 1.87984 19.7801 4.21984C22.1201 6.55984 22.1201 10.3598 19.7801 12.7098L12.7101 19.7798C10.3601 22.1198 6.56009 22.1198 4.22009 19.7798C1.88009 17.4298 1.88009 13.6398 4.22009 11.2898ZM5.64009 12.7098C4.59009 13.7498 4.24009 15.2398 4.60009 16.5698L10.5901 10.5898L14.8301 14.8298L18.3601 11.2898C19.9301 9.72984 19.9301 7.19984 18.3601 5.63984C16.8001 4.06984 14.2701 4.06984 12.7101 5.63984L5.64009 12.7098Z" />
    </Svg>
  );
};
