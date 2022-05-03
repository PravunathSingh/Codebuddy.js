// level 1

// given code:

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const responseData = await response.json();
  console.log(responseData);
  return responseData;
};

getData();
