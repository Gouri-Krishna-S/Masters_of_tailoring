import { useState } from 'react'

export default function Contact()
{
    const [formData, setFormData ] = useState(
        {
            email: '',
            description: ''
        }
    )

    function handleChange(event)
    {
        
        const { name, value } = event.target;
        setFormData(prevState => (
            {
                ...prevState,
                [name]: value
            }
        ));
        console.log(formData);
    }

    function handleSubmit()
    {

    }

    return(
        <section id="contact" className="w-full h-screen bg-[#F2E7DC] flex flex-col md:flex-row items-center justify-center">
            <div className="w-full h-[60%] md:w-[50%] md:h-full flex flex-col justify-center items-center gap-16">
                <h1 className='block font-normal text-3xl xl:text-4xl text-left text-[#260502] capitalize'><span className='text-[#F28928]'>Contact</span> us</h1>
                <div className='w-[80%] text-[10px] md:text-[1rem]'>
                    <p >Let's Bring Your Vision to Life! <br />
                    Have a question about our services,or need help placing an order?We'd love to hear from you!
                    Whether it's custom measurements or design inspirations,we are here to guide you.</p><br/>
                    <span>Reach Out to Us Anytime</span>
                    <ul className='px-8 list-disc'><li>Phone:<span className='text-[#F28928]'>+123-456-7890</span></li></ul><br/>
                    <p>Visit Our Shop<br/>Step into our workshop and experience craftmanship first-hand.We're located at:<br/>
                    <span className='text-[#F28928]'>123 Tailor Street,Fashion District,Design city</span></p><br/>
                    <p>Business Hours:<br/>
                    <span className='text-[#F28928]'>Monday - Friday:9:00 AM - 6:00 PM<br/>
                    Saturday: 10:00 AM - 4:00 PM <br/>Sunday: Closed</span>
                    </p>
                </div>
                
            </div>

            <div className="w-full h-[40%] md:w-[50%] md:h-full flex flex-col justify-center items-center ">
                <form 
                    className="w-[80%] h-[90%] md:h-[75%] text-[#262626] bg-stone-100 shadow-md rounded-lg p-4 flex flex-col items-center justify-center" 
                    onSubmit={ handleSubmit }
                >
                    <p className="w-full pb-4 flex flex-col items-center">
                        <label className="block text-sm font-bold w-[80%] text-left pb-2 " htmlFor="email">Email</label>
                        <input 
                            className="bg-stone-300 shadow appearance-none rounded w-[80%] py-1 md:py-2 px-2  leading-tight focus:outline-none focus:border-b-2 focus:border-[#F28928]" 
                            type="email" 
                            id="email" 
                            name="email"
                            placeholder="Email id"
                            onChange={ handleChange }
                            required
                            autoComplete='username'
                        />
                    </p>
                    
                    <p className="w-full flex flex-col items-center pb-4">
                        <label className="block text-sm font-bold w-[80%] text-left pb-2" htmlFor="message">Message</label>
                        <textarea 
                            className="bg-stone-300 shadow appearance-none rounded h-[2.5rem] md:h-[5rem] lg:h-[10rem] p-1 md:p-2 w-[80%]  focus:outline-none focus:border-b-2 focus:border-[#F28928]"
                            id="message" 
                            type="text" 
                            name="decription"
                            onChange={ handleChange }
                            required
                        />
                    </p>
                    
                    <button 
                            className="bg-slate-800 hover:bg-slate-950 text-stone-100 font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-[80%]" 
                            type="submit"
                        >
                            Submit
                    </button> 
                </form>
            </div>
        </section>
    );
}