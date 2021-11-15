// const Data = [
//     {
//         "Place": "Mumbai",
//         "Monthly_Rent": "142000",
//         "Category": "I",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Delhi",
//         "Monthly_Rent": "117000",
//         "Category": "I",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Bangalore",
//         "Monthly_Rent": "110000",
//         "Category": "II",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Hyderabad",
//         "Monthly_Rent": "105000",
//         "Category": "II",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Ahmedabad",
//         "Monthly_Rent": "92000",
//         "Category": "II",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Chennai",
//         "Monthly_Rent": "102000",
//         "Category": "II",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Kolkata",
//         "Monthly_Rent": "99000",
//         "Category": "II",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Gurgaon",
//         "Monthly_Rent": "114000",
//         "Category": "II",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Faridabad",
//         "Monthly_Rent": "90000",
//         "Category": "III",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Surat",
//         "Monthly_Rent": "105000",
//         "Category": "III",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Pune",
//         "Monthly_Rent": "110000",
//         "Category": "III",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Jaipur",
//         "Monthly_Rent": "68000",
//         "Category": "III",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Lucknow",
//         "Monthly_Rent": "50000",
//         "Category": "III",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Kanpur",
//         "Monthly_Rent": "54000",
//         "Category": "III",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Nagpur",
//         "Monthly_Rent": "75000",
//         "Category": "IV",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Indore",
//         "Monthly_Rent": "51000",
//         "Category": "IV",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Thane",
//         "Monthly_Rent": "101000",
//         "Category": "IV",
//         "Sub_Category": "A"
//     },
//     {
//         "Place": "Bhopal",
//         "Monthly_Rent": "85000",
//         "Category": "IV",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Visakhapatnam",
//         "Monthly_Rent": "92000",
//         "Category": "IV",
//         "Sub_Category": "B"
//     },
//     {
//         "Place": "Vadodara",
//         "Monthly_Rent": "119000",
//         "Category": "IV",
//         "Sub_Category": "B"
//     }
// ]

const result = [];


const combinations = (elements , k ) => {
    console.log(result);

    const keepGoing = (elem) => {
        if(elem.length === k){
            return false;
        }
        return true;
    }

    const rentSum = (cities) => {
        let sum = 0;
        cities.forEach(city => {sum = sum + parseInt(city.Monthly_Rent)})
        return sum;
    }

    const cityNames = (cities) => {
        let Names = [];
        cities.forEach(city => {
            Names.push(city.Place);
        })
        return Names;
    }

    if(elements.length === 0)
            return [[]];
        
    const firstEl = elements[0];
    const rest = elements.slice(1);

    const combsWithoutFirst = combinations(rest, k);
    const combsWithFirst = [];
    
    combsWithoutFirst.forEach(comb =>{

        let temp = {Places : [], Total_Rent: 0};

        let combWithDetail = [...comb, firstEl];
        if(keepGoing(combWithDetail)){
            combsWithFirst.push(combWithDetail);
        }else if(rentSum(combWithDetail) <= 350000){ 
            console.log("Hello");
            temp.Places = cityNames(combWithDetail);
            temp.Total_Rent = rentSum(combWithDetail);
            result.push(temp);
        }
    });

    return [ ...combsWithoutFirst, ...combsWithFirst ];
}

// combinations(Data , 5);

export  {result, combinations};