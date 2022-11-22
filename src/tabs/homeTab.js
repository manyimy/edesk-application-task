import React, { useState } from 'react';
// import TreeMenu from 'react-simple-tree-menu';
import TreeMenu, { defaultChildren, ItemComponent } from 'react-simple-tree-menu';

import "../../node_modules/react-simple-tree-menu/dist/main.css";

import TreeMenuTable from './treeMenuTable';
import treeData from '../res/treedata.json';


function HomeTab() {
  return (
    <div class="container">
      <div class="row my-3 alig">
        <div class="col-3 text-start">
          <h4>Home Tab.</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <TreeMenu
            data={treeData}
            debounceTime={125}
            disableKeyboard={false}
            hasSearch={false}
            onClickItem={function noRefCheck(){}}
            resetOpenNodesOnDataUpdate={false}
          />
        </div>
        <div class="col-9">
          <div class="container bg-light">
            <TreeMenuTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTab;