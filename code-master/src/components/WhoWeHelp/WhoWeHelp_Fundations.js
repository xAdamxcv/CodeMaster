import { useEffect, useState } from "react"
import arr from "./obj"
import arrText from "./objText"

let WhoWeHelp_Fundactions = () =>{

    
    let fundacje = arr[0]
    let organization = arr[1]
    let lokal = arr[2]

    let fundacjeText = arrText[0]
    let organizationText = arrText[1]
    let lokalText = arrText[2]
    
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

    let indexOfLastPost = currentPage * postsPerPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)
    // console.log(currentPost)
    let pageNumber = [];

    for(let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++){
        pageNumber.push(i)
    }

    let paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(()=>{
        let box = document.querySelectorAll(".Boxs")
        box[1].classList.add("Boxs-border")
    },[])

    return(
        <>

            <div className="WhoWeHelp_ThreeColumns">
                <button className="WWH_Button" onClick={handleClikFundacje}>Fundacjom</button>
                <button className="WWH_Button" onClick={handleClikOrganization}>Organizacją<br/> pozarządowym</button>
                <button className="WWH_Button" onClick={handleClikLokal}>Lokalnym zbiórką</button>
            </div>

            <div className="WhoWeHelp_Text">
                <p>{postText}</p>
            </div>

            <div className="WhoWeHelp_Fundactions">
                <div className="WhoWeHelp_Fundactions_Position">
                    {currentPost.map(function(el, i){        
                        return(
                            <div className="Boxs" id="p" >
                                <div key={5 * Math.random().toString()} className="Box-A">
                                    <p className="B-A-One"key={5 * Math.random().toString()}>{`${el.fundacja}`}</p>
                                    <p className="B-A-Two"key={5 * Math.random().toString()}>{`${el.cel}`}</p>
                                </div>
                                <div key={5 * Math.random().toString()} className="Box-B">
                                    <p key={5 * Math.random().toString()}>{`${el.asortyment}`}</p>
                                </div>
                            </div>
                        )
                    })}  
                </div>  
            </div>

            <ul className="ListPagination" >
                {pageNumber.map(function(el){
                    return (
                        <li key={5 * Math.random().toString()} style={{display: display}}>
                            <a key={5 * Math.random().toString()} style={{display: display}} onClick={() => paginate(el)} >{el}</a>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default WhoWeHelp_Fundactions