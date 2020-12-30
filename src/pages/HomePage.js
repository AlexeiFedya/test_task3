import React, {useState, useCallback} from 'react';
import axios from "axios";
import './home-page.scss'
import {Loader} from '../component/loader/loader'

export const HomePage = () => {

    const [loading, setLoading] = useState(false)

    const logoutHandler = useCallback (async () => {
        setLoading(true)
        try {
            const firstUrl = "https://www.balldontlie.io/api/v1/players/237";
            const secondUrl = "https://www.balldontlie.io/api/v1/teams/14";

            const response = await axios.all([
                axios.get(firstUrl),
                axios.get(secondUrl)
            ]);

            const status_first_response = response[0].statusText
            const status_second_response = response[1].statusText

            if (!status_first_response && !status_second_response){
                throw new Error('Something was wrong')
            }
            setLoading(false)

            return console.log("Оба ответа получены")

        } catch(e) {
            setLoading(false)
            throw e
        }
    },[])
    

    return (
        <>
            {loading ? <Loader/> : ""}
            <main className="home-page">
                <button 
                    className="home-page__button"
                    disabled={loading}
                    onClick={logoutHandler}> 
                    Send a request 
                </button>
            </main>
        </>
    );
}


