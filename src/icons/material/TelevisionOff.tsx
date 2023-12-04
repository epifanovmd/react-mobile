import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TelevisionOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M0.5 2.77L1.78 1.5L21 20.72L19.73 22L16.73 19H16V21H8V19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V5C1 4.5 1.17 4.07 1.46 3.73L0.5 2.77ZM21 17V5H7.82L5.82 3H21C21.5304 3 22.0391 3.21071 22.4142 3.58579C22.7893 3.96086 23 4.46957 23 5V17C23 17.85 22.45 18.59 21.7 18.87L19.82 17H21ZM3 17H14.73L3 5.27V17Z" />
    </Svg>
  );
};
