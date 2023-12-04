import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const HumanMaleHeightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 2C8.78 2 9.67 4.16 8.42 5.42C7.16 6.67 5 5.78 5 4C5 3.46957 5.21071 2.96086 5.58579 2.58579C5.96086 2.21071 6.46957 2 7 2ZM5.5 7H8.5C9.03043 7 9.53914 7.21071 9.91421 7.58579C10.2893 7.96086 10.5 8.46957 10.5 9V14.5H9V22H5V14.5H3.5V9C3.5 8.46957 3.71071 7.96086 4.08579 7.58579C4.46086 7.21071 4.96957 7 5.5 7ZM21 8H15V10H21V8ZM21 11H18V13H21V11ZM21 2H15V4H21V2ZM21 5H18V7H21V5ZM21 14H15V16H21V14ZM21 20H15V22H21V20ZM21 17H18V19H21" />
    </Svg>
  );
};
