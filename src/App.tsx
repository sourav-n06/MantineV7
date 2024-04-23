import ReactTable from './components/ReactTable';
import { createTheme, MantineProvider } from '@mantine/core';


function App() {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  
     return (
      <MantineProvider theme={theme}>
        <ReactTable/>
      </MantineProvider>
    );
}

export default App;
