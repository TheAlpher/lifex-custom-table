import React, { useState } from "react";
import { CustomTable } from "custom-table-react";
export const Testfields = () => {
  const [rowsCount, setRowsCount] = useState(2);
  const [columnCount, setColumnCount] = useState(2);
  const [headers, setHeaders] = useState();
  const [columnsWidth, setColumnsWidth] = useState();
  const [tableData, setTableData] = useState();
  const [tableStyle, setTableStyle] = useState(
    '{"width":"100px","marginTop":"3%"}'
  );
  const [isEditable, setEditable] = useState(false);
  const [isValid, setValid] = useState(false);
  const [tableProps, setTableProps] = useState({});

  const updateTableProps = () => {
    setValid(false);
    try {
      let newPropObj = {};
      newPropObj.rows = Number(rowsCount);
      newPropObj.columns = Number(columnCount);
      newPropObj.editable = isEditable;
      if (headers) newPropObj.headers = JSON.parse(headers);

      if (columnsWidth) newPropObj.columnsWidth = JSON.parse(columnsWidth);
      if (tableData) newPropObj.data = JSON.parse(tableData);
      if (tableStyle) newPropObj.style = JSON.parse(tableStyle);
      setTableProps(newPropObj);
      setValid(true);
    } catch (e) {
      console.error(e);
      alert("Invalid field Values");
    }
  };
  return (
        <div className="container">
        <div className="fields_wrapper">
        <div className="fields_row">


        <div className="fields_col"><p>Rows :</p>
      <input
        aria-label="Rows Count"
        type="number"
        min={0}
        value={rowsCount}
        onChange={(e) => setRowsCount(e.target.value)}
      /></div>
        <div className="fields_col">
      <p>Columns :</p>
      <input
        aria-label="column Count"
        type="number"
        min={0}
        value={columnCount}
        onChange={(e) => setColumnCount(e.target.value)}
      /></div>
   <div className="fields_col">
      <p>Headers :</p>
      <textarea
        aria-label="Headers"
        type="textarea"
        value={headers}
        placeholder='["Header1","Header2",72,"Header4"]'
        onChange={(e) => setHeaders(e.target.value)}
      /></div>
  <div className="fields_col">
      <p>Columns Width :</p>
      <textarea
        aria-label="Columns Width"
        type="textarea"
        placeholder='[60,20,10,10]'
        value={columnsWidth}
        onChange={(e) => setColumnsWidth(e.target.value)}
      />{" "}
</div>
  <div className="fields_col">      <p>Data :</p>
      <textarea
        aria-label="Data"
        type="textarea"
        placeholder='[["Row1_Cell1","Row1_Cell2","Row1_Cell3"],["Row2_Cell1","Row2_Cell2",746]]'
        value={tableData}
        onChange={(e) => setTableData(e.target.value)}
      />
</div>

  <div className="fields_col">
      <p>Table Styling : <br/> (Camel Case)</p>
      <textarea
        aria-label="data"
        type="textarea"
        value={tableStyle}
        onChange={(e) => setTableStyle(e.target.value)}
      />
</div>

     </div>
     <div className="editable_wrapper">  <p>Editable :&nbsp;&nbsp;</p>
      <input
        type="checkbox"
        value={isEditable}
        onChange={(e) => setEditable(e.target.checked)}
      />
      </div>
    
      <button className="generate_table_btn" onClick={updateTableProps}>Generate Table</button>
 
      <div className="table_container">
      {isValid ? (
        <CustomTable
          border="1"
          style={tableProps.style}
          editable={tableProps.editable}
          rows={tableProps.rows}
          columns={tableProps.columns}
          headers={tableProps.headers}
          columnsWidth={tableProps.columnsWidth}
          data={tableProps.data}
        />
      ) : (
        <p className="table_placeholder">Click the button above to generate table</p>
      )}
      </div>
      </div>
      
      </div>
  );
};
