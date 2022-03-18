import {Routes, Route, useNavigate} from 'react-router-dom'
import Add from './components/Add';
import UploadImage from './components/UploadImage'

function App() {
  return (

    <Routes>
      <Route path='/' element={<Add/>}/>
      <Route path='/upload_image' element={<UploadImage/>}/>
    </Routes>

  );
}

export default App;
