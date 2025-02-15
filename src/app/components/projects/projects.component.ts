import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-16 bg-cyan-400">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Mis proyectos</h2>
        <p class="text-center mb-8">Proyectos desarrollados</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (project of projects; track project.id) {
          <div class="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              [src]="project.image"
              [alt]="project.title"
              class="w-full h-64 object-cover"
            />
            <div
              class="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            >
              <div class="text-white text-center p-4">
                <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                <p class="mb-4">{{ project.description }}</p>
                <p class="mb-4 underline">{{ project.stack }}</p>
                <a
                  [href]="project.link"
                  class="inline-block px-6 py-2 bg-green-400 text-black rounded-full hover:bg-green-500"
                >
                  Ver proyecto
                </a>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects = [
    // {
    //   id: 1,
    //   title: "Proyecto 1",
    //   description: "Sistema de simposio",
    //   stack: "ApiRest, Angular, AzureBlob",
    //   image: "img/laptop.avif",
    //   link: "https://jegis9.github.io/sim24/index.html",
    // },
    {
      id: 2,
      title: "Proyecto 2",
      description: "Sistema de gestion",
      stack:
        "Html, Css, Bootstrap, DataTable, SweeetAlert, Python, MySql,Cloudinary",
      image: "img/laptop2.avif",
      link: "#",
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Desarrollo frontend de punto de venta",
      stack: "Html, Css, Bootstrap, SweeetAlert, Reguex,Sql server",
      image: "img/laptop3.avif",
      link: "https://jegis9.github.io/Frontend-Punto/",
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Portafolio personal",
      stack: "Angular",
      image: "img/laptop4.avif",
      link: "https://jegis9.github.io/portafolio/",
    },
    {
      id: 5,
      title: "Proyecto 5",
      description: "Desarrollo frontend de landing page de ferreteria",
      stack: "Html, Css, Bootstrap",
      image: "img/laptop5.avif",
      link: "https://jegis9.github.io/",
    },
    {
      id: 6,
      title: "Proyecto 6",
      description: "Desarrollo frontend de landing page de hotel",
      stack: "Html, Css, Bootstrap",
      image: "img/laptop6.avif",
      link: "https://jegis9.github.io/hotel-landing/",
    },
  ];
}
