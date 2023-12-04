import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SnowflakeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.79 13.95L18.46 14.57L16.46 13.44V10.56L18.46 9.43L20.79 10.05L21.3099 8.12L19.54 7.65L20 5.88L18.07 5.36L17.45 7.69L15.45 8.82L13 7.38V5.12L14.71 3.41L13.29 2L12 3.29L10.71 2L9.28995 3.41L11 5.12V7.38L8.49995 8.82L6.49995 7.69L5.91995 5.36L3.99995 5.88L4.46995 7.65L2.69995 8.12L3.21995 10.05L5.54995 9.43L7.54995 10.56V13.45L5.54995 14.58L3.21995 13.96L2.69995 15.89L4.46995 16.36L3.99995 18.12L5.92995 18.64L6.54995 16.31L8.54995 15.18L11 16.62V18.88L9.28995 20.59L10.71 22L12 20.71L13.29 22L14.7 20.59L13 18.88V16.62L15.5 15.17L17.5 16.3L18.12 18.63L20 18.12L19.53 16.35L21.2999 15.88L20.79 13.95ZM9.49995 10.56L12 9.11L14.5 10.56V13.44L12 14.89L9.49995 13.44V10.56Z" />
    </Svg>
  );
};
