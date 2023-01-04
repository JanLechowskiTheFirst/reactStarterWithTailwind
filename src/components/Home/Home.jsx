import { toogleClass } from "../../utils";
import { ExampleWithProps } from "../ExampleWithProps";

export const Home = () => {


    //JS here
    const accountsVar = [1, 2, 3, 4 ,5];
    const someValues = ['abc', 'cde', 'dfg'];

    
    return (
        //html + js here
        <div>
            Home
            <ExampleWithProps people={"people value is this string!"} accounts={accountsVar}/>
            <br/>
            <ExampleWithProps people={"different  value of a people as we call same component but with another instantion of it"} accounts={someValues}/>
            <br/>
            <button className="toggleMe" onClick={() => toogleClass(".toggleMe", "bg-sky-600")}>Toggle me!!!!</button>
        </div>
    );
}