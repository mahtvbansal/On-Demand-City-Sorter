import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCategoryArray, updateNumOfCat } from "../state/Actions/Actions";

export const Category = () => {
  const [numOfCat, setNumOfCat] = useState(0);
  const [category_Array, setCategory_Array] = useState([]);

  const dispatch = useDispatch();

  const handleEnterCategories = () => {

    dispatch(updateNumOfCat(Number(numOfCat)));

    let tempCategoryArray = [];
    for (let i = 0; i < Number(numOfCat); i++) {
      let categoryObject = {
        id: i,
        cat_name: "",
        min_cities: "",
        max_cities: "",
      };
      tempCategoryArray.push(categoryObject);
    }
    setCategory_Array(tempCategoryArray);
    dispatch(updateCategoryArray(category_Array));
  };

  return (
    <>
      <div className="enter_category input__container">
        <h4>Enter Total number of categories</h4>
        <div className="mb-3 input__fields flex_cat">
          <input
            type="number"
            className="form-control"
            value={numOfCat}
            onChange={(e) => {
              setNumOfCat(e.target.value);
            }}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleEnterCategories}
          >
            Enter
          </button>
        </div>
        {numOfCat !== 0 && (
          <div className="tables">
            <table className="table table-bordered table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Category Name</th>
                  <th scope="col">Minimum</th>
                  <th scope="col">Maximum</th>
                </tr>
              </thead>
              <tbody>
                {category_Array.map((elem) => {
                  return (
                    <tr key={elem.id}>
                      <th scope="row">
                        <input
                          type="text"
                          name="cat_name"
                          className="form-control"
                          value={category_Array[elem.id].cat_name}
                          onChange={(e) => {
                            let tempCategoryInput = [...category_Array];
                            tempCategoryInput[elem.id].cat_name =
                              e.target.value;
                            setCategory_Array(tempCategoryInput);
                            dispatch(updateCategoryArray(category_Array));
                          }}
                          placeholder="Name"
                        />
                      </th>

                      <td>
                        <input
                          type="text"
                          name="min_cities"
                          className="form-control"
                          value={category_Array[elem.id].min_cities}
                          onChange={(e) => {
                            let tempCategory_Input = [...category_Array];
                            tempCategory_Input[elem.id].min_cities =
                              e.target.value;
                            setCategory_Array(tempCategory_Input);
                            dispatch(updateCategoryArray(category_Array));
                          }}
                          placeholder="Min"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          name="max_cities"
                          className="form-control"
                          value={category_Array[elem.id].max_cities}
                          onChange={(e) => {
                            let temp_Category_Input = [...category_Array];
                            temp_Category_Input[elem.id].max_cities =
                              e.target.value;
                            setCategory_Array(temp_Category_Input);
                            dispatch(updateCategoryArray(category_Array));
                          }}
                          placeholder="Max"
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
