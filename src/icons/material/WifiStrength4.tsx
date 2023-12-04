import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrength4Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 3C7.79 3 3.7 4.41 0.380005 7C4.41001 12.06 7.89 16.37 12 21.5C16.08 16.42 20.24 11.24 23.65 7C20.32 4.41 16.22 3 12 3Z" />
    </Svg>
  );
};
