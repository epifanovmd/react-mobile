import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EyeSettingsOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9ZM12 4.5C16.86 4.5 21.22 7.5 23 12C20.61 18.08 13.75 21.06 7.67 18.67C4.62 17.47 2.2 15.06 1 12C2.78 7.5 7.14 4.5 12 4.5ZM3.18 12C5.56 16.87 11.45 18.89 16.32 16.5C18.28 15.54 19.86 13.96 20.82 12C18.44 7.13 12.55 5.11 7.68 7.5C5.72 8.46 4.14 10.04 3.18 12ZM9 22H7V24H9V22ZM13 22H11V24H13V22ZM17 22H15V24H17V22Z" />
    </Svg>
  );
};
