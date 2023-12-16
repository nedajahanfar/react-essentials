import { useState } from "react";

import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/coreConcept.jsx";
import TabButton from "./components/TabButton.jsx" ;
import { EXAMPLES } from "./data-with-examples.js";
 

function App() {
  const [selectedTopic, setSelectedTopic]=useState();


  function handleClick(selectedButton){
    setSelectedTopic(selectedButton); 
    console.log(selectedTopic);
   }





  return (
    <div>
     <Header/>
      <main>
        <section id="core-concepts">
          <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem}/>

          ))}
     
          </ul>
        </section>

        <section id="examples">
        <h2>Examples</h2>

          <menu>
         <TabButton isSelected={selectedTopic === "components"}  onSelect={() => handleClick("components")}>components</TabButton>
         <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleClick("jsx")} >JSX</TabButton>
         <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleClick("props")} >props</TabButton>
         <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleClick("state")} >State</TabButton>
         </menu>
 
          {!selectedTopic ? (<p>Plaese select a topic</p>) : 
            ( <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
             <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
            </div>
            )
          
          }


          
        </section>
         </main>

        </div>
  ); 
}

 






export default App;
