import { Link, useLocation } from "react-router-dom"
import css from "components/FilmItems/FilmItems.module.css"
import PropTypes from "prop-types"


export default function FilmItems({items}) {
    // console.log(items)

    const location = useLocation()
//   console.log("location", location)

    const elements = items.map(({ title, id }) => 
        <Link key={id} to={`/movies/${id}`} state={{from: location}} className={css.link}>{title}</Link>        
    )
    return (
        <>
            <ul>
                {elements}
            </ul>
        </>
    )
}

FilmItems.propTypes = {
    items: PropTypes.array.isRequired
}

