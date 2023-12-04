import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GateArrowRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 6V11H13V7H11V11H9V9H7V21H9V19H11V21H12.09C12.03 20.67 12 20.34 12 20C12 18.82 12.35 17.67 13 16.69V13H15V14.81C15.62 14.45 16.3 14.21 17 14.09V13H19V14.09C19.7 14.21 20.38 14.45 21 14.81V13H22V11H21V6H19V11H17V6H15ZM9 13H11V17H9V13ZM19 17V19H15V21H19V23L22 20L19 17Z" />
    </Svg>
  );
};
