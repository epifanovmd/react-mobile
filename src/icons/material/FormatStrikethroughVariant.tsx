import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatStrikethroughVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M23 11.9997V13.9997H18.61C19.61 16.1397 19.56 21.9997 12.38 21.9997C4.05 22.0497 4.37 15.4997 4.37 15.4997L8.34 15.5497C8.37 18.9197 11.5 18.9197 12.12 18.8797C12.76 18.8297 15.15 18.8397 15.34 16.4997C15.42 15.4097 14.32 14.5797 13.12 13.9997H1V11.9997H23ZM19.41 7.88973L15.43 7.85974C15.43 7.85974 15.6 5.08973 12.15 5.07973C8.7 5.05973 9 7.27973 9 7.55973C9.04 7.83974 9.34 9.21974 12 9.87973H5.71C5.71 9.87973 2.22 3.14973 10.74 1.99973C19.45 0.799735 19.43 7.90973 19.41 7.88973Z" />
    </Svg>
  );
};
