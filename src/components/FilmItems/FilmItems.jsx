import { Link } from "react-router-dom"
import css from "components/FilmItems/FilmItems.module.css"

export default function FilmItems({items}) {
    console.log(items)

        const elements = items.map(({ title, id }) => 
        <Link key={id} to={`/movies/${id}`} className={css.link}>{title}</Link>        
    )
    return (
        <>
            
            <ul>
                {elements}
            </ul>
        </>
      
  )
}
