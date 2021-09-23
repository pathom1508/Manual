import React, { Component } from 'react'
import { useState } from 'react'
import {Drawer} from '../component/Drawer'
import ManualPost from '../component/manaualpost'
import ManualDetail from '../component/manual-detail'
import ManualItem from '../component/manualitem'
import manuals from '../data/manuals'
function App() {
    const [selectManual, setSelectManual] = useState(null) 
        const manualElemants = manuals.map((manual, index) => {
            return <ManualItem key={index} manual={manual}/>
        });
 
        let manualPost = null;
        if (!!selectManual) {
            manualPost = <ManualPost/>
        }
    return (
        <div>
        {manualElemants}
     </div> 
    )
}
export default App 