import axios from 'react-native-axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

async function getListsAll() {
  try {
    const response = await axios.get(`http://dev.4all.com:3003/tarefa`, config);
    return response.data
  } catch (error) {
    console.log('ops deu erro', error)
    console.error(error);
  }
}

export const requisitionsService = {
  getListsAll,
};
