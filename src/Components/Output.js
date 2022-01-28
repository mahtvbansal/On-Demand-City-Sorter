import React from "react";

const Output = ({result}) => {
  return (
    <>
      <div className="my-3 container">
      <h1 className="heading">OUTPUT</h1>
        <div className="tables">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Places</th>
                <th scope="col">Total Rent</th>
              </tr>
            </thead>
            <tbody>
              {result.map((Elem) => {
                return (
                  <tr key={Elem.Places}>
                    <th scope="row">{result.indexOf(Elem) + 1}</th>
                    <td>{Elem.Places.toString()}</td>
                    <td>{Elem.total_Rent}</td>
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

export default Output;
