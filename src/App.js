import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
function App() {
  const [params, setParams] = useState({})
  const { jobs, loading, error } = useFetchJobs(params, page)

  return (
    <Container>
      {loading && <h1>loading..</h1> }
      {error && <h1>Error. Try refreshing.</h1> }
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
