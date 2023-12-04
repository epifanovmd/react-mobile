import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RecycleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M21.82 15.4205L19.32 19.7505C18.83 20.6105 17.92 21.0605 17 21.0005H15V23.0005L12.5 18.5005L15 14.0005V16.0005H17.82L15.6 12.1505L19.93 9.65055L21.73 12.7705C22.25 13.5405 22.32 14.5705 21.82 15.4205ZM9.21003 3.06055H14.21C15.19 3.06055 16.04 3.63055 16.45 4.45055L17.45 6.19055L19.18 5.19055L16.54 9.60055L11.39 9.69055L13.12 8.69055L11.71 6.24055L9.50003 10.0905L5.16003 7.59055L6.96003 4.47055C7.37003 3.64055 8.22003 3.06055 9.21003 3.06055ZM5.05003 19.7605L2.55003 15.4305C2.06003 14.5805 2.13003 13.5605 2.64003 12.7905L3.64003 11.0605L1.91003 10.0605L7.05003 10.1405L9.70003 14.5605L7.97003 13.5605L6.56003 16.0005H11V21.0005H7.40003C6.47003 21.0705 5.55003 20.6105 5.05003 19.7605Z" />
    </Svg>
  );
};
