const Footer = ()=>{
    return (
        <footer className="footer pt-16 text-white capitalize open-sans">
            <div className="inner-footer flex items-center justify-center p-10">
                <h1 className="font-semibold flex tracking-wide">
                    Made with 
                    <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#dc2626" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg> 
                    <span className="hover:text-red-500 cursor-pointer">Maulana Ikhsan</span>
                </h1>
            </div>
        </footer>
    );
}

export default Footer;