import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSubCategoryArray, updateNumOfSubCat } from "../state/Actions/Actions";

const SubCategory = () => {

    const [numOfSubCat, setNumOfSubCat] = useState(0);
    const [subCategory_Array, setSubCategory_Array] = useState([]);

  const dispatch = useDispatch();

  const handleEnterSubCategories = () => {

    dispatch(updateNumOfSubCat(Number(numOfSubCat)));

    let tempSubCategoryArray =[];
    for(let i=0; i<Number(numOfSubCat); i++) {
      let SubcategoryObject = {id: i, subCat_name: "", min_cities: '', max_cities: ''};
      tempSubCategoryArray.push(SubcategoryObject);
    }

    setSubCategory_Array(tempSubCategoryArray);
    dispatch(updateSubCategoryArray(subCategory_Array));
  };

  return (
    <>
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
                    <th scope="col">Maximum</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      subCategory_Array.map((elem)=>{
                          return (
                              <tr key={elem.id}>
                                  <th scope="row"><input type="text" className="form-control" 
                                  value={subCategory_Array[elem.id].subCat_name} 
                                  onChange={(e)=>{ 
                                      let tempSubCategoryInput = [...subCategory_Array];
                                      tempSubCategoryInput[elem.id].subCat_name = e.target.value;
                                      setSubCategory_Array(tempSubCategoryInput);
                                      dispatch(updateSubCategoryArray(subCategory_Array));
                                  }} 
                                  placeholder="Name" /></th>

                                  <td><input type="text" className="form-control" 
                                  value={subCategory_Array[elem.id].min_cities} 
                                  onChange={(e)=>{ 
                                      let tempSubCategoryInput = [...subCategory_Array];
                                      tempSubCategoryInput[elem.id].min_cities = e.target.value;
                                      setSubCategory_Array(tempSubCategoryInput);
                                      dispatch(updateSubCategoryArray(subCategory_Array));
                                  }} 
                                  placeholder="Min" /></td>

                                  <td><input type="text" className="form-control" 
                                  value={subCategory_Array[elem.id].max_cities} 
                                  onChange={(e)=>{ 
                                      let tempSubCategoryInput = [...subCategory_Array];
                                      tempSubCategoryInput[elem.id].max_cities = e.target.value;
                                      setSubCategory_Array(tempSubCategoryInput);
                                      dispatch(updateSubCategoryArray(subCategory_Array));
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
    </>
  );
};

export default SubCategory;
