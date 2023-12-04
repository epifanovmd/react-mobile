import { SvgProps } from 'react-native-svg';
import { FlexProps } from '../flexView';

export type FlexSvgProps = FlexProps &
  Omit<SvgProps, 'fontStyle' | 'fontWeight'>;
