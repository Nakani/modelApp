import axios from 'react-native-axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

async function getListsAll() {
  try {
    const response = await axios.get(`http://dev.4all.com:3003/tarefa`, config);
    const listArray = []
    response.data.lista.map(list => {
      listArray.push({
        list
      })
    })
    return listArray
  } catch (error) {
    console.log('ops deu erro', error)
    console.error(error);
  }
}

async function getDetailList(id) {
  try {
    console.log('requisition', id)
    const response = await axios.get(`http://dev.4all.com:3003/tarefa/${id}`, config);
    return response.data
  } catch (error) {
    console.log('ops deu erro', error)
    console.error(error);
  }
}


export const requisitionsService = {
  getListsAll,
  getDetailList
};
