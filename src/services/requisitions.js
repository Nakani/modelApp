import axios from 'react-native-axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

// async function getListsAll() {
//   try {
//     const response = await axios.get(`http://dev.4all.com:3003/tarefa`, config);
//     const listArray = []
//     response.data.lista.map(list => {
//       listArray.push({
//         list
//       })
//     })
//     return listArray
//   } catch (error) {
//     console.log('ops deu erro', error)
//     console.error(error);
//   }
// }

async function getListsAll() {
  try {
    const response = await axios.get(`http://dev.4all.com:3003/tarefa`, config)
    const listArray = []
    axios.all(response.data.lista.map(function (result) {
      // const resultServer = axios.get('http://dev.4all.com:3003/tarefa/' + result)
      //   .then(function (response) {
      //     resolve(response.data)
      //   })
      // listArray.push({
      //   resultServer
      // })
      // let resultServer = new Promise((resolve, reject) => {
      //   axios.get('http://dev.4all.com:3003/tarefa/' + result)
      //     .then(response => {
      //       resolve(
      //         listArray.push({
      //           data: response.data
      //         })
      //       )
      //     })
      //     .catch(response => {
      //       reject("Erro! " + response)
      //     })
      // })
      new Promise((resolve, reject) => {
        fetch('http://dev.4all.com:3003/tarefa/' + result)
          .then(response => {
            resolve(response.json().then(data => (
              data
            )))
          })
          .catch(response => {
            reject("Api call failed!" + response)
          })
      })
        .then(response => {
          listArray.push({
            response
          })
        })
        .catch(response => {
          console.log('error: ' + response)
        })
    }))

    return listArray
  }
  catch (error) {
    console.log(error)
  }
}

// class Devlob {
//   get(url) {
//     let promise = new Promise((resolve, reject) => {
//       fetch('http://dev.4all.com:3003/tarefa/' + result)
//         .then(response => {
//           resolve(response.json().then(data => (
//             data.results
//           )))
//         })
//         .catch(response => {
//           reject(“Api call failed!”)
//         })
//     })
//       .then(response => {
//         console.log(response)
//       })
//       .catch(response => {
//         console.log('error: ' + response)
//       })
//   }
// }

async function getDetailList(id) {
  try {
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
