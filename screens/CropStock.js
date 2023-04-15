import * as React from 'react';
import {DataTable, Button} from 'react-native-paper';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const optionsPerPage = [2, 3, 4];

const MyComponent = () => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <>
      <DataTable style={{padding: 15, flex: 1}}>
        <Text style={{fontSize: 25, color: 'black'}}>Remaining Crops</Text>
        <DataTable.Header>
          <DataTable.Title>Crop</DataTable.Title>
          <DataTable.Title numeric>Weight(QT)</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>A</DataTable.Cell>
          <DataTable.Cell numeric>159</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>B</DataTable.Cell>
          <DataTable.Cell numeric>237</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Pagination
          page={page}
          numberOfPages={3}
          onPageChange={page => setPage(page)}
          label="1-2 of 6"
          optionsPerPage={optionsPerPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          showFastPagination
          optionsLabel={'Rows per page'}
        />
      </DataTable>

      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
        style={{marginBottom: 20}}>
        Add your Crop
      </Button>
    </>
  );
};

export default MyComponent;
