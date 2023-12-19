import { useNavigation as _useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/core/lib/typescript/src/types';
import { ScreenParamList } from '../navigation.types';

export const useNavigation = () =>
  _useNavigation<NavigationProp<ScreenParamList>>();
