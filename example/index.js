
console.log('!!!!!!!!----------------from index.js')

function component() {

  function Test() {
    return 'hello from Test'
  }

  return {
    "string": "hello from component",
    "Test": Test
  }
}


export default component;
