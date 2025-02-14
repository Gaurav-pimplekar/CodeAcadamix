import React from 'react';

const HtmlExercise36 = () => {
    return (
        <div className='w-full'>
            <p className='text-3xl font-bold text-center'>HTML PROJECT</p>
            <ul style={{listStyleType:"disc"}} className='mb-10'>
                <li className='text-2xl font-semibold'> Create html web page that show in below </li>
                <li>Create html files for home, about, contact and login page with relavent message</li>
                <li>Whenever use click on that link show them respective html page</li>
                <li>inside the login page create one html form to login user.</li>
            </ul>
            <table className='w-full border-2 border-black max-w-[70vw]'>
                <tr>
                    <th className=' border-2 border-black' colSpan={"4"} >
                        This is my website header
                    </th>
                </tr>
                <tr>
                    <td className=' border-2 border-black' > <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX12xY29JSB_fphATvWtb4ZSfnS91svzJlRQ&s" alt="bit" /> </td>
                    <td className=' border-2 border-black' ><a href="#">Home</a></td>
                    <td className=' border-2 border-black' ><a href="#">About</a></td>
                    <td className=' border-2 border-black' ><a href="#">Contact</a></td>
                    <td className=' border-2 border-black'><a href="#">Login</a></td>
                </tr>
                <tr>
                    <td className=' border-2 border-black' >Our Program</td>
                    <td colSpan={"2"} rowSpan={"4"}>
                        <h1 className='font-bold text-2xl'>BIT Canada: Empowering IT Careers with Expert Online Training!</h1>
                        <p>BIT provides online professional IT training in Canada, offering<br />
                            a wide range of courses in fields like web development, cloud <br />
                            computing, cybersecurity, machine learning, and more. With <br />
                            expert instructors, hands-on projects, and flexible schedules, B</p>
                    </td>
                    <td className=' border-2 border-black' colSpan={"2"} rowSpan={"4"} >
                        <img src="https://www.bitbaroda.com/uploads/system/9c6947bd95ae487c81d4e19d3ed8cd6f.webp" alt="" />
                    </td>
                </tr>
                <tr>
                    <td className=' border-2 border-black' ><a href="">Web Development</a></td>
                    
                    
                </tr>
                <tr>
                    <td className=' border-2 border-black' ><a href="">Data Science</a></td>
                </tr>
                <tr>
                    <td className=' border-2 border-black' ><a href="">Data Analytics</a></td>
                </tr>
                <tr>
                    <th className=' border-2 border-black' colSpan={"5"} >
                        This is my website footer
                    </th>
                </tr>
            </table>
        </div>
    );
};

export default HtmlExercise36;
