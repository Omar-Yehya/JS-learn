

function checker(NUM){
    if (NUM >=20 && NUM<=30){
        console.log("yes")
    }
    console.log("WRONG")
}




function calculations(a, b){
    const area = a*b;
    const perm= 2*(a+b)
    console.log("area is " + area);
    console.log("perimeter is " + perm);

}

calculations(5,8)

function incomeSplit(salary){
    let year=salary;
    let month= salary/12;
    let week=salary/52
    let biweek= week*2
  
     console.log(`Year:   $${year} 
                 Month:   $${month}
                 Week:   $${week.toFixed(2)}
                 Biweek:   $${biweek.toFixed(2)} `
    );
}
incomeSplit(120000)

const LIST=[1,2,3,4,5,6];
let i=0

while (i<=LIST.length){
    if(LIST[i]%2==0){
    console.log(LIST[i])
    i++
    }
    i++
}

console.log("\t **hello wolrd**" +"\n" +
                "\t       O O" + '\n' +
                '\t      |____|' 
)



