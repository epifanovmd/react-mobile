import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const BorderColorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.71 4.04006C21.1 3.65006 21.1 3.00006 20.71 2.63006L18.37 0.290059C18 -0.0999414 17.35 -0.0999414 16.96 0.290059L15 2.25006L18.75 6.00006L20.71 4.04006ZM17.75 7.00006L14 3.25006L4 13.2501V17.0001H7.75L17.75 7.00006Z" />
    </Svg>
  );
};
