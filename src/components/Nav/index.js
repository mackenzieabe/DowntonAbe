import React from 'react';

function Nav() {
    // const {
    //     categories = [],
    //     setCurrentCategory,
    //     currentCategory,
    //     contactSelected,
    //     setContactSelected
    // } = props;


    // useEffect(() => {
    //     document.title = (currentCategory.name);
    // }, [currentCategory]);

    return (
        <header className="flex-row px-1">

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Mackenzie Giesler-Abe</a>
                    {/* <a data-testid="link" href="/">
                            <span role="button" aria-label="myname"></span>
                        </a> */}
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a data-testid="about" class="nav-link active" aria-current="page" href="/">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
                            </li>
                            <li class="nav-item">
                                <a data-testid="portfolio" class="nav-link" href="/portfolio">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a data-testid="resume" class="nav-link disabled" href="/resume">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            
        
                
            </nav >
    {/* <nav>
                <ul className="flex-row">
                    <li className="mx-2"> */}
    {/* <a data-testid="about" href="/" onClick={() => setContactSelected(false)}> About </a> */ }
    {/* <a data-testid="about" href="/"> About </a>
                    </li> */}
    {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}> */ }
    {/* // <li className="mx-2"> */}
    {/* <span onClick={() => setContactSelected(true)}>Contact</span> */ }
    {/* // <span>Contact</span> */}

    {/* </li>
            <li className="mx-2"> */}
    {/* <a data-testid="portfolio" href="/portfolio" onClick={() => setContactSelected(false)}> Portfolio </a> */ }
    {/* <a data-testid="portfolio" href="/portfolio"> Portfolio </a> */ }
    {/* // </li> */}
    {/* // <li className="mx-2"> */}
    {/* <a data-testid="resume" href="/resume" onClick={() => setContactSelected(false)}> Resume </a> */ }
    {/* //     <a data-testid="resume" href="/resume"> Resume </a>
    // </li> */}
    {/* {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setContactSelected(false)
                                }}
                            >
                                {category.name}
                            </span>
                        </li>
                    ))} */}
        

            
        </header >
    );
}

export default Nav;