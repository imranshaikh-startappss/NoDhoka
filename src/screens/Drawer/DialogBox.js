import React, { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, StyleSheet, Text } from 'react-native';

const DialogBox = () => {
  const BottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleSheetChange = useCallback(index => {
    console.log(index);
  }, []);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={BottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <View style={styles.contentContainer}>
          <Text>this is BottomSheet content</Text>
        </View>
      </BottomSheet>
    </View>
  );
};
export default DialogBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
