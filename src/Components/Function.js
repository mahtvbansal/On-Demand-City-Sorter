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

function convertComb(comb){
    let temp = {Places: [], total_Rent: 0};
    comb.forEach(element => {
        temp.Places.push(element.Place);
    });
    temp.total_Rent = rentSum(comb);

    return temp;
}

function rentSum(comb){
    let rentSum = 0;
    comb.forEach(element => {
        rentSum += Number(element.Monthly_Rent);
    });
    return rentSum;
}

function checkCategories(cities, category_Array){
    let flag = true;
    for(let i=0; i < category_Array.length; i++) {
        let number = 0;
        cities.forEach(city =>{
            if(city.Category === category_Array[i].cat_name){
                number = number + 1;
            }
        })
        if(!(number >= Number(category_Array[i].min_cities) && number <= Number(category_Array[i].max_cities)))
           return false; 
    }
    return flag;
}

const checkSubCategories = (cities, subCategory_Array) => {
    let flag = true;
    for(let i=0; i<subCategory_Array.length; i++) {
        let number = 0;
        cities.forEach(city =>{
            if(city.Sub_Category === subCategory_Array[i].subCat_name){
                number = number + 1;
            }
        })
        if(!(number >= Number(subCategory_Array[i].min_cities) && number <= Number(subCategory_Array[i].max_cities)))
            return false;
    }

    return flag;
}


export const combinations = (Data, comb, start, index, numOfCities, maxRent, category_Array, subCategory_Array, ans ) => {
    if(rentSum(comb) > maxRent){
        return ans;
    }

    if(!checkCategories(comb, category_Array)) return ans;
    if(!checkSubCategories(comb, subCategory_Array)) return ans;

    if (index === numOfCities){
        ans.push(convertComb(comb));
        console.log("ans");
        return ans;
    }

    for (let i=start; i<Data.length && index <= Data.length - numOfCities; i++){   
        comb[index] = Data[i];
        combinations(Data, comb, i+1, index+1, numOfCities, category_Array, subCategory_Array, maxRent, ans);
    }

    return ans
}

// export const AllCombs = () =>{
//     let ans = [];
//     const Data = JSON.parse(data);
//     return combinations(Data, [], 0, 0, Number(numOfCities), Number(maxRent), ans);
// }