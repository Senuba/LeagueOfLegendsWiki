import { useState } from "react";
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";
import {campeones} from "../../constants/index"

const useGetCharacters = () => {
    const [todosCampeones, setTodosCampeones] = useLocalStorage("todosCampeones", "");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function getCampeones() {
        try {
        const response = await axios.get(
            campeones
        );
        const result = response.data.results;
        setTodosCampeones(result);
        setLoading(false);
        setError(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    }

    return { todosCampeones, loading, error, getCampeones };
};

export default useGetCharacters;

