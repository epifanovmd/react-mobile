import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LooksIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 6C9.08262 6 6.28473 7.15893 4.22183 9.22183C2.15893 11.2847 1 14.0826 1 17H3C3 12.04 7.04 8 12 8C16.96 8 21 12.04 21 17H23C23 14.0826 21.8411 11.2847 19.7782 9.22183C17.7153 7.15893 14.9174 6 12 6ZM12 10C8.14 10 5 13.14 5 17H7C7 15.6739 7.52678 14.4021 8.46447 13.4645C9.40215 12.5268 10.6739 12 12 12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17H19C19 13.14 15.86 10 12 10Z" />
    </Svg>
  );
};
