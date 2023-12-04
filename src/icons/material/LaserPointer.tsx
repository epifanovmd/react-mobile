import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LaserPointerIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9.00003 13L5.00003 16C4.00003 16.88 3.86003 18.12 4.00003 19C4.13003 20 4.91003 21.22 6.00003 21.68C7.57003 22.35 9.09003 21.9 10.04 20.92L19 13C20.86 11.62 20 9 18 9H12L19.46 4.61C19.9 4.29 20.08 3.82 20.06 3.37C20 2.67 19.46 2 18.6 2H18.54C18.19 2 17.86 2.11 17.56 2.29L5.00003 9C4.19003 9.46 3.94003 10.24 4.00003 11C4.05003 12.03 4.74003 13 6.00003 13H9.00003ZM5.00003 18.5C5.00003 17.12 6.12003 16 7.50003 16C8.88003 16 10 17.12 10 18.5C10 19.88 8.88003 21 7.50003 21C6.12003 21 5.00003 19.88 5.00003 18.5Z" />
    </Svg>
  );
};
