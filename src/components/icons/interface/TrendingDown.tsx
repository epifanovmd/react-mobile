import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TrendingDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M20.0005 17L14.1543 11.0625C14.0493 10.9559 13.9962 10.9024 13.9492 10.8604C13.1899 10.1807 12.0416 10.1807 11.2822 10.8604C11.2352 10.9024 11.1817 10.9558 11.0767 11.0625C10.9716 11.1692 10.9191 11.2226 10.8721 11.2646C10.1127 11.9443 8.96397 11.9443 8.20461 11.2646C8.15759 11.2226 8.10506 11.1692 8 11.0625L4 7M20.0005 17L20 11M20.0005 17H14"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
