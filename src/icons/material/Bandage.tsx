import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BandageIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17.73 12.0001L21.71 8.04006C22.1 7.65006 22.1 7.00006 21.71 6.63006L17.37 2.29006C17 1.90006 16.35 1.90006 15.96 2.29006L12 6.27006L8.00002 2.29006C7.80002 2.10006 7.55002 2.00006 7.29002 2.00006C7.04002 2.00006 6.78002 2.10006 6.59002 2.29006L2.25002 6.63006C1.86002 7.00006 1.86002 7.65006 2.25002 8.04006L6.23002 12.0001L2.25002 16.0001C1.86002 16.3901 1.86002 17.0001 2.25002 17.4101L6.59002 21.7501C7.00002 22.1401 7.61002 22.1401 8.00002 21.7501L12 17.7701L15.96 21.7501C16.16 21.9501 16.41 22.0401 16.67 22.0401C16.93 22.0401 17.18 21.9401 17.38 21.7501L21.72 17.4101C22.11 17.0001 22.11 16.3901 21.72 16.0001L17.73 12.0001ZM12 9.00006C12.2652 9.00006 12.5196 9.10542 12.7071 9.29295C12.8947 9.48049 13 9.73484 13 10.0001C13 10.2653 12.8947 10.5196 12.7071 10.7072C12.5196 10.8947 12.2652 11.0001 12 11.0001C11.7348 11.0001 11.4804 10.8947 11.2929 10.7072C11.1054 10.5196 11 10.2653 11 10.0001C11 9.73484 11.1054 9.48049 11.2929 9.29295C11.4804 9.10542 11.7348 9.00006 12 9.00006ZM7.29002 10.9601L3.66002 7.34006L7.29002 3.71006L10.91 7.33006L7.29002 10.9601ZM10 13.0001C9.7348 13.0001 9.48045 12.8947 9.29291 12.7072C9.10538 12.5196 9.00002 12.2653 9.00002 12.0001C9.00002 11.7348 9.10538 11.4805 9.29291 11.293C9.48045 11.1054 9.7348 11.0001 10 11.0001C10.2652 11.0001 10.5196 11.1054 10.7071 11.293C10.8947 11.4805 11 11.7348 11 12.0001C11 12.2653 10.8947 12.5196 10.7071 12.7072C10.5196 12.8947 10.2652 13.0001 10 13.0001ZM12 15.0001C11.7348 15.0001 11.4804 14.8947 11.2929 14.7072C11.1054 14.5196 11 14.2653 11 14.0001C11 13.7348 11.1054 13.4805 11.2929 13.293C11.4804 13.1054 11.7348 13.0001 12 13.0001C12.2652 13.0001 12.5196 13.1054 12.7071 13.293C12.8947 13.4805 13 13.7348 13 14.0001C13 14.2653 12.8947 14.5196 12.7071 14.7072C12.5196 14.8947 12.2652 15.0001 12 15.0001ZM14 11.0001C14.2652 11.0001 14.5196 11.1054 14.7071 11.293C14.8947 11.4805 15 11.7348 15 12.0001C15 12.2653 14.8947 12.5196 14.7071 12.7072C14.5196 12.8947 14.2652 13.0001 14 13.0001C13.7348 13.0001 13.4804 12.8947 13.2929 12.7072C13.1054 12.5196 13 12.2653 13 12.0001C13 11.7348 13.1054 11.4805 13.2929 11.293C13.4804 11.1054 13.7348 11.0001 14 11.0001ZM16.66 20.3401L13.03 16.7201L16.66 13.0901L20.28 16.7101L16.66 20.3401Z" />
    </Svg>
  );
};
