import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CursorTextIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 19C13 19.2652 13.1054 19.5196 13.2929 19.7071C13.4804 19.8946 13.7348 20 14 20H16V22H13.5C12.95 22 12 21.55 12 21C12 21.55 11.05 22 10.5 22H8V20H10C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4H8V2H10.5C11.05 2 12 2.45 12 3C12 2.45 12.95 2 13.5 2H16V4H14C13.7348 4 13.4804 4.10536 13.2929 4.29289C13.1054 4.48043 13 4.73478 13 5V19Z" />
    </Svg>
  );
};
