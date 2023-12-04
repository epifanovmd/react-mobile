import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FoldersIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M3 11V19.4C3 19.9601 3 20.2396 3.10899 20.4535C3.20487 20.6417 3.35774 20.7952 3.5459 20.8911C3.7596 21 4.03901 21 4.59797 21L15.4014 21C15.9603 21 16.2408 21 16.4545 20.8911C16.6427 20.7952 16.7948 20.6421 16.8906 20.4539C16.9996 20.24 16.9996 19.96 16.9996 19.3999L17.0011 15.0006M3 11H10M3 11L3 10.6001C3 10.0401 3 9.75979 3.10899 9.5459C3.20486 9.35774 3.35774 9.20486 3.5459 9.10898C3.75977 9.00001 4.03975 9.00001 4.59961 9.00001L7 9M10 11H15.4C15.96 11 16.242 11 16.456 11.109C16.6441 11.2049 16.7948 11.3577 16.8906 11.5459C16.9996 11.7598 16.9996 12.0398 16.9996 12.5999L17.0011 15.0006M10 11L8.9248 9.61768C8.74861 9.39115 8.66017 9.27743 8.5498 9.1958C8.45201 9.12347 8.34303 9.06979 8.2259 9.037C8.09373 9.00001 7.9488 9.00001 7.66191 9.00001L7 9M7 5H19.4C19.9601 5 20.242 5 20.4559 5.10899C20.6441 5.20487 20.7948 5.35774 20.8906 5.5459C20.9996 5.75981 20.9996 6.03984 20.9996 6.59989V13.3999C20.9996 13.96 20.9996 14.24 20.8906 14.4539C20.7948 14.6421 20.6432 14.7952 20.4551 14.8911C20.2414 15 19.9613 15 19.4023 15L17.0011 15.0006M7 5V9M7 5L7 4.6001C7 4.04014 7 3.75979 7.10899 3.5459C7.20486 3.35774 7.35774 3.20487 7.5459 3.10899C7.75981 3 8.03956 3 8.59961 3H11.6615C11.9487 3 12.0913 3 12.2236 3.03701C12.3407 3.0698 12.452 3.12347 12.5498 3.1958C12.6602 3.27743 12.7486 3.39115 12.9248 3.61768L13.9999 4.99998"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
