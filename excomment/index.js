const { exec } = require('child_process');

function component() {
  console.log('!!!!!!!!----------------from index.js')

  if(process.env.GITHUB_ACCESS_TOKEN !== undefined){
    console.log('Github access token : set' );
  }else{;
    console.log('Github access token : not set' )
  }


  let myoutput = 'SOMEOUTPUTHERE'
  exec(`echo "index-output=${myoutput}" >> $GITHUB_OUTPUT`);




  function Test() {
    return 'hello from Test'
  }

  return {
    "string": "hello from component",
    "Test": Test
  }
}


component()

