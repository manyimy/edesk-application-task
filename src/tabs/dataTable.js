import React, { useState } from "react";
import "./dataTable.css";
// import custData from "../res/data.json";

import { 
    Visibility, 
    Edit, 
    Delete, 
    Search, 
    KeyboardDoubleArrowLeft, 
    KeyboardDoubleArrowRight,
    // UnfoldMore,
} from "@mui/icons-material";


function DataTable({resultData}) {
    const [page, setPage] = useState(1);
    const [totalPage] = useState(Math.ceil(resultData.length/5));

    // useEffect(() => {
    //     console.log(resultData);
            
    // }, [selectedKey, resultData]);
    
    const printData = (event, item) => {
        console.log(item);
        let msg = "";
        for (const key in item) {
            console.log(key + " : " + item[key]);
            msg += key + ": " + item[key] + "\n";
        }
        alert(msg);
        event.preventDefault();
    }

    const handleChangePage = (e, page) => {
        setPage(page);
        e.preventDefault();
    }

    return(
        <div className="container text-start">
            <div className="my-3">
                <div className="shadow-sm bg-white p-3">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Customer <b>Details</b></h2></div>
                            <div className="col-sm-4">
                                <div className="search-box">
                                    <Search className="search-icon" />
                                    <input type="text" className="form-control" placeholder="Search&hellip;" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name 
                                    {/* <div className="d-inline"><UnfoldMore fontSize="small"/></div> */}
                                </th>
                                <th>Address</th>
                                <th>City 
                                    {/* <div className="d-inline"><UnfoldMore fontSize="small"/></div> */}
                                </th>
                                <th>Pin Code</th>
                                <th>Country 
                                    {/* <div className="d-inline"><UnfoldMore fontSize="small"/></div> */}
                                </th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {resultData.slice(page*5-5, page*5).map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index+page*5-4}</td>
                                        <td>{item["name"]}</td>
                                        <td>{item["address"]}</td>
                                        <td>{item["city"]}</td>
                                        <td>{item["pinCode"]}</td>
                                        <td>{item["country"]}</td>
                                        <td>
                                            <a href="/#" className="view" title="View" data-toggle="tooltip" onClick={(e) => printData(e, item)}><Visibility /></a>
                                            <a href="/#" className="edit" title="Edit" data-toggle="tooltip"><Edit /></a>
                                            <a href="/#" className="delete" title="Delete" data-toggle="tooltip"><Delete /></a>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">Showing <b>{(resultData.length >= 5) ? (page !== totalPage) ? 5 :  resultData.length%5 : resultData.length%5}</b> out of <b>{resultData.length}</b> entries</div>
                        <ul className="pagination">
                            <li
                              className={`page-item ${page===1 ? "visually-hidden" : ""}`}
                              onClick={() => setPage(page-1)}
                            >
                              <a href="/#">
                                <KeyboardDoubleArrowLeft />
                              </a>
                            </li>
                            {[...Array(totalPage).keys()].map((data, index) => {
                                return (
                                    <li 
                                      className={`page-item ${page===data+1 ? "active" : ""}`} 
                                      onClick={(e) => handleChangePage(e, data+1)}
                                    >
                                        <a href="/#" className="page-link">{data+1}</a>
                                    </li>        
                                );
                            })}
                            {/* <li className="page-item active"><a href="/#" onChange={() => setPage(1)} className="page-link">1</a></li>
                            <li className="page-item"><a href="/#" onChange={() => setPage(2)} className="page-link">2</a></li>
                            <li className="page-item"><a href="/#" className="page-link">3</a></li>
                            <li className="page-item"><a href="/#" className="page-link">4</a></li>
                            <li className="page-item"><a href="/#" className="page-link">5</a></li> */}
                            <li 
                              className={`page-item ${page===totalPage ? "visually-hidden" : ""}`} 
                              onClick={() => setPage(page+1)}
                            >
                              <a href="/#" className="page-link">
                                <KeyboardDoubleArrowRight />
                              </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataTable;