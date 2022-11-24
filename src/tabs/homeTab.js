import React, { useEffect, useState } from 'react';
// import TreeMenu from 'react-simple-tree-menu';
import TreeMenu, { ItemComponent } from 'react-simple-tree-menu';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import '../../node_modules/react-simple-tree-menu/dist/main.css';
import './homeTable.css';

import DataTable from './dataTable';
import custData from '../res/data.json';

function HomeTab() {

  const [selectedKey, setSelectedKey] = useState("");
  const [treeData, setTreeData] = useState([]);
  const [resultData, setResultData] = useState(custData);

  // geometry object structure
  // const list = [
  //   {
  //     name: "country1",
  //     state: [
  //       {
  //         name: "state1",
  //         city: ["city1", "city2"]
  //       },
  //       {
  //         name: "state2",
  //         city: ["city3", "city4"]
  //       }
  //     ]
  //   },
  //   {
  //     name: "country2",
  //     state: [
  //       {
  //         name: "state3",
  //         city: ["city5", "city6"]
  //       }
  //     ]
  //   }
  // ];
  useEffect(() => {
    // get all unique country and state 
    // to form a country->state->city geometry object list
    var countryList = [];
    for (let key in custData) {
      let item = custData[key];
    // custData.forEach((item) => {
      if(!countryList.includes(item["country"])) {
        countryList.push(item["country"]);
      }
    }
    var stateList = [];
    for (let key in custData) {
      let item = custData[key];
      if(!stateList.includes(item["state"])) {
        stateList.push(item["state"]);
      }
    }
    var geoList = [];
    countryList.forEach((country) => {
      let stateObjArr = [];
      stateList.forEach((state) => {
        let cities = [];
        // get all cities in the state
        for (let key in custData.filter(cust => cust.country === country && cust.state === state)) {
          let item = custData[key];
          if(!cities.includes(item["city"])) {
            cities.push(item["city"]);
          }
        }
        if(cities.length !== 0)
        stateObjArr.push({name: state, city: cities});
      });
      // sort second level by city length
      stateObjArr.sort((a, b) => a.city.length > b.city.length ? -1 : 1);
      geoList.push({name: country, state: stateObjArr});
    });
    // sort high level by state length
    geoList.sort((a, b) => a.state.length > b.state.length ? -1 : 1);

    // convert geoList to tree data
    var jsonStr = '[';
    for (let i = 0; i < geoList.length; i++) {
      let country = geoList[i];
      jsonStr += '{';
      jsonStr += '"key":"' + country.name.toLowerCase().replace(/\s+/g, "-") + '",';
      jsonStr += '"label":"' + country.name + '",';
      jsonStr += '"nodes":[';

      for (let j = 0; j < country.state.length; j++) {
        let state = country.state[j];
        jsonStr += '{';
        jsonStr += '"key":"' + state.name.toLowerCase().replace(/\s+/g, "-") + '",';
        jsonStr += '"label":"' + state.name + '",';
        jsonStr += '"nodes":[';

        for (let k = 0; k < state.city.length; k++) {
          let city = state.city[k];
          jsonStr += '{';
          jsonStr += '"key":"' + city.toLowerCase().replace(/\s+/g, "-") + '",';
          jsonStr += '"label":"' + city + '",';
          jsonStr += '"nodes":[]';
          jsonStr += (state.city.length-1 === k) ? '}' : '},';
        }
        jsonStr += ']';
        jsonStr += (country.state.length-1 === j) ? '}' : '},';
      }
      jsonStr += ']';

      jsonStr += (geoList.length-1 === i) ? '}' : '},';
    }
    jsonStr += ']';
    console.log(JSON.parse(jsonStr));
    setTreeData(JSON.parse(jsonStr));
  }, []);

  // get user selected tree structure menu
  const getActiveKey = (e) => {
    setSelectedKey(e.key);
    console.log(e.key);

    let result = [];
    console.log(e.key);
    if(e.key){
        let splitKey = e.key.split('/');
        result = custData.filter(cust => 
            (splitKey.length === 1 ? cust.country :
            splitKey.length === 2 ? cust.state : 
            cust.city).toLowerCase().replace(/\s+/g, "-") === splitKey[splitKey.length-1]);
    } else {
        result = custData;
    }
    console.log(result);
    setResultData(result);
  }

  return (
    <div>
      <div className="row my-3">
        <div className="col text-start">
          <h4>Home Tab.</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-3 text-start">
          <TreeMenu 
            data={treeData}
            debounceTime={125}
            disableKeyboard={false}
            hasSearch={false}
            onClickItem={(e) => getActiveKey(e)}
            resetOpenNodesOnDataUpdate={false}
          >
              {({ items }) => (
                  <ul>
                      {items.map(props => (
                        <ItemComponent {...props} openedIcon={<RemoveIcon />} closedIcon={<AddIcon />} />
                      ))}
                  </ul>
              )}
          </TreeMenu>
        </div>
        <div className="col-9">
          <div className="container bg-light p-2">
            <DataTable selectedKey={selectedKey} resultData={resultData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTab;