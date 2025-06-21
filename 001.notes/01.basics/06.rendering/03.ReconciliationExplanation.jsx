// ✅ Reconciliation demo using two separate states
import React, { useState } from "react";

const ReconciliationExplanation = () => {
    const [user, setUser] = useState("Prem");
    const [age, setAge] = useState(20);

    return (
        <div style={styles.card}>
            <h2>♻️ Reconciliation Example</h2>
            <p>Name: {user}</p>
            <p>Age: {age}</p>

            <button onClick={() => setUser("React Learner")}>Change Name</button>
            <button onClick={() => setAge(age + 1)}>Increase Age</button>
        </div>
    );
};

const styles = {
    card: {
        border: "2px solid teal",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
        fontFamily: "sans-serif"
    }
};

export default ReconciliationExplanation;

/*
🧠 Jab koi ek state change hoti hai (user ya age),
React compare karta hai old VDOM vs new VDOM.
Sirf wahi DOM part update hota hai jo change hua hai.
Efficient and fast — yehi hai React magic!
*/
