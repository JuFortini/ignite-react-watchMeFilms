import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  onGenre: GenreResponseProps[];
  onGenreButton: (id: number) => void;
  onSelectedGenreId: number;
}

export function SideBar({onGenre, onGenreButton, onSelectedGenreId}: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {onGenre.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onGenreButton(genre.id)}
            selected={onSelectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}