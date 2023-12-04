import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SortVariantLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 13V11H15V13H3ZM3 6H21V8H3V6ZM3 18V16H9V18H3ZM22 22H14V18H15V17C15 16.2044 15.3161 15.4413 15.8787 14.8787C16.4413 14.3161 17.2044 14 18 14C18.7956 14 19.5587 14.3161 20.1213 14.8787C20.6839 15.4413 21 16.2044 21 17V18H22V22ZM18 16C17.7348 16 17.4804 16.1054 17.2929 16.2929C17.1054 16.4804 17 16.7348 17 17V18H19V17C19 16.7348 18.8946 16.4804 18.7071 16.2929C18.5196 16.1054 18.2652 16 18 16Z" />
    </Svg>
  );
};
