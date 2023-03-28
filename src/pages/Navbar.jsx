import '../Style/navbarStyle.css'
import '../Style/navbarMedia.css'
import { useEffect, useState } from 'react'

export const Navbar = () =>{
// const [show,setShow] = useState(true)
// const controlNavbar = () =>{
//     if(window.screenY > 100){
//         setShow(false)
//     }else{
//         setShow(true)
//     }
// }

// useEffect(()=>{
// window.addEventListener('scroll',controlNavbar)
// return () =>{
//     window.removeEventListener('scroll',controlNavbar)
// }
// },[setShow])



return (
    <nav>
    <div className='nav_part_1'>
    <div className="nav_top_1">
        <div>
            |||
        </div>
        <div>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHN5bWJvbCBpZD0iYSIgdmlld0JveD0iMCAwIDIzIDI0Ij48cGF0aCBkPSJNNS4wNzYgMTIuMDE3YzAtMy44MTQgMi4zMjgtNy41MDkgNi41MjEtNy41MDkgNC4xOTQgMCA2LjUyMiAzLjY5NSA2LjUyMiA3LjUxIDAgMTAuMDk4LTEzLjA0MyAxMC4wOTUtMTMuMDQzIDBabTE3LjkxOC03LjUyMVYuNjAzaC00Ljg3NXYxLjUxNEMxNi4xMjcuNjgzIDEzLjk2Ny4wMTMgMTEuNjMgMGgtLjAzM0wxMS41NjQgMEM4Ljc0Mi4wMTYgNi4xNzguOTg4IDMuODU3IDMuMTEgMi41OCA0LjI5MSAxLjYwNyA1LjYzNS45NjQgNy4xMTQuMzI3IDguNTg4IDAgMTAuMjM5IDAgMTIuMDE1YzAgMS42NTguMjg4IDMuMjExLjg1MyA0LjYxNi41NjYgMS40MDUgMS40MjYgMi43MDUgMi41NiAzLjg2MyAxLjEzNCAxLjE2IDIuNDAxIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N2guMDVsLjA0OS4wMDFjMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY5LS44NzEuNzMtLjMxIDEuNDMzLS43MDcgMi4xMDMtMS4xODd2MS40NTVoNC44NzVWNC40OTZaIi8+PC9zeW1ib2w+PHN5bWJvbCBpZD0iYiIgdmlld0JveD0iMCAwIDU3IDI0Ij48cGF0aCBkPSJNNTAuOTY0IDE5LjMxNmMtMS4wMTggMS4wMDktMy40OTUgMS40MDUtNS4yODIuMjUxLTEuMDYtLjY4NC0xLjgwMS0xLjkxMy0xLjc5OC0zLjE5OGwtNC41NTktLjAwMmMuNDk4LTEuMzM1Ljc1LTIuNzk4Ljc1LTQuMzUyIDAtLjM0OC0uMDEyLS42OS0uMDM3LTEuMDI4LjMuMzc2LjY1MS43MjEgMS4wNTggMS4wMjIgMi40OTUgMS44MzMgNS42NSAxLjcyNiA4LjQwNSAyLjg2Ny42NDQuMjY3IDEuMjgzLjYxOSAxLjcwNSAxLjE4Ni44NiAxLjE1OS44MDYgMi4yMTUtLjI0MiAzLjI1NFptLTI5LjAwNy03LjI5OWMwLTMuODE0IDIuMzI4LTcuNTEgNi41MjEtNy41MVMzNSA4LjIwNCAzNSAxMi4wMThjMCAxMC4xLTEzLjA0MiAxMC4wOTYtMTMuMDQyIDBabS02LjEzNi0uMDAzYy0yLjQ5NS0xLjgzMy01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjItMS43MDUtMS4xODctLjcwMy0uOTQ2LS41OTMtMi40MjcuMjQxLTMuMjUzIDEuMDE1LTEuMDA2IDMuNDkyLTEuNDA4IDUuMjgyLS4yNTIgMS4wNi42ODUgMS44MDIgMS45MTQgMS43OTggMy4xOThsNC41OTYuMDAyYy0uNDk0IDEuMzMzLS43NDcgMi43OTgtLjc0NyA0LjM1OSAwIC4zNjMuMDE1LjcyMi4wNDIgMS4wNzVhNS42OTIgNS42OTIgMCAwIDAtMS4xMDItMS4wNzZaTS4xOTQgOS41NDhhNS43MzMgNS43MzMgMCAwIDAgMS45IDIuNDY2YzIuNDk1IDEuODMzIDUuNjUgMS43MjUgOC40MDUgMi44NjcuNjQ1LjI2NyAxLjI4NC42MTggMS43MDUgMS4xODYuNzAzLjk0Ni41OTMgMi40MjctLjI0MiAzLjI1My0xLjAxNyAxLjAxLTMuNDk1IDEuNDA2LTUuMjgxLjI1Mi0xLjA2LS42ODUtMS44MDItMS45MTMtMS43OTgtMy4xOThsLTQuNjg5LS4wMDJtMCAyLjI3OGMuNDk0IDEuMzkxIDEuMzc1IDIuNjQgMi41MzIgMy41MjYgMi4xNDkgMS42NDcgNS4wMDggMS45OCA3LjY4MyAxLjc2NSAxLjY0OC0uMTMyIDMuMzE3LS40NjQgNC43NDUtMS4zMTcgMS43ODUtMS4wNjcgMi44MzYtMy4wMiAzLjAxNi01LjA0M2ExMi4xMiAxMi4xMiAwIDAgMCAyLjEyNCAyLjkxM2MxLjEzNCAxLjE2IDIuNDAyIDIuMDQyIDMuNzY2IDIuNjIgMS4zMzYuNTY1IDIuODA3Ljg1OCA0LjM2OS44N3YuMDAxaC4wOTljMS41NjItLjAxMyAzLjAzMy0uMzA2IDQuMzY4LS44NzEgMS4zNjUtLjU3OCAyLjYzMy0xLjQ2IDMuNzY2LTIuNjJhMTIuMDc4IDEyLjA3OCAwIDAgMCAyLjIwNy0zLjA3NWMuMzM3IDEuODcyIDEuMzcgMy42MTIgMi44NTggNC43NTMgMi4xNSAxLjY0NyA1LjAwOCAxLjk4IDcuNjgzIDEuNzY1IDIuMDc4LS4xNjggMy4yNi0uNDMgNC43NDYtMS4zMTggMy42Mi0yLjE2MyA0LjIyLTcuOTc1LjY2Ni0xMC42MS0yLjQ5NS0xLjgzMi01LjY1LTEuNzI1LTguNDA1LTIuODY2LS42NDUtLjI2Ny0xLjI4NC0uNjE5LTEuNzA1LTEuMTg2LS43MDItLjk0Ny0uNTkyLTIuNDI3LjI0Mi0zLjI1NCAxLjAxNS0xLjAwNiAzLjQ5Mi0xLjQwOCA1LjI4Mi0uMjUyIDEuMDYuNjg1IDEuODAxIDEuOTE0IDEuNzk4IDMuMTk4bDUuMTMuMDAzYy0uMDg1LTIuMjU4LTEuMjA4LTQuNDUyLTIuOTczLTUuODA1QzUyLjA0LjIgNDkuMTgyLS4xMzMgNDYuNTA4LjA4MiA0NC44Ni4yMTUgNDMuMTkuNTQ3IDQxLjc2MiAxLjRjLTEuNzc4IDEuMDYyLTIuODE1IDIuOTgtMy4wMSA0Ljk3LS42MjUtMS4xODgtMS40NzMtMi4yOC0yLjUzMy0zLjI2QzMzLjg5OC45ODcgMzEuMzM0LjAxNSAyOC41MSAwaC0uMDY2Yy0yLjgyMi4wMTYtNS4zODYuOTg4LTcuNzA3IDMuMTEtMS4xNDYgMS4wNi0yLjA0NCAyLjI0OS0yLjY4MSAzLjU1LS4zMjctMS44OTMtMS4zNjUtMy42NTYtMi44NjgtNC44MDhDMTMuMDQuMjA1IDEwLjE4MS0uMTI4IDcuNTA2LjA4NyA1Ljg1OC4yMiA0LjE5LjU1IDIuNzYgMS40MDUgMS41NTIgMi4xMjcuNjg2IDMuMjQ0LjE5NCA0LjUxIi8+PC9zeW1ib2w+PHVzZSBocmVmPSIjYSIgd2lkdGg9IjIzIi8+PHVzZSBocmVmPSIjYiIgeD0iMjIuOCIgd2lkdGg9IjU3Ii8+PC9zdmc+" alt="logo" />
        </div>
        <div>
            WOMEN
        </div>
        <div>
            MEN
        </div>
    </div>
    <div className='nav_top_2'>
        <input type="text" placeholder="Search for items and brands"/>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
    </div>
    <div className="nav_top_3">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
        </svg>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
        </svg>
        </div>
    </div>
    </div>
    <div className='nav_part_2'>
    <div>
        <div>Sale</div>
        <div>New in</div>
        <div>Clothing</div>
        <div>Dresses</div>
        <div>Shoes</div>
        <div>Summer</div>
        <div>Activewere</div>
        <div>Brands</div>
        <div>Accessories</div>
        <div>Jeans</div>
        <div>Face</div>
        <div>Topshop</div>
        <div>Marketplace</div>
        <div>Outlet</div>
    </div>
    </div>
    </nav>
)
}