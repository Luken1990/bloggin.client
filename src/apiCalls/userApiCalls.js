const postData = async (url = '', optionsObj = null) => {
  return await fetch(url, optionsObj).then((response) => response.json());
};


const token = JSON.parse(sessionStorage.getItem('token'));

export const editUserInfo = (url, data) => {
  const putOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  };

  postData(url, putOptions)
    .then((data) => console.log(JSON.stringify(data)))
    .catch((err) => console.log(err));
};


export const getAuthor = (url) => {
  const putOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  postData(url, putOptions)
    .then((data) => console.log(JSON.stringify(data)))
    .catch((err) => console.log(err));
};
