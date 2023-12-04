import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PentagramIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16.1499 14.3994L18.7099 22.2594L11.9999 17.3994L5.2799 22.2994L7.8499 14.3694L1.1499 9.49937H9.4399L11.9999 1.60938L14.5599 9.49937H22.8899L16.1499 14.3994ZM13.2999 16.4694L15.8599 18.3294L14.8799 15.3194L13.2999 16.4694ZM10.9999 9.49937H12.9999L11.9999 6.46937L10.9999 9.49937ZM10.7399 16.4694L9.1299 15.2994L8.1299 18.3694L10.7399 16.4694ZM18.2799 10.9994H15.0499L15.6699 12.8994L18.2799 10.9994ZM10.5299 10.9994L9.6199 13.7994L11.9999 15.5394L14.3899 13.8194L13.4699 10.9994H10.5299ZM5.7599 10.9994L8.3399 12.8694L8.9499 10.9994H5.7599Z" />
    </Svg>
  );
};
