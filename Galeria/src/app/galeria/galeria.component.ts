import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  images = [
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg/1200px-Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg', alt: 'La Gioconda', description: 'Titulo: La Gioconda (1503-1519), pintada por Leonardo da Vinci.' },
    { src: 'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvZjU5Zjk5YWI0Nzg0OWZjMDQ2MzNiOGYzZmJlZjVlM2MuanBnIiwicmVzaXplLDIwMDAsMjAwMCJdfQ.ZpWCkKqiJfssXdALPkNLpmJkl5Tpgjuui7OmaDZB5VI.jpg', alt: 'El Hijo del Hombre', description: 'Titulo: El Hijo del Hombre (1964), pintada por Rene Magritte.' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg', alt: 'Gotico Etadounidense', description: 'Titulo: Gotico Estadounidense (1930), pintado por Grant Wood.' },
    { src: 'https://i.etsystatic.com/18938589/r/il/0c0d48/1886322004/il_570xN.1886322004_mi1k.jpg', alt: 'Retrato de Adele Bloch-Bauer', description: 'Titulo: Retrato de Adele Bloch-Bauer (1907), pintado por Gustav Klimt' },
    { src: 'https://media.mutualart.com/Images/2023_09/24/12/125720635/kaws-from-urge-1RWUH-570.Jpeg', alt: 'KAWS', description: 'Titulo: (Sin Titulo), pintado por Brian Donnelly "KAWS".' }
  ];

  currentIndex = 0;

  get transformStyle(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  nextSlide(): void {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; 
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
}
