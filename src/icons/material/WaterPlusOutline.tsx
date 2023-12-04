import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WaterPlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 18C12 18.7 12.12 19.36 12.34 20C12.23 20 12.12 20 12 20C8.69 20 6 17.31 6 14C6 10 12 3.25 12 3.25C12 3.25 16.31 8.1 17.62 12C16.93 12.06 16.28 12.22 15.67 12.47C15 10.68 13.5 8.33 12 6.39C10 8.96 8 12.23 8 14C8 16.21 9.79 18 12 18ZM19 17V14H17V17H14V19H17V22H19V19H22V17H19Z" />
    </Svg>
  );
};
