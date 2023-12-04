import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToothbrushElectricIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 1.5V14C10.34 14 9 15.34 9 17V22H17V17C17 15.34 15.66 14 14 14V3.5C14 2.4 13.11 1.5 12 1.5ZM7.5 2V9H11V7.5H9V3.5H11V2H7.5ZM13 17.5C13.83 17.5 14.5 18.17 14.5 19C14.5 19.83 13.83 20.5 13 20.5C12.17 20.5 11.5 19.83 11.5 19C11.5 18.17 12.17 17.5 13 17.5Z" />
    </Svg>
  );
};
