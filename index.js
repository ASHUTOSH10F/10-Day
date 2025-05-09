async function GetData()
{
    try {
        const respose = await fetch("https://dog.ceo/api/breeds/image/random");
        console.log(respose);
        const data = await respose.json();
        console.log(data);

        let img = document.getElementById("dog-image");
        img.src = data.message;
    } catch (error) {
        console.log(error);
    }
}

/*
let obj = {
    Name:"Ashutoosh", 
    Address:"Noida"
}
const {Name,Address} = obj
console.log(obj);
console.log(obj.Name);
console.log(Address);

let array = [10,20,30];
const [One,Two] =array;
console.log(One);

let Num = [10,20,30,40,50,60,"ggg"]
const[Ones,two,Three,...Reaming] = Num;
console.log(Ones);
console.log(Reaming);


let arr = [10,20,30,52,63,55,999,553];
function SerachELe()
{
let Num = prompt("Search The Elements")
let Search = parseInt(Num);
    for(let i= 0; i<=arr.length;i++)
        {
            parseInt(Search)
            if(Search===arr[i])
            {
             console.log(`${Search} Elements Found At index Number ${i}`)   
             break;
            }
            else
            {
                console.log("Elements is not Avilable in Given Array")
            }
        }

}
SerachELe();


let numbers = [10,20,30,40,50];
console.log(numbers);
numbers.splice(0,1,70);
console.log(numbers);

*/




