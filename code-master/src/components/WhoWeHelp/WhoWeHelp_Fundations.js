import { useState } from "react"
import arr from "./obj"
import arrText from "./objText"

let WhoWeHelp_Fundactions = () =>{

    
    let fundacje = arr[0]
    let organization = arr[1]
    let lokal = arr[2]

    let fundacjeText = arrText[0]
    let organizationText = arrText[1]
    let lokalText = arrText[2]
    
console.log(arr,arrText)
    let [posts,setPosts]= useState(fundacje)
    let [postText, setPostText] = useState(fundacjeText)
    let [currentPage, setCurrentPage] = useState(1)
    let [postsPerPage, setPostsPerPage] = useState(3)
    let [display, setDispaly] = useState("flex")




    let handleClikFundacje = () => {
        setPosts(fundacje)
         setPostText(fundacjeText)
        setDispaly("flex")
    }
    let handleClikOrganization = () => {
        setPosts(organization)
        setPostText(organizationText)
        setDispaly("flex")
    }
    let handleClikLokal = () => {
        setPosts(lokal)
        setPostText(lokalText)
        setDispaly("none")
    }


   console.log(posts)
    let indexOfLastPost = currentPage * postsPerPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)

    let pageNumber = [];

    for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++){
        pageNumber.push(i)
    }

    let paginate = (pageNumber) => setCurrentPage(pageNumber)

    return(
        <>
        <div className="WhoWeHelp_Text">
            <p>{postText}</p>
        </div>

        <div className="WhoWeHelp_ThreeColumns">
            <div>
                <button onClick={handleClikFundacje}>Fundacjom</button>
            </div>
            <div>
                <button onClick={handleClikOrganization}>Organizacją<br/> pozarządowym</button>
            </div>
            <div>
                <button onClick={handleClikLokal}>Lokalnym zbiórką</button>
            </div>
        </div>

        <div className="WhoWeHelp_Fundactions">
            <div className="WhoWeHelp_Fundactions_Position">
                {currentPost.map(function(el){
                    return(
                        <>
                            <div key={5 * Math.random().toString()} className="Box-A">
                                <p key={5 * Math.random().toString()}>Fundacja{`${el.fundacja}`}</p>
                                <a key={5 * Math.random().toString()}>Cel i misja:{`${el.cel}`}</a>
                            </div>
                            <div key={5 * Math.random().toString()} className="Box-B">
                                <p key={5 * Math.random().toString()}>{`${el.asortyment}`}</p>
                            </div>
                        </>
                    )
                })}
                <ul style={{width: 100, height: 100}}>
                    
                    {pageNumber.map(function(el){
                       return (
                            <li key={5 * Math.random().toString()} style={{display: display}}>
                                <a key={5 * Math.random().toString()} style={{display: display}} onClick={() => paginate(el)}>{el}</a>
                            </li>
                       )
                    })}
                </ul>
            </div> 
            
           
        </div>
        </>
    )
}

export default WhoWeHelp_Fundactions