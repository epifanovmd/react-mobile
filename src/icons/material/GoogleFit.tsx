import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleFitIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 4C18.3261 4 19.5979 4.52678 20.5355 5.46447C21.4732 6.40215 22 7.67392 22 9C22 10.38 21.44 11.63 20.54 12.54L12 21.07L3.46 12.54C2.56 11.63 2 10.38 2 9C2 7.67392 2.52678 6.40215 3.46447 5.46447C4.40215 4.52678 5.67392 4 7 4C8.38 4 9.63 4.56 10.54 5.46L12 6.93L13.46 5.46C14.37 4.56 15.62 4 17 4ZM15.59 7.59L9.17 14L12 16.83L18.41 10.41C18.78 10.05 19 9.55 19 9C19 8.46957 18.7893 7.96086 18.4142 7.58579C18.0391 7.21071 17.5304 7 17 7C16.45 7 15.95 7.22 15.59 7.59ZM8.41 7.59C8.05 7.22 7.55 7 7 7C6.46957 7 5.96086 7.21071 5.58579 7.58579C5.21071 7.96086 5 8.46957 5 9C5 9.55 5.22 10.05 5.59 10.41L7.05 11.88L9.88 9.05L8.41 7.59Z" />
    </Svg>
  );
};
