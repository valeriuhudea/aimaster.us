import { useReducer, useState } from "react";
import Container from "./container";

export default function Query() {
    const [queries, setqueries] = useState([]);

    const [newQuery, setnewQuery] = useState({
        query: "",
        completed: false,
        runAt: Date.now()
    });

    const fetchQueries = async () => {
        const response = await fetch("/api/query");
        const data = await response.json();
        setqueries(data);
    };

    const saveQuery = async (e) => {
        const response = await fetch("/api/query", {
            method: "POST",
            body: JSON.stringify(newQuery),
            headers: {
                "Content-Type": "application/json",
            },
    });

    const data = await response.json();
    setqueries(data);
    };

    const handleChange = (e) => {
        setnewQuery({
            query: e.target.value,
        });
    };
    const handleQuery = (e) => {
        e.preventDefault();
        saveQuery();
        setnewQuery({
            query: '',
        });
    };

    return (
        <Container className="flex flex-wrap ">
        <div>
            <form className="flex flex-col" onSubmit={handleQuery}>
            <div className="mb-6">
                <label htmlFor="query" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ask</label>
                <input type="text" 
                       id="query"
                       onChange={handleChange}
                       value={newQuery.query} 
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Search for something"
                       required
                />
            </div> 
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" 
                       type="checkbox" 
                       value="" 
                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
                       required 
                />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Go</button>
        </form>
        <ul>
            {queries.map((query) => {
                return (
                    <li style={{ color: `${query.completed ? "green" : "red"}` }}
                        key={query.id}
                    >
                    {query.query}.
                    </li>
                );
            })}
            </ul>
        </div>
        </Container>
    );
}

