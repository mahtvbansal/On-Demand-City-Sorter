import React, { useState } from "react";
// import Spinner from "./Spinner";
// import { combinations, result } from "./Function.js";
import LoadingBar from 'react-top-loading-bar'

const Input = () => {

    const [result, setResult] = useState([]);
    const [data, setData] = useState([]);
    const [numOfCities, setNumOfCities] = useState(0);
    const [maxRent, setMaxRent] = useState(0);
    const [numOfCat, setNumOfCat] = useState(0);
    const [category_Array, setCategory_Array] = useState([]);
    const [category_Input, setCategory_Input] = useState([]);
    const [numOfSubCat, setNumOfSubCat] = useState(0);
    const [subCategory_Array, setSubCategory_Array] = useState([]);
    const [subCategory_Input, setSubCategory_Input] = useState([]);
    const [progress, setProgress] = useState(0)
    // const [loading, setLoading] = useState(false);

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

    const handleCat = (cities) => {
      let flag = true;
      for(let i=0; i<category_Array.length; i++) {
          let number = 0;
          cities.forEach(city =>{
              if(city.Category === category_Array[i].cat_name){
                  number = number + 1;
              }
          })
          if(number >= Number(category_Array[i].min_cities) && number <= Number(category_Array[i].max_cities)){
              
          }else{
              flag =false;
              return flag;
          }
      }
      return flag;
    }

    const handleCatMax = (cities) => {
      let flag = true;
      for(let i=0; i<category_Array.length; i++) {
          let number = 0;
          cities.forEach(city =>{
              if(city.Category === category_Array[i].cat_name){
                  number = number + 1;
              }
          })
          if(number <= Number(category_Array[i].max_cities)){
              
          }else{
              flag =false;
              return flag;
          }
      }
      return flag;
    }

    const handleSubCat = (cities) => {
      let flag = true;
      for(let i=0; i<subCategory_Array.length; i++) {
          let number = 0;
          cities.forEach(city =>{
              if(city.Sub_Category === subCategory_Array[i].subCat_name){
                  number = number + 1;
              }
          })
          if(number >= Number(subCategory_Array[i].min_cities) && number <= Number(subCategory_Array[i].max_cities)){
              
          }else{
              flag =false;
              return flag;
          }
      }

      return flag;
    }

    const handleSubCatMax = (cities) => {
      let flag = true;
      for(let i=0; i<subCategory_Array.length; i++) {
          let number = 0;
          cities.forEach(city =>{
              if(city.Sub_Category === subCategory_Array[i].subCat_name){
                  number = number + 1;
              }
          })
          if(number <= Number(subCategory_Array[i].max_cities)){
              
          }else{
              flag =false;
              return flag;
          }
      }
      return flag;
    }

    const combinations = (elements , k, max_Rent, temp_Result) => {

      // setLoading(true);

      const keepGoing = (elem) => {
        if(elem.length === k){
            return false;
        }
        return true;
      }
    // const combinations = (elements , elements_length, index, temp_Result, combWithDetail, start) => {
        

        // if(index === Number(numOfCities)){

        //   console.log("combWithDetail");

        //   let temp = {Places : [], Total_Rent: 0};

        //   if(rentSum(combWithDetail) <= Number(maxRent)){
        //     if(Number(numOfCat) + Number(numOfSubCat) === 0){
        //         temp.Places = cityNames(combWithDetail);
        //         temp.Total_Rent = rentSum(combWithDetail);
        //         temp_Result.push(temp);
        //     }
        //     else if(Number(numOfSubCat) === 0 && handleCat(combWithDetail)){
        //         temp.Places = cityNames(combWithDetail);
        //         temp.Total_Rent = rentSum(combWithDetail);
        //         temp_Result.push(temp);
        //     }
        //     else if(Number(numOfCat) === 0 && handleSubCat(combWithDetail)){
        //         temp.Places = cityNames(combWithDetail);
        //         temp.Total_Rent = rentSum(combWithDetail);
        //         temp_Result.push(temp);
        //     }
        //     else if(handleSubCat(combWithDetail) && handleCat(combWithDetail)){
        //         temp.Places = cityNames(combWithDetail);
        //         temp.Total_Rent = rentSum(combWithDetail);
        //         temp_Result.push(temp);
        //     }
        //   }
        //   return;
        // }

        // if(i >= elements_length){
        //     return;
        // }
        // for(let i = start; i<= elements_length - 1 && ((elements_length - 1)-i+1 >= Number(numOfCities) - index); i++ ){
        //     combWithDetail[index] = elements[i];
        //     combinations(elements , elements_length, index+1, temp_Result, combWithDetail, i+1);
        // }
        
        // combWithDetail[index] = elements[i];
        // combinations(elements , elements_length, index+1, temp_Result, i+1, combWithDetail);

        // combinations(elements , elements_length, index, temp_Result, i+1, combWithDetail);

        // setResult(temp_Result);


        if(elements.length === 0)
                return [[]];
            
        const firstEl = elements[0];
        const rest = elements.slice(1);
    
        const combsWithoutFirst = combinations(rest, k, max_Rent, temp_Result);
        const combsWithFirst = [];
        
        combsWithoutFirst.forEach(comb =>{

            // let count = 0;
            // if(count <= 1000){
            //   alert("Your result has more than 1000 combinations & first 1000 combinations are shown");
            //   setResult(temp_Result);
            //   return ;
            // }
    
            let temp = {Places : [], Total_Rent: 0};
    
            let combWithDetail = [...comb, firstEl];
            if(!keepGoing(combWithDetail) && rentSum(combWithDetail) <= max_Rent){
                if(Number(numOfCat) + Number(numOfSubCat) === 0){
                  temp.Places = cityNames(combWithDetail);
                  temp.Total_Rent = rentSum(combWithDetail);
                  if(temp_Result.length <= 1000){
                    temp_Result.push(temp);
                  } else return [];
                  console.log("pushed");
              }
              else if(Number(numOfSubCat) === 0 && handleCat(combWithDetail)){
                  temp.Places = cityNames(combWithDetail);
                  temp.Total_Rent = rentSum(combWithDetail);
                  temp_Result.push(temp);
                  console.log("pushed");
              }
              else if(Number(numOfCat) === 0 && handleSubCat(combWithDetail)){
                  temp.Places = cityNames(combWithDetail);
                  temp.Total_Rent = rentSum(combWithDetail);
                  temp_Result.push(temp);
                  console.log("pushed");
              }
              else if(handleSubCat(combWithDetail) && handleCat(combWithDetail)){
                  temp.Places = cityNames(combWithDetail);
                  temp.Total_Rent = rentSum(combWithDetail);
                  temp_Result.push(temp);
                  console.log("pushed");
              }
            }
            else if(keepGoing(combWithDetail && rentSum(combWithDetail) <= max_Rent)){
              if(Number(numOfCat) + Number(numOfSubCat) === 0){
                combsWithFirst.push(combWithDetail);
              }
              else if(Number(numOfSubCat) === 0 && handleCatMax(combWithDetail)){
                combsWithFirst.push(combWithDetail);
              }
              else if(Number(numOfCat) === 0 && handleSubCatMax(combWithDetail)){
                combsWithFirst.push(combWithDetail);
              }
              else if(handleSubCatMax(combWithDetail) && handleCatMax(combWithDetail)){
                combsWithFirst.push(combWithDetail);
              }
            }
        });
        setResult(temp_Result);
        if( temp_Result.length >= 500){
          console.log("first return");
          return [];
        }else
        return [ ...combsWithoutFirst, ...combsWithFirst ];
    }

    const showResult = () => {
      setProgress(progress +10);
      setResult([]);
      // setLoading(false);
      if (data && numOfCities && maxRent) {
          
          
          let tempResult = [];
          setProgress(progress +25);
          // let combWithDetail = new Array(Number(numOfCities));
          const table = JSON.parse(data);
          console.log(table.length);
          setProgress(progress +40);
          // combinations(table, table.length, 0, tempResult, combWithDetail, 0);
          let comb_Array = combinations(table, Number(numOfCities), Number(maxRent), tempResult);
          setProgress(progress +70);
          if(comb_Array.length === 0){
            alert("Your result has more than 500 combinations");
          }
          console.log("result");
      } else {
        alert("Please fill the data properly");
      }
      setProgress(100);
      // setLoading(false);
      // console.log(result);
    };

  const makeCategoryInputArray = (k) => {
      let categoryInputArray = [];
      let tempCategoryArray =[];
    for(let i=0; i<k; i++) {
        let categoryObject = {id: i, cat_name: "", min_cities: '', max_cities: ''};
        let categoryInputObject = {id: i};
        // categoryArray.push(categoryObject);
        categoryInputArray.push(categoryInputObject);
        tempCategoryArray.push(categoryObject);
    }
    setCategory_Array(tempCategoryArray);
    return categoryInputArray;
  }

  const handleEnterCategories = ()=>{
    setCategory_Input(makeCategoryInputArray(Number(numOfCat))) ;
  }

  const makeSubCategoryInputArray = (k) => {
    let SubcategoryInputArray = [];
    let tempSubCategoryArray =[];
    for(let i=0; i<k; i++) {
      let SubcategoryObject = {id: i, subCat_name: "", min_cities: '', max_cities: ''};
      let SubcategoryInputObject = {id: i};
      // categoryArray.push(categoryObject);
      SubcategoryInputArray.push(SubcategoryInputObject);
      tempSubCategoryArray.push(SubcategoryObject);
    }
    setSubCategory_Array(tempSubCategoryArray);   
    return SubcategoryInputArray;
  }

  const handleEnterSubCategories = ()=>{
    setSubCategory_Input(makeSubCategoryInputArray(Number(numOfSubCat)));
  }

  return (
    <>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container my-3">
        <h1 className="heading">INPUT</h1>

        <div className="input__container">
          <h4>Enter Your Data in json Format</h4>
          <div className="mb-3 input__fields">
            <textarea
              className="form-control"
              id="jsonInput"
              rows="8"
              onChange={(ev) => {
                setData(ev.target.value);
              }}
              value={data}
            ></textarea>
          </div>
        </div>
  
        <div className="mb-3 input__container">
         <h4>Enter Number of cities required</h4>
          <div className="input__fields">
            <input
              type="number" id="numOfCities" className="form-control"
              onChange={(en) => {
                setNumOfCities(en.target.value);
              }}
              value={numOfCities}
            />
          </div>
        </div>
  
        <div className="mb-3 input__container">
         <h4>Enter Maximum Rent</h4>
          <div className="input__fields">
            <input
              type="number"
              id="maxRent"
              className="form-control"
              onChange={(et) => {
                setMaxRent(et.target.value);
              }}
              value={maxRent}
            />
          </div>
        </div>
        
        <div className="enter_category input__container">
          <h4>Enter Total number of categories</h4>
            <div className="mb-3 input__fields flex_cat">
                <input type="number" className="form-control" value={numOfCat} onChange={(e)=>{setNumOfCat(e.target.value)}} />
                <button type="button" className="btn btn-primary" onClick={handleEnterCategories} >Enter</button>
            </div>   
            {(numOfCat !== 0) &&
              <div className="tables">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Category Name</th>
                    <th scope="col">Minimum</th>
                    {/* <th scope="col">Last</th> */}
                    <th scope="col">Maximum</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category_Input.map((elem)=>{
                            return (
                                <tr key={elem.id}>
                                    <th scope="row"><input type="text" name="cat_name" className="form-control" 
                                    value={category_Array[elem.id].cat_name} 
                                    onChange={(e)=>{ 
                                        let tempCategoryInput = [...category_Array];
                                        tempCategoryInput[elem.id].cat_name = e.target.value;
                                        setCategory_Array(tempCategoryInput);
                                        // setCategory_Array([...category_Array, {...category_Array[elem.id] , cat_name: e.target.value}]);
                                    }} 
                                    placeholder="Name" /></th>

                                    <td><input type="text" name="min_cities" className="form-control" 
                                    value={category_Array[elem.id].min_cities} 
                                    onChange={(e)=>{ 
                                        let tempCategory_Input = [...category_Array];
                                        tempCategory_Input[elem.id].min_cities = e.target.value;
                                        setCategory_Array(tempCategory_Input);
                                        // setCategory_Array([...category_Array, {...category_Array[elem.id] , min_cities: e.target.value}]);
                                    }} 
                                    placeholder="Min" /></td>

                                    <td><input type="text" name="max_cities" className="form-control" 
                                    value={category_Array[elem.id].max_cities} 
                                    onChange={(e)=>{ 
                                        let temp_Category_Input = [...category_Array];
                                        temp_Category_Input[elem.id].max_cities = e.target.value;
                                        setCategory_Array(temp_Category_Input);
                                        // setCategory_Array([...category_Array, {...category_Array[elem.id] , max_cities: e.target.value}]);
                                    }} 
                                    placeholder="Max" /></td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
              </table>
            </div>
            }
        </div>
        
        <div className="enter_subcategory input__container">
         <h4>Enter Total number of Sub-categories</h4>
            <div className="mb-3 input__fields flex_cat">
                <input type="number" value={numOfSubCat} onChange={(e)=>{setNumOfSubCat(e.target.value)}} className="form-control"/>
                <button type="button" className="btn btn-primary" onClick={handleEnterSubCategories} >Enter</button>
            </div>   
            {(numOfSubCat !== 0) &&
              <div className="tables">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Sub-category Name</th>
                    <th scope="col">Minimum</th>
                    {/* <th scope="col">Last</th> */}
                    <th scope="col">Maximum</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      subCategory_Input.map((elem)=>{
                          return (
                              <tr key={elem.id}>
                                  <th scope="row"><input type="text" className="form-control" 
                                  value={subCategory_Array[elem.id].subCat_name} 
                                  onChange={(e)=>{ 
                                      let tempSubCategoryInput = [...subCategory_Array];
                                      tempSubCategoryInput[elem.id].subCat_name = e.target.value;
                                      setSubCategory_Array(tempSubCategoryInput);
                                  }} 
                                  placeholder="Name" /></th>

                                  <td><input type="text" className="form-control" 
                                  value={subCategory_Array[elem.id].min_cities} 
                                  onChange={(e)=>{ 
                                      let tempSubCategoryInput = [...subCategory_Array];
                                      tempSubCategoryInput[elem.id].min_cities = e.target.value;
                                      setSubCategory_Array(tempSubCategoryInput);
                                  }} 
                                  placeholder="Min" /></td>

                                  <td><input type="text" className="form-control" 
                                  value={subCategory_Array[elem.id].max_cities} 
                                  onChange={(e)=>{ 
                                      let tempSubCategoryInput = [...subCategory_Array];
                                      tempSubCategoryInput[elem.id].max_cities = e.target.value;
                                      setSubCategory_Array(tempSubCategoryInput);
                                  }} 
                                  placeholder="Max" /></td> 
                              </tr>
                          )
                      })
                    }
                </tbody>
              </table>
            </div>
            }
        </div>

        <div className="result_button">
          <button
            type="button"
            className="btn btn-primary"
            onClick={showResult}
            href="/output"
          >
            Show result
          </button>
          {/* {loading && <Spinner />} */}
        </div>

      </div>
      <hr></hr>

      <div className="my-3 container">
      <h1 className="heading">OUTPUT</h1>
        <div className="tables">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Places</th>
                {/* <th scope="col">Last</th> */}
                <th scope="col">Total Rent</th>
              </tr>
            </thead>
            <tbody>
              {result.map((Elem) => {
                return (
                  <tr key={Elem.Places}>
                    <th scope="row">{result.indexOf(Elem) + 1}</th>
                    <td>{Elem.Places.toString()}</td>
                    <td>{Elem.Total_Rent}</td>
                  </tr>
                );
              })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Input;
