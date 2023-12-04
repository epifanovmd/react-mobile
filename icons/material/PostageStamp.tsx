import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PostageStampIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 2V5.5C3.1 5.5 4 6.62 4 8C4 9.38 3.1 10.5 2 10.5V13.5C3.1 13.5 4 14.62 4 16C4 17.38 3.1 18.5 2 18.5V22H5.5C5.5 20.9 6.62 20 8 20C9.38 20 10.5 20.9 10.5 22H13.5C13.5 20.9 14.62 20 16 20C17.38 20 18.5 20.9 18.5 22H22V18.5C20.9 18.5 20 17.38 20 16C20 14.62 20.9 13.5 22 13.5V10.5C20.9 10.5 20 9.38 20 8C20 6.62 20.9 5.5 22 5.5V2H18.5C18.5 3.1 17.38 4 16 4C14.62 4 13.5 3.1 13.5 2H10.5C10.5 3.1 9.38 4 8 4C6.62 4 5.5 3.1 5.5 2H2ZM6 6H18V18H6V6ZM9 7C8.46957 7 7.96086 7.21071 7.58579 7.58579C7.21071 7.96086 7 8.46957 7 9C7 9.53043 7.21071 10.0391 7.58579 10.4142C7.96086 10.7893 8.46957 11 9 11C9.53043 11 10.0391 10.7893 10.4142 10.4142C10.7893 10.0391 11 9.53043 11 9C11 8.46957 10.7893 7.96086 10.4142 7.58579C10.0391 7.21071 9.53043 7 9 7ZM17 10L14 13L12 12L7 17H17V10Z" />
    </Svg>
  );
};
