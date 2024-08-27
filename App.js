import { FlatList, StyleSheet, Text, View } from 'react-native';

const Item = ({textAlign, textAlignVertical}) => (
  <Text style={[styles.paragraph, {textAlignVertical: textAlignVertical, textAlign: textAlign}]}>
    textAlignVertical: <Text style={{ fontWeight: 'bold' }}>{ textAlignVertical } </Text>
    {'\n'}
    textAlign: <Text style={{ fontWeight: 'bold' }}>{ textAlign } </Text> 
  </Text>
)

function generateCombinations(list1, list2) {
  const combinations = [];

  for (let item1 of list1) {
    for (let item2 of list2) {
      combinations.push({item1, item2});
    }
  }

  return combinations;
}

export default function App() {
  const textAlignVerticalValues = ['auto', 'top', 'bottom', 'center'];
  const textAlignValues = ['auto', 'center', 'right', 'left', 'justify', undefined];
  const combinations = generateCombinations(textAlignValues, textAlignVerticalValues);

  return (
    <View style={styles.container}>
      <FlatList
        data={combinations}
        renderItem={({item}) => <Item textAlignVertical={item.item2} textAlign={item.item1} />}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#b9b9b9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 10,
    color: '#00f', 
    height: 120, 
    backgroundColor: '#DAF7A6',
    width: 120,
    margin: 5
  },
  header: {
    fonsize: 20,
    marginBottom: 5,
    color: 'black',  
  }
});
