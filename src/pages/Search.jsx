import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Productcard from '../components/Productcard.jsx'
import {Navbar} from '../pages/Navbar.jsx'
import { getSearch, getSearchBtn } from '../Redux/search/action.js'
import { Button } from '@chakra-ui/react';
import '../Style/SearchStyle.css'

export const Search = () =>{
const {search,btn} = useSelector((state)=>{ return state.SearchReducer })
let match = window.matchMedia("(max-width:770px)").matches;
const [productdata,setProductdata] = useState([]);
const [inputs,setInputs] = useState('');
const [page,setPage] = useState(1);
const [result,setResult] = useState(false);
const dispatch = useDispatch()


const handleInput = (e) =>{
let value = '';
if(e == 'Men' || e == 'MEN' || e == 'Mens' || e == 'mens'){
value = 'men'
}
else if(e == 'Women'|| e == 'women' || e == 'WOMEN' || e == 'Womens' || e == 'womens'){
value = 'womens'
}
else if(e == 'shoe' || e == 'SHOE' ||  e == 'SHOES' || e == 'Shoes' || e == 'Shoe'){
value = 'shoes'
}
else if(e == 'jacket' || e == 'JACKET' ||  e == 'JACKETS' || e == 'Jackets' || e == 'Jackets'){
value = 'jackets'
}
else{
value = e
}

setInputs(e)
dispatch(getSearch(value))
}

const handleSearchBtn = () =>{
console.log('tikk')

if(inputs.length>0 || match){
    dispatch(getSearchBtn(1))
}
}

const SearchResult = () =>{
setResult(false)
axios.get(`https://exuberant-pink-jewelry.cyclic.app/${search}?_limit=10&_page=${page}`)
.then((data)=>{
setProductdata(data.data)
setResult(true)
})
.catch((error)=>{
console.log(error)
})
}

const handlePageBtn = (num) =>{
let value = page + Number(num);
setPage(value)
}

useEffect(()=>{
SearchResult()
},[btn,page])



return (
    <div className='search_1'>
    <Navbar/>
    {match?
    <div className='search_1_section'>
        <input type="text" value={inputs} onChange={(e)=>handleInput(e.target.value)} placeholder="Search for items and brands"/>
        <svg onClick={handleSearchBtn} width={'30px'} xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
    </div>:null}


    {result?<div><div className='search_1_item'>
    {productdata.map((ele)=>(
    <Productcard key={ele.id} {...ele}/>
    )) }
    </div>
    <div>
    <div style={{margin:'auto',width:'300px'}}>
    <Button colorScheme={'cyan'} margin={7} variant='outline' onClick={()=>handlePageBtn(-1)}>{'<'}</Button>
    <Button colorScheme={'cyan'} margin={7} variant='outline'>{page}</Button>
    <Button colorScheme={'cyan' }margin={7} variant='outline' onClick={()=>handlePageBtn(+1)}>{'>'}</Button>
    </div>
    </div>
    </div>
    :<div className='no_result'>
        <div>
        <p>NO RESULT</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>
    </div>
    </div>}

    </div> 

)
}

