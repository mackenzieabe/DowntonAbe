import React, { useEffect } from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;


    useEffect(() => {
        document.title = (currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="button" aria-label="myname">Mackenzie Giesler-Abe</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}> About </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    <li className="mx-2">
                        <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}> Portfolio </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}> Resume </a>
                    </li>
                    {categories.map((category) => (
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
                    ))}
                </ul>

            </nav>
        </header>
    );
}

export default Nav;