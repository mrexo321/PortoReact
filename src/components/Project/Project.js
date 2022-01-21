import reactLogo from '../../assets/logo512.png';
import project1 from '../../assets/project1.jpeg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';

const Project = ()=> {
    return(

        <section id='project' className="project pt-16 open-sans container mx-auto open-sans text-white">
            <div className="w-full flex justify-between flex-wrap items-center">

                <div className="project-text w-full md:w-3/4">
                    <div className='title'>
                        <h4 className='text-xl capitalize text-gray-200 w-6 font-semibold border-b-4 border-red-600'>Project</h4>
                    </div>

                    <div className='description capitalize text-2xl mt-4 open-sans'>
                        <h2>List Of My Project,</h2>
                        <h2>In this Below</h2>
                        <div className='h-1 w-56 rounded-full bg-white mt-4'></div>
                    </div>
                </div>

                <div className="project-list mt-5 flex justify-between flex-wrap gap-5 w-full">
                    <div className="project-1 w-full md:w-1/3">
                        <div className="image-wrapper group relative">
                            <img className='group-hover:blur group-hover:scale-90 transition' src={project1} alt="" />
                            <div className="group-hover:opacity-100 group-hover:scale-100 scale-90 transition opacity-0 absolute inset-0 justify-center items-center flex">
                                <a rel='noreferrer' target="_blank" href="https://www.kamilahomedecor.com/">
                                <h4 className='text-gray-900 font-semibold text-xl border-2 rounded-full p-4 hover:bg-gray-900 hover:text-white hover:border-0'>Kamila Home Decor</h4>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-2 w-full md:w-1/3">
                        <div className="image-wrapper group relative">
                            <img className='group-hover:blur group-hover:scale-90 transition' src={project2} alt="" />
                            <div className="group-hover:opacity-100 group-hover:scale-100 scale-90 transition opacity-0 absolute inset-0 justify-center items-center flex">
                                <a rel='noreferrer' target="_blank" href="https://4ukqbro2jlz26ebjpwcida-on.drv.tw/www.kamilahome.com/">
                                <h4 className='text-gray-900 font-semibold text-xl border-2 rounded-full p-4 hover:bg-gray-900 hover:text-white hover:border-0'>Kamila Landing Pages</h4>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-3 w-full md:w-1/3">
                        <div className="image-wrapper group relative">
                            <img className='group-hover:blur group-hover:scale-90 transition' src={project3} alt="" />
                            <div className="group-hover:opacity-100 group-hover:scale-100 scale-90 transition opacity-0 absolute inset-0 justify-center items-center flex">
                                <a target='_blank' rel='noreferrer' href="http://uptlaladon.epizy.com/">
                                <h4 className='text-gray-900 font-semibold text-xl border-2 rounded-full p-4 hover:bg-gray-900 hover:text-white hover:border-0'>Pendaftaran Vaksinasi</h4>
                                </a>
                            </div>
                        </div>
                    </div>
                    

                    

                    
                    
                </div>

                
                {/* <div className="project1 gap-1">
                    <div className="image-wrapper">
                        <img src={project1} alt="" />
                    </div>
                </div>

                <div className="project-2">

                </div>

                <div className="project-3">
                    
                </div> */}

            </div>
        </section>

    );
}

export default Project;
