import { createContext, useEffect, useReducer } from "react";
import { get } from "../common/API";

const initialState = {
    loading: false,
    error: null,
    query: "",
    data: [],
    totalCount: 0,
    pages: 0,
    current_page: 1
}

const defaultValue = {
    ...initialState,
    SetValue: (type, payload) => { },
}


export const GitUserContext = createContext({ defaultValue })

const GitUserReducer = (state, action) => {
    switch (action.type) {
        case "START_FETCH":
            return {
                ...state,
                loading: true
            }
        case "SUCCESS_FETCH":
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case "SUCCESS_FETCH_USERS":
            return {
                ...state,
                data: action.payload.data,
                pages: action.payload.pages,
                loading: false,
            }
        case "ERROR_FETCH":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "SET_QUERY":
            return {
                ...state,
                loading: true,
                query: action.payload
            }
        case "SET_PAGE_NUMBER":
            return {
                ...state,
                current_page: action.payload,
            }
        default:
            return state;
    }
}

export const GitUserContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GitUserReducer, initialState)
    const SetValue = (type, payload) => dispatch({ type: type, payload })
    useEffect(() => {
        const handleInit = async () => {
            SetValue("START_FETCH")
            await get("https://api.github.com/users")
                .then((response) => {
                    SetValue("SUCCESS_FETCH", response.data)
                })
                .catch((error) => SetValue("ERROR_FETCH", error.response.data))
        }
        handleInit()
    }, [])

    useEffect(() => {
        const handleSearchUser = async () => {
            let per_page = 100
            SetValue("START_FETCH")
            await get(`https://api.github.com/search/users?q=${state.query}&per_page=${per_page}&page=${state.current_page}`)
                .then((response) => {
                    let count = response.data.total_count;
                    let pages = Math.floor(count / per_page);
                    SetValue("TOTAL_COUNT", count)
                    SetValue("SUCCESS_FETCH_USERS", { data: response.data.items, pages },)
                })
                .catch((error) => SetValue("ERROR_FETCH", error.response.data))
        }
        if (state.query != '') handleSearchUser()
    }, [state.query, state.current_page])

    const value = { ...state, SetValue }
    return (
        <GitUserContext.Provider value={value}>
            {children}
        </GitUserContext.Provider>
    )
}