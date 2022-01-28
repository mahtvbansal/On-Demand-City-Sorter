import React, { useState } from "react";
import Output from "./Output";
import { useSelector } from "react-redux";
import { Category } from "./Category";
import SubCategory from "./SubCategory";

const Input = () => {
  const [data, setData] = useState([]);
  const [numOfCities, setNumOfCities] = useState(0);
  const [maxRent, setMaxRent] = useState(0);
  const [result, setResult] = useState([]);

  const category_Array = useSelector((state) => state.category_Array);
  const subCategory_Array = useSelector((state) => state.subCategory_Array);
  const numOfCat = useSelector(state => state.numOfCat);
  const numOfSubCat = useSelector(state => state.numOfSubCat);

  
  function convertComb(comb) {
    let temp = { Places: [], total_Rent: 0 };
    comb.forEach((element) => {
      temp.Places.push(element.Place);
    });
    temp.total_Rent = rentSum(comb);

    return temp;
  }

  function rentSum(comb) {
    let rentSum = 0;
    comb.forEach((element) => {
      rentSum += Number(element.Monthly_Rent);
    });
    return rentSum;
  }

  function checkCategories(cities) {
    let flag = true;
    for (let i = 0; i < category_Array.length; i++) {
      let number = 0;
      cities.forEach((city) => {
        if (city.Category === category_Array[i].cat_name) {
          number = number + 1;
        }
      });
      if (!(number >= Number(category_Array[i].min_cities) &&
          number <= Number(category_Array[i].max_cities))) {
            return false
          };
    }
    return flag;
  }

  const checkSubCategories = (cities) => {
    let flag = true;
    for (let i = 0; i < subCategory_Array.length; i++) {
      let number = 0;
      cities.forEach((city) => {
        if (city.Sub_Category === subCategory_Array[i].subCat_name) {
          number = number + 1;
        }
      });
      if (!( number >= Number(subCategory_Array[i].min_cities) && number <= Number(subCategory_Array[i].max_cities)))
        return false;
    }
    return flag;
  };

  const combinations = ( Data, comb, start, index, numOfCities, maxRent, ans ) => {
    if (rentSum(comb) > maxRent) {
      return ans;
    }

    if(ans.length > 500){
      alert("You can only see maximum of 500 combinations");
      return ans;
    }

    if (index === numOfCities) {
      if (numOfCat > 0 && !checkCategories(comb)) return ans;
      if (numOfSubCat > 0 && !checkSubCategories(comb)) return ans;

      ans.push(convertComb(comb));
      return ans;
    }

    for ( let i = start; i < Data.length && index <= Data.length - numOfCities; i++) {
      comb[index] = Data[i];
      combinations( Data, comb, i + 1, index + 1, numOfCities, maxRent, ans );
    }

    return ans;
  };

  const showResult = () => {
    setResult([]);
    if (data && numOfCities && maxRent) {

      let ans = [];
      const Data = JSON.parse(data);
      let AnswerArray = combinations(Data,  [],  0,  0,  Number(numOfCities),  Number(maxRent),  ans);
      setResult(AnswerArray);
      console.log(AnswerArray);
    } else {
      alert("Please fill the data properly");
    }
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="heading">INPUT</h1>

        <div className="input__container">
          <h4>Enter Your Data in json Format</h4>
          <div className="mb-3 input__fields">
            <textarea
              className="form-control"
              id="jsonInput"
              rows="8"
              onChange={(ev) => {setData(ev.target.value)}} value={data}></textarea>
          </div>
        </div>

        <div className="mb-3 input__container">
          <h4>Enter Number of cities required</h4>
          <div className="input__fields">
            <input type="number" id="numOfCities" className="form-control" onChange={(en) => {setNumOfCities(en.target.value)}} value={numOfCities}/>
          </div>
        </div>

        <div className="mb-3 input__container">
          <h4>Enter Maximum Rent</h4>
          <div className="input__fields">
            <input type="number" id="maxRent" className="form-control" onChange={(et) => {setMaxRent(et.target.value)}}  value={maxRent}/>
          </div>
        </div>

        <Category />

        <SubCategory />

        <div className="result_button">
          <button type="button" className="btn btn-primary" onClick={showResult}>
            Show result
          </button>
        </div>
      </div>
      <hr></hr>

      <Output result={result} />
    </>
  );
};

export default Input;
