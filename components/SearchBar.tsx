import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,

} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps extends Omit<TextInputProps, 'style'> {
  onSearch: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  initialValue?: string;
  autoFocus?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  containerStyle,
  inputStyle,
  placeholder = 'Search...',
  initialValue = '',
  autoFocus = false,
  ...textInputProps
}) => {
  const [searchText, setSearchText] = useState(initialValue);

  const handleClear = () => {
    setSearchText('');
    onSearch('');
  };

  const handleChangeText = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
      <TextInput
        {...textInputProps}
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        value={searchText}
        onChangeText={handleChangeText}
        autoFocus={autoFocus}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {searchText.length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <Ionicons name="close-circle" size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginHorizontal: 10,
    marginVertical: 8,
    height: 44,
  },
  searchIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
  },
  clearButton: {
    padding: 4,
  },
});

export default SearchBar;