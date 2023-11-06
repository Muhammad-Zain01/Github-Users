import { GitUserContext } from "../context/GithubUserContext"
import { useContext } from "react"
export const useGithub = () => useContext(GitUserContext)