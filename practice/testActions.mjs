import { Actions } from "./Actions.mjs";

function test1() {
    Actions.visitUrl('https://www.techglobalschool.com')
      .then((data) => {
        console.log(data);
        Actions.login('TechGlobal', 'Test1234')
          .then((data)=> {
            console.log(data);
            Actions.validateTitle('Batch11')
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              })
          })
          .catch((err) => {
            console.log(err);
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }
  







async function test3(){
    try{
    const visitMessage = await Actions.visitUrl('www.google.com')
    console.log(visitMessage)

    const visitLogin = await Actions.login('TechGlobal', 'Test1234')
    console.log(visitLogin)

    const visitTitle = await Actions.validateTitle('people')
    console.log(visitTitle)

    }
    catch(err){
        console.log(err)
    }
    
}

