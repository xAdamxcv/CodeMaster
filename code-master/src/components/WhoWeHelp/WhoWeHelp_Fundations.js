import { useState } from "react"
import arr from "./obj"

let WhoWeHelp_Fundactions = () =>{

  
    let fundacje = arr[0]
    let organization = arr[1]
    let lokal = arr[2]

    

    let [posts,setPosts]= useState(fundacje)
    let [currentPage, setCurrentPage] = useState(1)
    let [postsPerPage, setPostsPerPage] = useState(3)
    let [display, setDispaly] = useState("flex")




    let handleClikFundacje = () => {
        setPosts(fundacje)
        setDispaly("flex")
    }
    let handleClikOrganization = () => {
        setPosts(organization)
        setDispaly("flex")
    }
    let handleClikLokal = () => {
        setPosts(lokal)
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
                            <div key={5} className="Box-A">
                                <p key={1}>Fundacja{`${el.fundacja}`}</p>
                                <a key={2}>Cel i misja:{`${el.cel}`}</a>
                            </div>
                            <div key={3} className="Box-B">
                                <p key={4}>{`${el.asortyment}`}</p>
                            </div>
                        </>
                    )
                })}
                <ul style={{width: 100, height: 100}}>
                    
                    {pageNumber.map(function(el){
                       return (
                            <li style={{display: display}}>
                                <a style={{display: display}} onClick={() => paginate(el)}>{el}</a>
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