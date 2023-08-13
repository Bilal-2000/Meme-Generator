import React, {useState} from "react";


export default function Main(){
    const [allMemes, setAllMemes] = React.useState([])
    
    const [meme, setMeme] = useState({
        "topText":"",
        "bottomText":"",
        "randomImage":"https://i.imgflip.com/1g8my4.jpg"
    })

    function handleChange(event){
        console.log(event.target)
        const {name, value} = event.target
        setMeme(prevData => ({
            ...prevData,
            [name]:value
        }))
    }

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    
    function handleClick(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <div className="main">
            <div className="form">
                <form>
                    <input className="first-input" type="text" placeholder="Top Text" value={meme.topText} name="topText" onChange={handleChange}/>
                    <input className="second-input" type="text" placeholder="Bottom Text" value={meme.bottomText} name="bottomText" onChange={handleChange} />
                </form>
                <button onClick={handleClick}><span className="btn-span">Get a new meme image  🖼</span></button>
            </div>
            <div className="meme-img-wrapper">
                <img className="meme-img" src={meme.randomImage} alt=""></img>
                <span className="meme--text top">{meme.topText}</span>
                <span className="meme--text bottom">{meme.bottomText}</span>
            </div>
        </div>
    )
}