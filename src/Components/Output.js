import React from "react";
import {result} from "./Function.js"

// console.log(result);

// const resultyy = [{
//     Places: [ 'Bhopal', 'Thane', 'Indore', 'Nagpur', 'Jaipur' ],
//     Total_Rent: 380000
//   },
//   {
//     Places: [ 'Visakhapatnam', 'Bhopal', 'Thane', 'Kanpur', 'Jaipur' ],
//     Total_Rent: 400000
//   },
//   {
//     Places: [ 'Vadodara', 'Visakhapatnam', 'Indore', 'Kanpur', 'Jaipur' ],
//     Total_Rent: 384000
//   },
//   {
//     Places: [ 'Vadodara', 'Bhopal', 'Indore', 'Kanpur', 'Jaipur' ],
//     Total_Rent: 377000
//   },
//   {
//     Places: [ 'Visakhapatnam', 'Bhopal', 'Indore', 'Kanpur', 'Jaipur' ],
//     Total_Rent: 350000
//   },
//   {
//     Places: [ 'Vadodara', 'Thane', 'Indore', 'Kanpur', 'Jaipur' ],
//     Total_Rent: 393000
//   },
//   {
//     Places: [ 'Visakhapatnam', 'Thane', 'Indore', 'Kanpur', 'Jaipur' ],
//     Total_Rent: 366000
//   }];


const Output = () => {
  return (
    <div>
      <div className="container my-3">
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

              {
                  result.map((Elem) => {
                      return(
                        <tr>
                            <th scope="row">{result.indexOf(Elem) + 1}</th>
                            <td>{Elem.Places.toString()}</td>
                            <td>{Elem.Total_Rent}</td>
                        </tr>
                      )
                  })
              }
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>@mdo</td>
            </tr> */}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Output;
