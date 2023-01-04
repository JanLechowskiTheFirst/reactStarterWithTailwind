export const ExampleWithProps = (props) => {
    
    const {people, accounts = []} = props; // 1. etc inside {}   2.  accounts = [] makes empty array accounts default value
    return (
        <div>
            {/* you can write Js inside {} */}
            {people}
             <h3>Account list:</h3>
             <div>
                {accounts?.map(account => (<p>{account}</p>))}
            </div>
        </div>
    )
}